import Grid from '@mui/material/Grid2';

import DescAccent from '@/components/ui/description/DescAccent';
import DescrBody from '@/components/ui/description/DescrBody';
import DescAccordion from '@/components/ui/description/DescAccordion';

function Description() {
  return (
    <Grid
      container
      sx={{
        width: '100%',
      }}
    >
      <DescAccordion title='Введение'>
        <DescAccent>ПРЕДИСЛОВИЕ</DescAccent>
        <DescrBody>
          Этот уровень представляет собой изло­жение «системы быстрого счета» —
          совокупности методов быстрых и рациональных вычислений, разработанных
          руководи­телем Цюрихского математического института профессором
          Яко­вом Трахтенбергом.
        </DescrBody>
        <DescrBody>
          Профессор Трахтенберг был человеком замечательным н много­гранно
          одаренным. Родился он в Одессе в 1888 г. По образованию— инженер
          (окончив с отличем Петербургский горный институт, он был главным
          инженером Обуховского судостроительного за­вода). Убежденный,
          пацифист, Трахтенберг отдавал много сил пропаганде своих взглядов и в
          России, и в Германии, где он жил с 1919 г., а затем в Австрии, куда он
          бежал после прихода к власти Гитлера. Интересы его были чрезвычайно
          разнообразны. Так, ему принадлежит оригинальный метод преподавания
          иностранных языков, нашедший признание и широкое распространение в
          Гер­мании.
        </DescrBody>
        <DescrBody>
          После аншлюса (включение Австрии в состав Германии, состоявшееся 12—13
          марта 1938 года.) для Трахтенберга наступил семилетний период
          пребывания в тюрьмах и лагерях. Он был арестован фашистами и заключен
          в концентрационный лагерь. С помощью жены ему уда­лось бежать в
          Югославию. Но гестаповцы вскоре настигли его и там. Находясь
          встрашных, нечеловеческих условиях,Трахтенберг, стремясь сохранить
          здоровый дух и психику, всецело ушел в замк­нутый мир чисел. «Система
          быстрого счета» — плод его размышле­ний за эти страшные годы.
        </DescrBody>
        <DescrBody>
          Когда в 1944 г. стало известно о его предстоящей казни, его верный
          друг — жена сумела еще раз спасти его. Она добилась пере­вода мужа в
          Лейпциг и там снова организовала побег. И хотя вско­ре он был снова
          арестован и отправлен на каменоломню в Триест, самое тяжелое осталось
          позади. Последний побег — и супруги Трахтенберг в Швейцарии.
        </DescrBody>
        <DescrBody>
          В конце 40-х годов Трахтенберг организовал в Цюрихе свой
          Математический институт — единственное в своем роде учебное заведение,
          где дети и взрослые учились и переучивались считать по его методу, и
          по единодушному признанию успехи были пора­зительны.
        </DescrBody>
        <DescrBody>
          Суть приемов, разработанных профессором Трахтенбергом, очень проста.
          Но конечно, как на всякое новое дело, на усвоение их (особенно когда
          речь идет о взрослых людях, которым прихо­дится, переучиваясь,
          отказываться от прежних привычек) требу­ется и время, и известное
          напряжение.
        </DescrBody>
        <DescrBody>
          С помощью своего метода Трахтенбергу удалось научить мно­гих детей/
          ранее считавшихся умственно отсталыми (во всяком случае, по части
          математики), превосходно, быстро и надежно вычислять. Более того,
          обнаружилось, что у этих детей (как, впро­чем, и у всех учеников
          Трахтенберга) увлечение легкостью и прос­тотой его «волшебных» приемов
          неизменно перерастало в интерес к математике и к учению вообще.
        </DescrBody>
        <DescrBody>
          Система Трахтенберга уже оказала свое влияние не только на школьное
          преподавание, но и на практику банковских расчетов, причем не только в
          Швейцарии. Специалисты предсказывают ей большую будущность.
        </DescrBody>
        <DescrBody>
          Мы надеемся раздел поможет ус­воить систему Трахтенберга и оценить ее
          по достоинству.
        </DescrBody>
        <DescAccent>НУЖНА ЛИ ТАБЛИЦА УМНОЖЕНИЯ?</DescAccent>
        <DescrBody>
          В предисловии мы уже обсудили цели метода Трахтенберга. Перейдем
          теперь к рассмотрению самого метода. Первый пункт наших занятий —
          новый способ выполнения основных видов ум­ножения; мы будем умножать,
          не пользуясь заучиваемой наизусть таблицей умножения. Это не только
          возможно, но и легко.
        </DescrBody>
        <DescrBody>
          Впрочем, необходимо пояснить: мы не против таблицы умно­жения.
          Большинство людей знают ее довольно хорошо, даже отлич­но, за
          исключением нескольких неясных случаев. Так, восемью семь или шестью
          девять некоторых слегка смущает, но с меньшими числами, например
          четырежды пять, легко справляется любой. Мы за то, чтобы пользоваться
          этими тяжким трудом приобретен­ными знаниями, и намереваемся даже их
          закрепить. Несколько ниже мы еще вернемся к этому вопросу. А пока
          займемся некото­рыми видами умножения, не пользуясь таблицей
          умножения.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
