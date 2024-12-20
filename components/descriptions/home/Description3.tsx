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
      <DescAccordion title='Математический склад ума'>
        <DescrBody>
          • Правда ли, что не все люди рождаются с математическим складом ума,
          что некоторые имеют исходное преимущество перед другими в плане
          лучшего освоения математики? И наоборот, верно ли, что некоторые люди
          в меньшей степени наделены способностью решать математические задачи?
        </DescrBody>
        <DescrBody>
          • Различие между теми людьми, кто добивается в математике многого, и
          теми, кто достигает малого, состоит не в мозге, с которым они
          рождаются, а в том, как они его используют. Те, кто добивается
          большего, используют более эффективные подходы, чем остальные.
        </DescrBody>
        <DescrBody>
          • Данный курс научит вас более эффективным подходам. Методы, о которых
          идет речь, гораздо проще, чем те, которым вас учили ранее, так что в
          итоге вы будете решать задачи на вычисление гораздо быстрее, допуская
          при этом меньше ошибок
        </DescrBody>
        <DescrBody>
          • Представьте себе двух учеников и преподавателя, который только что
          задал им задачу. Ученик А говорит: «Трудная задача. Учитель не научил
          нас решать задачи такого рода. Как же мне ее решать? Получается, что
          учитель ставит перед нами задачи непомерной сложности»{' '}
        </DescrBody>
        <DescrBody>
          • Ученик Б говорит: «Трудная задача. Учитель не научил нас решать
          задачи такого типа. Как же мне ее решить? Учитель знает уровень наших
          знаний и то, какие задачи мы умеем решать, поэтому того, чему он нас
          научил до сих пор, должно быть достаточно, чтобы мы справились с
          решением самостоятельно. С чего же мне начать? »
        </DescrBody>
        <DescrBody>
          • Кто из учеников, по-вашему, скорее решит задачу? Очевидно, что
          ученик Б.
        </DescrBody>
        <DescrBody>
          • Что случится в следующий раз, когда им будет предложена аналогичная
          задача? Ученик А скажет: «Я не могу ее решить. Это такая же задача,
          что и в прошлый раз. Она слишком трудная. Такие задачи я плохо решаю.
          Почему бы вам не задать нам что-нибудь полегче?»
        </DescrBody>
        <DescrBody>
          • А ученик Б скажет: «Это напоминает мне прошлую задачу. Думаю, я
          смогу ее решить. Я уже более или менее научился решать такие задачи.
          Они не очень легкие, но решать их можно. Итак, как же мне к ней
          подступиться? »
        </DescrBody>
        <DescrBody>
          • У обоих учеников выработался шаблон поведения: у одного —
          пораженческий, у другого — ориентированный на победу. Связано ли это
          каким-то образом с их интеллектуальным потенциалом? Возможно, но
          необязательно. Они вполне могут быть равны интеллектом. Речь в большей
          степени идет об отношении учеников к задаче, которое может
          определяться тем, чему их научили в прошлом, а также зависеть от опыта
          — положительного и отрицательного . Недостаточно просто предложить
          людям поменять свое отношение. Это лишь вызовет у них раздражение. Я
          предпочитаю говорить им, что они в состоянии добиться более высокого
          результата, и затем показываю, как это сделать. Пусть положительный
          опыт меняет их отношение, а не увещевания. От положительного опыта
          лица у людей светлеют и они восклицают:{' '}
          <strong>«Ура! Я могу!»</strong>
        </DescrBody>
        <DescrBody>
          • Мое первое правило математики выглядит так: Чем проще метод,
          используемый вами для решения задачи, тем быстрее вы ее решите и тем
          меньше вероятность того, что вы допустите ошибку
        </DescrBody>
        <DescrBody>
          • Чем сложнее метод, который вы используете, тем больше времени уйдет
          на решение задачи и тем выше ваши шансы допустить ошибку. Люди,
          использующие более совершенные методы, быстрее получают ответ и
          допускают меньше ошибок, тогда как те, кто применяет менее эффективные
          методы, медленнее получают ответ и допускают больше ошибок. Связь с
          интеллектом здесь не такая большая, тут вовсе не требуется особого,
          математического, склада ума
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
