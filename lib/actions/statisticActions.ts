'use server';
import { headers } from 'next/headers';

const errorToMessage = (newError: any) => {
  const message =
    newError?.response?.data?.message ||
    newError.message ||
    newError.toString();
  return message;
};

export const addOrUpdateStatistic = async (dataObject: any) => {
  const headersList = await headers();

  const cookie = headersList.get('cookie');
  try {
    const res = await fetch(`http://localhost:3000/api/user/statistic`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookie ?? '',
      },
      body: JSON.stringify(dataObject),
      cache: 'no-store',
    });
    const myData = await res.json();

    if (!res.ok || !myData.my_data) {
      throw new Error(myData.message);
    }
  } catch (error: any) {
    const message = errorToMessage(error);
    console.log(message);
  }
};

export const getMyStatistic = async () => {
  const headersList = await headers();

  const cookie = headersList.get('cookie');
  try {
    const res = await fetch(`http://localhost:3000/api/user/statistic`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookie ?? '',
      },
    });

    const myData = await res.json();

    if (!res.ok || !myData.my_data) {
      throw new Error(myData.message);
    }

    return myData.my_data;
  } catch (error: any) {
    const message = errorToMessage(error);
    console.log(message);
  }
};
