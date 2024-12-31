import { NextRequest, NextResponse } from 'next/server';
import Model__Statistic from '@/lib/mongoose/models/Model__Statistic';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/options';
import { StatisticExerciseInterface } from '@/interfaces/refdata';

import { connectToDB } from '@/lib/mongoose/connectToDB';

export const POST = async (request: NextRequest) => {
  const formData: StatisticExerciseInterface = await request.json();

  const { exerciseName, tasksOk, tasksError, exerciseTime } = formData;
  if (!exerciseName || tasksOk + tasksError === 0 || !exerciseTime) {
    return new NextResponse(
      JSON.stringify({
        message: 'Please add all fields',
      }),
      { status: 400 }
    );
  }

  try {
    await connectToDB();
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse(
        JSON.stringify({
          message: 'You are not authorized',
        }),
        { status: 400 }
      );
    }
    const userID = session?.user._id;
    if (!userID) {
      return new NextResponse(
        JSON.stringify({
          message: 'This user does not exist!',
        }),
        { status: 400 }
      );
    }

    const exerciseAlreadyExists = await Model__Statistic.findOne({
      $and: [{ userID }, { exerciseName }],
    });

    if (!exerciseAlreadyExists) {
      const new__ITEM = await Model__Statistic.create({
        userID,
        exerciseName,
        tasksOk,
        tasksError,
        exerciseTime,
        minTaskTime: exerciseTime / (tasksOk + tasksError),
      });
      const responseObj = {
        message: 'Добавлено успешно',
        my_data: new__ITEM,
      };

      return new NextResponse(JSON.stringify(responseObj), { status: 200 });
    } else {
      const averageTaskTime = exerciseTime / (tasksOk + tasksError);
      const newMinTaskTime =
        averageTaskTime < exerciseAlreadyExists.minTaskTime
          ? averageTaskTime
          : exerciseAlreadyExists.minTaskTime;

      exerciseAlreadyExists.tasksOk = exerciseAlreadyExists.tasksOk + tasksOk;
      exerciseAlreadyExists.tasksError =
        exerciseAlreadyExists.tasksError + tasksError;

      exerciseAlreadyExists.exerciseTime =
        exerciseAlreadyExists.exerciseTime + exerciseTime;
      exerciseAlreadyExists.minTaskTime = newMinTaskTime;

      await exerciseAlreadyExists.save();

      const responseObj = {
        message: 'Элемент изменен успешно',
        my_data: exerciseAlreadyExists,
      };

      return new NextResponse(JSON.stringify(responseObj), { status: 200 });
    }
  } catch (error: any) {
    console.log(error.message);
    return new NextResponse(error.message, { status: 500 });
  }
};

export const GET = async () => {
  try {
    await connectToDB();
    const session = await getServerSession(authOptions);

    if (!session) {
      return new NextResponse(
        JSON.stringify({
          message: 'You are not authorized ',
        }),
        { status: 400 }
      );
    }
    const userID = session?.user?._id;
    if (!userID) {
      return new NextResponse(
        JSON.stringify({
          message: 'This user does not exist!',
        }),
        { status: 400 }
      );
    }

    const all__ITEMS = await Model__Statistic.find({
      userID,
    }).sort({
      exerciseName: 1,
    });

    if (!all__ITEMS) {
      return new NextResponse(
        JSON.stringify({
          message: 'На данный момент ничего в базе нет',
        }),

        {
          status: 400,
        }
      );
    }
    let totalTasksOk = 0;
    let totalTasksError = 0;
    let totalExerciseTime = 0;
    let totalTasksCount = 0;
    all__ITEMS.forEach((item) => {
      totalTasksOk += item.tasksOk;
      totalTasksError += item.tasksError;
      totalExerciseTime += item.exerciseTime;
      totalTasksCount += item.tasksCount;
    });
    const responseObj = {
      message: 'Найдено успешно',
      my_data: {
        items: all__ITEMS,
        totalTasksOk,
        totalTasksError,
        totalExerciseTime,
        totalTasksCount,
      },
    };
    return new NextResponse(JSON.stringify(responseObj), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
};
