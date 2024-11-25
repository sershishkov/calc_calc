import { Schema, model, models } from 'mongoose';

import { StatisticInterface } from '@/interfaces/refdata';

const statistic__Schema = new Schema<StatisticInterface>(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'Please add an user id'],
    },
    level1__simple_addition: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level1__simple_subtraction: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level1__simple_multiplication: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level1__simple_division: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_2__ref_number_10: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_2__ref_number_20: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_2__ref_number_100_above: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_2__ref_number_100_below: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_2__ref_number_100_mix: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_2__checking_answers: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_3__ref_number_20: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_3__ref_number_50: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_3__ref_number_200: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_3__ref_number_500: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_3__decimals: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_3__two_ref_numbers: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_4__addition: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_4__substruction: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_5__squaring_ending_5: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_5__squaring_close_to_50: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_5__squaring_close_to_500: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_5__squaring_ending_1: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_5__squaring_ending_9: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_6__division_by_single_number: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_6__division_by_multipliers: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_7__myltiply_by_11: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_7__myltiply_by_12: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_7__myltiply_by_6: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_7__myltiply_by_7: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_7__myltiply_by_5: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_7__myltiply_by_9: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_7__myltiply_by_8: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_7__myltiply_by_4: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_7__myltiply_by_3: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
    level_8__fast_multiplay_two_digit_by_two_digit: {
      exercisesOk: {
        type: Number,
        default: 0,
      },
      exercisesError: {
        type: Number,
        default: 0,
      },
      time: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

statistic__Schema.virtual('totalExercisesOk').get(function () {
  const total =
    this.level1__simple_addition.exercisesOk +
    this.level1__simple_subtraction.exercisesOk +
    this.level1__simple_multiplication.exercisesOk +
    this.level1__simple_division.exercisesOk +
    this.level_2__ref_number_10.exercisesOk +
    this.level_2__ref_number_20.exercisesOk +
    this.level_2__ref_number_100_above.exercisesOk +
    this.level_2__ref_number_100_below.exercisesOk +
    this.level_2__ref_number_100_mix.exercisesOk +
    this.level_2__checking_answers.exercisesOk +
    this.level_3__ref_number_20.exercisesOk +
    this.level_3__ref_number_50.exercisesOk +
    this.level_3__ref_number_200.exercisesOk +
    this.level_3__ref_number_500.exercisesOk +
    this.level_3__decimals.exercisesOk +
    this.level_3__two_ref_numbers.exercisesOk +
    this.level_4__addition.exercisesOk +
    this.level_4__substruction.exercisesOk +
    this.level_5__squaring_ending_5.exercisesOk +
    this.level_5__squaring_close_to_50.exercisesOk +
    this.level_5__squaring_close_to_500.exercisesOk +
    this.level_5__squaring_ending_1.exercisesOk +
    this.level_5__squaring_ending_9.exercisesOk +
    this.level_6__division_by_single_number.exercisesOk +
    this.level_6__division_by_multipliers.exercisesOk +
    this.level_7__myltiply_by_11.exercisesOk +
    this.level_7__myltiply_by_12.exercisesOk +
    this.level_7__myltiply_by_6.exercisesOk +
    this.level_7__myltiply_by_7.exercisesOk +
    this.level_7__myltiply_by_5.exercisesOk +
    this.level_7__myltiply_by_9.exercisesOk +
    this.level_7__myltiply_by_8.exercisesOk +
    this.level_7__myltiply_by_4.exercisesOk +
    this.level_7__myltiply_by_3.exercisesOk +
    this.level_8__fast_multiplay_two_digit_by_two_digit.exercisesOk;
  return total;
});

statistic__Schema.virtual('totalExercisesError').get(function () {
  const total =
    this.level1__simple_addition.exercisesError +
    this.level1__simple_subtraction.exercisesError +
    this.level1__simple_multiplication.exercisesError +
    this.level1__simple_division.exercisesError +
    this.level_2__ref_number_10.exercisesError +
    this.level_2__ref_number_20.exercisesError +
    this.level_2__ref_number_100_above.exercisesError +
    this.level_2__ref_number_100_below.exercisesError +
    this.level_2__ref_number_100_mix.exercisesError +
    this.level_2__checking_answers.exercisesError +
    this.level_3__ref_number_20.exercisesError +
    this.level_3__ref_number_50.exercisesError +
    this.level_3__ref_number_200.exercisesError +
    this.level_3__ref_number_500.exercisesError +
    this.level_3__decimals.exercisesError +
    this.level_3__two_ref_numbers.exercisesError +
    this.level_4__addition.exercisesError +
    this.level_4__substruction.exercisesError +
    this.level_5__squaring_ending_5.exercisesError +
    this.level_5__squaring_close_to_50.exercisesError +
    this.level_5__squaring_close_to_500.exercisesError +
    this.level_5__squaring_ending_1.exercisesError +
    this.level_5__squaring_ending_9.exercisesError +
    this.level_6__division_by_single_number.exercisesError +
    this.level_6__division_by_multipliers.exercisesError +
    this.level_7__myltiply_by_11.exercisesError +
    this.level_7__myltiply_by_12.exercisesError +
    this.level_7__myltiply_by_6.exercisesError +
    this.level_7__myltiply_by_7.exercisesError +
    this.level_7__myltiply_by_5.exercisesError +
    this.level_7__myltiply_by_9.exercisesError +
    this.level_7__myltiply_by_8.exercisesError +
    this.level_7__myltiply_by_4.exercisesError +
    this.level_7__myltiply_by_3.exercisesError +
    this.level_8__fast_multiplay_two_digit_by_two_digit.exercisesError;
  return total;
});

statistic__Schema.virtual('totalExercisesTime').get(function () {
  const total =
    this.level1__simple_addition.time +
    this.level1__simple_subtraction.time +
    this.level1__simple_multiplication.time +
    this.level1__simple_division.time +
    this.level_2__ref_number_10.time +
    this.level_2__ref_number_20.time +
    this.level_2__ref_number_100_above.time +
    this.level_2__ref_number_100_below.time +
    this.level_2__ref_number_100_mix.time +
    this.level_2__checking_answers.time +
    this.level_3__ref_number_20.time +
    this.level_3__ref_number_50.time +
    this.level_3__ref_number_200.time +
    this.level_3__ref_number_500.time +
    this.level_3__decimals.time +
    this.level_3__two_ref_numbers.time +
    this.level_4__addition.time +
    this.level_4__substruction.time +
    this.level_5__squaring_ending_5.time +
    this.level_5__squaring_close_to_50.time +
    this.level_5__squaring_close_to_500.time +
    this.level_5__squaring_ending_1.time +
    this.level_5__squaring_ending_9.time +
    this.level_6__division_by_single_number.time +
    this.level_6__division_by_multipliers.time +
    this.level_7__myltiply_by_11.time +
    this.level_7__myltiply_by_12.time +
    this.level_7__myltiply_by_6.time +
    this.level_7__myltiply_by_7.time +
    this.level_7__myltiply_by_5.time +
    this.level_7__myltiply_by_9.time +
    this.level_7__myltiply_by_8.time +
    this.level_7__myltiply_by_4.time +
    this.level_7__myltiply_by_3.time +
    this.level_8__fast_multiplay_two_digit_by_two_digit.time;
  return total;
});

export default models.statistic || model('statistic', statistic__Schema);
