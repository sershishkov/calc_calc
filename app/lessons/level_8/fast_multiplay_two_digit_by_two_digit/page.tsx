import type { Metadata } from 'next';
import FastMultTwoByTwo from './FastMultTwoByTwo';

const exerciseName = 'Уровень 8 Умножение двузначных чисел на двузначные';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function FastMultTwoByTwoPage() {
  return <FastMultTwoByTwo exerciseName={exerciseName} />;
}
