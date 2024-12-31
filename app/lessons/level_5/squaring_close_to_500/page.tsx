import type { Metadata } from 'next';
import SquaringCloseTo500 from './SquaringCloseTo500';

const exerciseName = 'Уровень 5 Возведение в квадрат чисел близких к 500';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function SquaringEnding5Page() {
  return <SquaringCloseTo500 exerciseName={exerciseName} />;
}
