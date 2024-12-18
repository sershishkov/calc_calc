import type { Metadata } from 'next';
import CheckingAnswers from './CheckingAnswers';

const exerciseName = 'Уровень 2 Проверка ответов';

export const metadata: Metadata = {
  title: exerciseName,
  description: exerciseName,
};

export default function CheckingAnswersPage() {
  return <CheckingAnswers exerciseName={exerciseName} />;
}
