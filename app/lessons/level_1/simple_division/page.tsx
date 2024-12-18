import type { Metadata } from 'next';
import SimpleDivision from './SimpleDivision';

const exerciseName = 'Уровень 1 Простое деление чисел';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function SimpleDivisionPage() {
  return <SimpleDivision exerciseName={exerciseName} />;
}
