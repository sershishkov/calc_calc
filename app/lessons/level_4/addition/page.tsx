import type { Metadata } from 'next';
import Addition from './Addition';

const exerciseName = 'Уровень 4 Сложение';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};
export default function AdditionPage() {
  return <Addition exerciseName={exerciseName} />;
}
