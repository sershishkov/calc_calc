import type { Metadata } from 'next';
import SimpleSubstruction from './SimpleSubstruction';

export const metadata: Metadata = {
  title: 'Простое вычитание',
  description: 'Простое вычитание чисел',
};

export default function SimpleAdditionPage() {
  return <SimpleSubstruction />;
}
