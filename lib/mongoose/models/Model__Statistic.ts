import { Schema, model, models } from 'mongoose';

import { StatisticExerciseInterface } from '@/interfaces/refdata';

const statistic__Schema = new Schema<StatisticExerciseInterface>(
  {
    userID: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'Please add an user id'],
    },
    exerciseName: {
      type: String,
      required: [true, 'Please add an exerciseName'],
    },
    tasksOk: {
      type: Number,
    },
    tasksError: {
      type: Number,
    },
    exerciseTime: {
      type: Number,
    },
    minTaskTime: {
      type: Number,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

statistic__Schema.virtual('tasksCount').get(function () {
  return this.tasksOk + this.tasksError;
});

export default models.statistic || model('statistic', statistic__Schema);
