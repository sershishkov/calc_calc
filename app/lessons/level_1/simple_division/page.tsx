import type { Metadata } from 'next';
import SimpleDivision from './SimpleDivision';

export const metadata: Metadata = {
  title: 'Простое деление',
  description: 'Простое деление чисел',
};

export default function SimpleDivisionPage() {
  return <SimpleDivision />;
}
