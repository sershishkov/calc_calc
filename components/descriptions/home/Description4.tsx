import Grid from '@mui/material/Grid2';

import DescrBody from '@/components/ui/description/DescrBody';
import DescAccordion from '@/components/ui/description/DescAccordion';

function Description() {
  return (
    <Grid
      sx={{
        width: '100%',
      }}
    >
      <DescAccordion title='Давай попробуем'>
        <DescrBody>
          • Для начала нажмите на кнопку меню в верхнем левом углу.
        </DescrBody>
        <DescrBody>• Здесь вы увидите полное меню.</DescrBody>
        <DescrBody>
          • Если вы хотите что бы ваши результаты сохранялись, необходимо будет
          зарегестрироваться.
        </DescrBody>
        <DescrBody>• Упражняться можно и без регистрации.</DescrBody>
        <DescrBody>
          • Уровень 1 - это разминочный уровень, если вы уверены в своих силах
          (как минимум вы хорошо помните таблицу умножения и можете делать
          простые математические операции) то смело переходите на Уровень 2.
        </DescrBody>
        <DescrBody>
          • Начиная с Уровня 2 Вам будут предложены основные правила для
          прочтения, после этого вы можете приступить к упражнениям.
        </DescrBody>

        <DescrBody>
          • Если упражнение подразумевает &quot;подсказки&quot; то настоятельно
          рекомендуем сначала ими воспользоваться, затем их можно будет
          отключить.
        </DescrBody>
        <DescrBody>
          • Самое важное - не утомляйте себя, достаточно заниматься 15 мин в
          день и спустя некоторое время вы почувствуете что ваши возможности
          быстро растут
        </DescrBody>
        <DescrBody>• Поверьте в себя и начните действовать!!!</DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
