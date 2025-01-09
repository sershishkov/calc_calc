import type { Metadata } from 'next';
import MyltiplyBy12 from './MyltiplyBy12';

const exerciseName = 'Уровень 7 Умножение на 12';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function MyltiplyBy12Page() {
  return <MyltiplyBy12 exerciseName={exerciseName} />;
}
