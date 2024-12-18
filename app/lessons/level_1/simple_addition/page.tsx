import type { Metadata } from 'next';
import SimpleAddition from './SimpleAddition';

const exerciseName = 'Уровень 1 Простое сложение';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function SimpleAdditionPage() {
  return <SimpleAddition exerciseName={exerciseName} />;
}
