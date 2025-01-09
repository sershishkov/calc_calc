import type { Metadata } from 'next';
import MyltiplyBy11 from './MyltiplyBy11';

const exerciseName = 'Уровень 7 Умножение на 11';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function MyltiplyBy11Page() {
  return <MyltiplyBy11 exerciseName={exerciseName} />;
}
