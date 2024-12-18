import { getMyStatistic } from '@/lib/actions/statisticActions';
import type { Metadata } from 'next';
import Statistic from './Statistic';

export const metadata: Metadata = {
  title: 'Мои результаты',
  description: 'Статистика упражнений',
};

export default async function StatisticPage() {
  const my_data = await getMyStatistic();

  return <Statistic my_data={my_data} />;
}
