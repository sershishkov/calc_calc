import type { Metadata } from 'next';
import SimpleSubstruction from './SimpleSubstruction';

const exerciseName = 'Уровень 1 Простое вычитание чисел';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function SimpleAdditionPage() {
  return <SimpleSubstruction exerciseName={exerciseName} />;
}
