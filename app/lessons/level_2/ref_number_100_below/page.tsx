import type { Metadata } from 'next';
import RefNumber100Below from './RefNumber100Below';

export const metadata: Metadata = {
  title: 'Умножение чисел с опорным числом 100 (числа меньше 100)',
  description: 'Умножение чисел с опорным числом 100 (числа меньше 100)',
};

export default function RefNumber100BelowPage() {
  return <RefNumber100Below />;
}
