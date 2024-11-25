import type { Metadata } from 'next';
import SimpleAddition from './SimpleAddition';

export const metadata: Metadata = {
  title: 'Простое сложение',
  description: 'Простое сложение чисел',
};

export default function SimpleAdditionPage() {
  return <SimpleAddition />;
}
