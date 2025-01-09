import type { Metadata } from 'next';
import MyltiplyBy4 from './MyltiplyBy4';

const exerciseName = 'Уровень 7 Умножение на 4';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function MyltiplyBy4Page() {
  return <MyltiplyBy4 exerciseName={exerciseName} />;
}
