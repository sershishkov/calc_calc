import type { Metadata } from 'next';
import RefNumber10 from './RefNumber10';

export const metadata: Metadata = {
  title: 'Умножение чисел с опорным числом 10',
  description: 'Умножение чисел с опорным числом 10',
};

export default function RefNumber10Page() {
  return <RefNumber10 />;
}
