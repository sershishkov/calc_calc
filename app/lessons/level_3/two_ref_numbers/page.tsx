import type { Metadata } from 'next';
import TwoRefNumbers from './TwoRefNumbers';

const exerciseName = 'Уровень 3 Умножение с помощью двух опорных чисел';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};
export default function TwoRefNumbersPage() {
  return <TwoRefNumbers exerciseName={exerciseName} />;
}
