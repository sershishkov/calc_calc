import type { Metadata } from 'next';
import RefNumber10 from './RefNumber10';

const exerciseName = 'Уровень 2 Умножение чисел с опорным числом 10';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};
export default function RefNumber10Page() {
  return <RefNumber10 exerciseName={exerciseName} />;
}
