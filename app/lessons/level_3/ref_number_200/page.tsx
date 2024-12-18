import type { Metadata } from 'next';
import RefNumber200 from './RefNumber200';

const exerciseName =
  'Уровень 3 Умножение чисел с опорным числом 200 (над и под опорным числом)';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};
export default function RefNumber200Page() {
  return <RefNumber200 exerciseName={exerciseName} />;
}
