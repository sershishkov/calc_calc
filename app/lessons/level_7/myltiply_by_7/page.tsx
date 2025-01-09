import type { Metadata } from 'next';
import MyltiplyBy7 from './MyltiplyBy7';

const exerciseName = 'Уровень 7 Умножение на 7';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function MyltiplyBy7Page() {
  return <MyltiplyBy7 exerciseName={exerciseName} />;
}
