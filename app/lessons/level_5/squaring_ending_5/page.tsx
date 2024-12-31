import type { Metadata } from 'next';
import SquaringEnding5 from './SquaringEnding5';

const exerciseName = 'Уровень 5 Возведение в квадрат чисел оканчивающихся на 5';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function SquaringEnding5Page() {
  return <SquaringEnding5 exerciseName={exerciseName} />;
}
