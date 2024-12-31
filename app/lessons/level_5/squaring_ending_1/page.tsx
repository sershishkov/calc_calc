import type { Metadata } from 'next';
import SquaringEnding1 from './SquaringEnding1';

const exerciseName = 'Уровень 5 Возведение в квадрат чисел оканчивающихся на 1';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function SquaringEnding5Page() {
  return <SquaringEnding1 exerciseName={exerciseName} />;
}
