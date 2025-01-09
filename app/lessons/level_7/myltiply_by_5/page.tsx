import type { Metadata } from 'next';
import MyltiplyBy5 from './MyltiplyBy5';

const exerciseName = 'Уровень 7 Умножение на 5';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function MyltiplyBy5Page() {
  return <MyltiplyBy5 exerciseName={exerciseName} />;
}
