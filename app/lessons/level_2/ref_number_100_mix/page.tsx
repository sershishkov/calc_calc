import type { Metadata } from 'next';
import RefNumber100Mix from './RefNumber100Mix';

const exerciseName =
  'Уровень 2 Умножение чисел с опорным числом 100 (над и под опорным числом)';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};
export default function RefNumber100MixPage() {
  return <RefNumber100Mix exerciseName={exerciseName} />;
}
