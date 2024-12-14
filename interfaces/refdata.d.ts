import { Types } from 'mongoose';
export interface I_User {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  role?: string;
}

export interface StatisticExerciseInterface {
  _id?: string;
  userID?: Types.ObjectId;
  exerciseName: string;
  tasksOk: number;
  tasksError: number;
  exerciseTime: number;
  minTaskTime: number;
  tasksCount?: number;
}
