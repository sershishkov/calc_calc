// import { toast } from 'react-toastify';
// 'use server';
import { headers } from 'next/headers';

const errorToMessage = (newError: any) => {
  const message =
    newError?.response?.data?.message ||
    newError.message ||
    newError.toString();
  return message;
};

export const itemAddOrUpdate = async (dataObject: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/user/statistic`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataObject),
      cache: 'no-store',
    });
    const myData = await res.json();

    if (!res.ok || !myData.my_data) {
      throw new Error(myData.message);
    }

    // toast.success(`${myData.message}`);
  } catch (error: any) {
    const message = errorToMessage(error);
    console.log(message);
    // toast.error(`${message}`);
  }
};

export const getMyStatistic = async () => {
  const headersList = await headers();

  const cookie = headersList.get('cookie');
  try {
    const res = await fetch(`http://localhost:3000/api/user/statistic`, {
      method: 'GET',
      headers: {
        // 'Content-Type': 'application/json',
        Cookie: cookie ?? '',
      },
    });

    const myData = await res.json();
    // console.log(myData);
    if (!res.ok || !myData.my_data) {
      throw new Error(myData.message);
    }

    return myData.my_data;
  } catch (error: any) {
    const message = errorToMessage(error);
    console.log(message);
    // toast.error(`${message}`);
  }
};
