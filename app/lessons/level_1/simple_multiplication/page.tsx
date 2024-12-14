import type { Metadata } from 'next';
import SimpleMultiplication from './SimpleMultiplication';

export const metadata: Metadata = {
  title: 'Простое умножение',
  description: 'Простое умножение чисел',
};

export default function SimpleAdditionPage() {
  return <SimpleMultiplication />;
}
