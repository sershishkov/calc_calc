import type { Metadata } from 'next';
import SimpleMultiplication from './SimpleMultiplication';

const exerciseName = 'Уровень 1 Простое умножение чисел';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function SimpleAdditionPage() {
  return <SimpleMultiplication exerciseName={exerciseName} />;
}
