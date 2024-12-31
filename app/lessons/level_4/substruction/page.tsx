import type { Metadata } from 'next';
import Substruction from './Substruction';

const exerciseName = 'Уровень 4 Вычитание';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};
export default function SubstructionPage() {
  return <Substruction exerciseName={exerciseName} />;
}
