import type { Metadata } from 'next';
import SquaringCloseTo50 from './SquaringCloseTo50';

const exerciseName = 'Уровень 5 Возведение в квадрат чисел близких к 50';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function SquaringEnding5Page() {
  return <SquaringCloseTo50 exerciseName={exerciseName} />;
}
