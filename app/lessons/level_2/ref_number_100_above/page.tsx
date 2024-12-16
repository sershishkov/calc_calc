import type { Metadata } from 'next';
import RefNumber100Above from './RefNumber100Above';

export const metadata: Metadata = {
  title: 'Умножение чисел с опорным числом 100 (числа больше 100)',
  description: 'Умножение чисел с опорным числом 100 (числа больше 100)',
};

export default function RefNumber100AbovePage() {
  return <RefNumber100Above />;
}
