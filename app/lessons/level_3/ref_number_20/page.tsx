import type { Metadata } from 'next';
import RefNumber20 from './RefNumber20';

const exerciseName =
  'Уровень 3 Умножение чисел с опорным числом 20 (над и под опорным числом)';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};
export default function RefNumber20Page() {
  return <RefNumber20 exerciseName={exerciseName} />;
}
