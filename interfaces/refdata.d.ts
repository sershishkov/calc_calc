import { Types } from 'mongoose';
export interface I_User {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  role?: string;
}

export interface StatisticExercise {
  _id?: string;
  exercisesOk: number;
  exercisesError: number;
  time: number;
}

export interface StatisticInterface {
  _id?: string;
  userID: Types.ObjectId;
  level1__simple_addition: StatisticExercise;
  level1__simple_subtraction: StatisticExercise;
  level1__simple_multiplication: StatisticExercise;
  level1__simple_division: StatisticExercise;

  level_2__ref_number_10: StatisticExercise;
  level_2__ref_number_20: StatisticExercise;
  level_2__ref_number_100_above: StatisticExercise;
  level_2__ref_number_100_below: StatisticExercise;
  level_2__ref_number_100_mix: StatisticExercise;
  level_2__checking_answers: StatisticExercise;

  level_3__ref_number_20: StatisticExercise;
  level_3__ref_number_50: StatisticExercise;
  level_3__ref_number_200: StatisticExercise;
  level_3__ref_number_500: StatisticExercise;
  level_3__decimals: StatisticExercise;
  level_3__two_ref_numbers: StatisticExercise;

  level_4__addition: StatisticExercise;
  level_4__substruction: StatisticExercise;

  level_5__squaring_ending_5: StatisticExercise;
  level_5__squaring_close_to_50: StatisticExercise;
  level_5__squaring_close_to_500: StatisticExercise;
  level_5__squaring_ending_1: StatisticExercise;
  level_5__squaring_ending_9: StatisticExercise;

  level_6__division_by_single_number: StatisticExercise;
  level_6__division_by_multipliers: StatisticExercise;

  level_7__myltiply_by_11: StatisticExercise;
  level_7__myltiply_by_12: StatisticExercise;
  level_7__myltiply_by_6: StatisticExercise;
  level_7__myltiply_by_7: StatisticExercise;
  level_7__myltiply_by_5: StatisticExercise;
  level_7__myltiply_by_9: StatisticExercise;
  level_7__myltiply_by_8: StatisticExercise;
  level_7__myltiply_by_4: StatisticExercise;
  level_7__myltiply_by_3: StatisticExercise;

  level_8__fast_multiplay_two_digit_by_two_digit: StatisticExercise;
}
