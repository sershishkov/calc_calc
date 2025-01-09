import type { Metadata } from 'next';
import DivisionBySingleNumber from './DivisionBySingleNumber';

const exerciseName = 'Уровень 6 Деление в столбик на однозначное число';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function DivisionBySingleNumberPage() {
  return <DivisionBySingleNumber exerciseName={exerciseName} />;
}
