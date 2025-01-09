import type { Metadata } from 'next';
import MyltiplyBy8 from './MyltiplyBy8';

const exerciseName = 'Уровень 7 Умножение на 8';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function MyltiplyBy8Page() {
  return <MyltiplyBy8 exerciseName={exerciseName} />;
}
