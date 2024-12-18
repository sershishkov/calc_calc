import type { Metadata } from 'next';
import RefNumber100Above from './RefNumber100Above';

const exerciseName =
  'Уровень 2 Умножение чисел с опорным числом 100 (числа больше 100)';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function RefNumber100AbovePage() {
  return <RefNumber100Above exerciseName={exerciseName} />;
}
