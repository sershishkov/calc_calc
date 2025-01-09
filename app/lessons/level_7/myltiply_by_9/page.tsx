import type { Metadata } from 'next';
import MyltiplyBy9 from './MyltiplyBy9';

const exerciseName = 'Уровень 7 Умножение на 9';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function MyltiplyBy9Page() {
  return <MyltiplyBy9 exerciseName={exerciseName} />;
}
