import type { Metadata } from 'next';
import RefNumber50 from './RefNumber50';

const exerciseName =
  'Уровень 3 Умножение чисел с опорным числом 50 (над и под опорным числом)';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};
export default function RefNumber50Page() {
  return <RefNumber50 exerciseName={exerciseName} />;
}
