import type { Metadata } from 'next';
import RefNumber500 from './RefNumber500';

const exerciseName =
  'Уровень 3 Умножение чисел с опорным числом 500 (над и под опорным числом)';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};
export default function RefNumber500Page() {
  return <RefNumber500 exerciseName={exerciseName} />;
}
