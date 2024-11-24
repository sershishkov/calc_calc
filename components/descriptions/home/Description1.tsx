import Grid from '@mui/material/Grid2';

import DescrBody from '@/components/ui/descriptions/DescrBody';
import DescAccordion from '@/components/ui/descriptions/DescAccordion';

function Description() {
  return (
    <Grid
      sx={{
        width: '100%',
      }}
    >
      <DescAccordion title='Введение'>
        <DescrBody>
          • Вообразите, что вы способны умножать большие числа в уме — при этом
          быстрее, чем успели бы набрать их на калькуляторе. Вообразите, что вы
          молниеносно можете проверить — опять-таки в уме — полученный
          результат. Как бы отреагировали ваши коллеги, если бы вы извлекали
          квадратные и даже кубические корни в уме? Не приобретете ли вы
          благодаря этому репутацию очень умного человека? Разве не начнут ваши
          друзья и коллеги относиться к вам по-другому, с большим уважением? А
          как насчет преподавателей, лекторов, клиентов, вашего руководителя?
        </DescrBody>
        <DescrBody>
          • Люди приравнивают математические способности к интеллекту. Если вы в
          состоянии выполнять операции умножения, деления, возведения в квадрат
          и извлечения квадратного корня в уме быстрее, чем ваши друзья успеют
          достать из кармана калькулятор, вас сочтут человеком высочайшего
          интеллекта
        </DescrBody>

        <DescrBody>
          • К людям, овладевшим подобной техникой, начинают по-иному относиться
          в семье, школе и на рабочем месте. И поскольку к ним относятся как к
          людям большого ума, они и сами начинают поступать умнее.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;