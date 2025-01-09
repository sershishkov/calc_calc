import type { Metadata } from 'next';
import DivisionByMultipliers from './DivisionByMultipliers';

const exerciseName = 'Уровень 6 Деление в столбик по множителям';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function DivisionByMultipliersPage() {
  return <DivisionByMultipliers exerciseName={exerciseName} />;
}
