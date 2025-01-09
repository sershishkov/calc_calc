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

export interface DescribeCheckTableInterface {
  numberLeft: number;
  operator: string;
  numberRight: number;
  valueResult: number;
  checkLeft: number;
  checkRight: number;
  checkSumLeft: number;
  checkResult: number;
  displayRowTotal: boolean;
}

export interface ExampleCheckAnswerObjInterface {
  id?: string;
  example: string;
  userAnswerCheckNumberLeft: string;
  userAnswerCheckNumberRight: string;
  userAnswerCheckResultLeft: string;
  userAnswerCheckResultRight: string;

  checkNumberLeft: number;
  checkNumberRight: number;
  checkResultLeft: number;
  checkResultRight: number;

  doneCheck: boolean;
}

export interface ExampleSimpleAndCheckAnswerObjInterface {
  id?: string;
  example: string;
  userAnswer: string;
  userAnswerCheckNumberLeft: string;
  userAnswerCheckNumberRight: string;
  userAnswerCheckResultLeft: string;
  userAnswerCheckResultRight: string;

  resultRight: number;
  checkNumberLeft: number;
  checkNumberRight: number;
  checkResultLeft: number;
  checkResultRight: number;

  doneExample: boolean;
  doneCheck: boolean;
  doneExcercise: boolean;
}

export interface ExampleSimplDivWithRestInterface {
  example: string;
  userResult: string;
  userAnswerRem: string;

  resultRight: number;
  reminderOfDivision: number;

  doneExcercise: boolean;
}

export interface ExampleStarOrDotLevel_7Interface {
  digit: number | string;
  isStar: boolean;
  isDot: boolean;
  color?: string;
  dots?: string;
}
