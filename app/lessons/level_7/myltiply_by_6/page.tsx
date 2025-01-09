import type { Metadata } from 'next';
import MyltiplyBy6 from './MyltiplyBy6';

const exerciseName = 'Уровень 7 Умножение на 6';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function MyltiplyBy6Page() {
  return <MyltiplyBy6 exerciseName={exerciseName} />;
}
