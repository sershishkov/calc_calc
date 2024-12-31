import type { Metadata } from 'next';
import SquaringEnding9 from './SquaringEnding9';

const exerciseName = 'Уровень 5 Возведение в квадрат чисел оканчивающихся на 9';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function SquaringEnding5Page() {
  return <SquaringEnding9 exerciseName={exerciseName} />;
}
