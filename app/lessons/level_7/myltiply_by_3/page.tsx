import type { Metadata } from 'next';
import MyltiplyBy3 from './MyltiplyBy3';

const exerciseName = 'Уровень 7 Умножение на 3';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function MyltiplyBy3Page() {
  return <MyltiplyBy3 exerciseName={exerciseName} />;
}
