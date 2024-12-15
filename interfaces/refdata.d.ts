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

export interface DescribeExampleTableMultInterface {
  hintPlusLeft: string;
  hintPlusRight: string;
  refNumber: string;
  numberLeft: string;
  numberRight: string;
  valueIntermediate: string;
  hintMinusLeft: string;
  hintMinusRight: string;
  valueToAdd: string;
  valueToMinus: string;
  valueResult: string;
  displayRowPlusHits: boolean;
  displayRowMinusHints: boolean;
  displayRowResults: boolean;
}
