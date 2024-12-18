import type { Metadata } from 'next';
import RefNumber100Below from './RefNumber100Below';

const exerciseName =
  'Уровень 2 Умножение чисел с опорным числом 100 (числа меньше 100)';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function RefNumber100BelowPage() {
  return <RefNumber100Below exerciseName={exerciseName} />;
}
