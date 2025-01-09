'use client';
import React, { useState } from 'react';
import { useTimer } from 'use-timer';
import { v4 as uuidv4 } from 'uuid';

import { GenExampleDivByMultipliers } from '@/utils/generateExample';

import Header from '@/components/lessons/header/Header';
import Settings from '@/components/lessons/settings/Settings';
import ExerciseDivisionSimple from '@/components/lessons/exercises/ExerciseDivisionSimple';
import ReportDivisionWithRest from '@/components/lessons/reports/ReportDivisionWithRest';

import { ExampleSimplDivWithRestInterface } from '@/interfaces/refdata';

import Grid from '@mui/material/Grid2';
import Description1 from './Description1';

const initialStateUserAnswers = {
  userDigit_1: '',
  userDigit_2: '',
  userDigit_3: '',
  userDigit_4: '',
  userDigit_5: '',
  userDigit_6: '',
  userDigit_7: '',
  userAnswerRem: '',

  tempUserDigit_1: '',
  tempUserDigit_2: '',
  tempUserDigit_3: '',
  tempUserDigit_4: '',
  tempUserDigit_5: '',
  tempUserDigit_6: '',
  tempUserDigit_7: '',
  tempAnswerRem_1: '',
  tempAnswerRem_2: '',

  dividentHintTemp2: '',
  dividentHintTemp3: '',
  dividentHintTemp4: '',
  dividentHintTemp5: '',
  dividentHintTemp6: '',
  dividentHintTemp7: '',

  dividentHint2: '',
  dividentHint3: '',
  dividentHint4: '',
  dividentHint5: '',
  dividentHint6: '',
  dividentHint7: '',
};

export default function DivisionByMultipliers({
  exerciseName,
}: Readonly<{
  exerciseName: string;
}>) {
  const showMiddleRow = true;
  const [min, setMin] = useState('1');
  const [max, setMax] = useState('9999999');
  const [examplesNumber, setExamplesNumber] = useState('10');
  const [example, setExample] = useState<GenExampleDivByMultipliers>();
  const [arrOfDivident, setArrOfDivident] = useState<string[]>([]);
  const [userAnswers, setUserAnswers] = useState(initialStateUserAnswers);

  const [displayExample, setDisplayExample] = useState(false);
  const [displaySettings, setDisplaySettings] = useState(true);
  const [displayStatistics, setDisplayStatistics] = useState(false);

  const [numberOf_Task, setNumberOf_Task] = useState(0);
  const [resultsList, setResultsList] = useState<
    ExampleSimplDivWithRestInterface[]
  >([]);

  const { time, start, pause, reset } = useTimer();

  const {
    userDigit_1,
    userDigit_2,
    userDigit_3,
    userDigit_4,
    userDigit_5,
    userDigit_6,
    userDigit_7,
    userAnswerRem,
    tempUserDigit_1,
    tempUserDigit_2,
    tempUserDigit_3,
    tempUserDigit_4,
    tempUserDigit_5,
    tempUserDigit_6,
    tempUserDigit_7,
    tempAnswerRem_1,
    tempAnswerRem_2,

    dividentHintTemp2,
    dividentHintTemp3,
    dividentHintTemp4,
    dividentHintTemp5,
    dividentHintTemp6,
    dividentHintTemp7,

    dividentHint2,
    dividentHint3,
    dividentHint4,
    dividentHint5,
    dividentHint6,
    dividentHint7,
  } = userAnswers;

  const onStart = () => {
    setDisplayExample(true);
    setDisplaySettings(false);
    nextTask();
    start();
  };
  const onStopExercise = () => {
    setDisplayExample(false);
    setDisplaySettings(true);
    reset();
    setDisplayStatistics(false);
    setNumberOf_Task(0);
    setResultsList([]);
    setUserAnswers(initialStateUserAnswers);
    setArrOfDivident([]);
  };

  const nextTask = () => {
    const newExample = new GenExampleDivByMultipliers(Number(max));
    const newArrOfDivident = newExample.divident.toString().split('');
    setExample(newExample);
    setArrOfDivident(newArrOfDivident);
    setNumberOf_Task((prevState) => prevState + 1);

    if (showMiddleRow) {
      const tempUserDigit_1__input = document.getElementById('tempUserDigit_1');
      tempUserDigit_1__input!.focus();
    } else {
      const userDigit_1_Input = document.getElementById('userDigit_1');

      userDigit_1_Input!.focus();
    }
  };
  const onContinue = () => {
    nextTask();

    reset();
    setDisplayExample(false);
    setDisplayStatistics(false);
    setNumberOf_Task(0);
    setDisplaySettings(true);
    setResultsList([]);
    setUserAnswers(initialStateUserAnswers);
    setArrOfDivident([]);
  };

  const onAnswer = () => {
    const userResult = `${userDigit_1}${userDigit_2}${userDigit_3}${userDigit_4}${userDigit_5}${userDigit_6}${userDigit_7}`;
    const doneResult = +userResult - example!.resultRight === 0;
    const doneReminder = +userAnswerRem - example!.reminderOfDivision === 0;
    const obj = {
      id: uuidv4(),
      example: `${example!.divident}/${example!.divider_Total}`,
      userResult,
      userAnswerRem,
      resultRight: example!.resultRight,
      reminderOfDivision: example!.reminderOfDivision,
      doneExcercise: doneResult && doneReminder,
    };

    setResultsList((prevState) => [...prevState, obj]);

    setUserAnswers(initialStateUserAnswers);
    setArrOfDivident([]);

    if (Number(numberOf_Task) < Number(examplesNumber)) {
      nextTask();
    } else {
      setDisplayExample(false);
      setDisplayStatistics(true);
      pause();
    }
  };

  const onChangeUserAnswers = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswers({
      ...userAnswers,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Grid
      container
      direction='column'
      sx={{
        // border: '1px solid red',
        width: '100%',
      }}
    >
      <Header
        hrefPrev='/lessons/level_6/division_by_single_number'
        hrefNext='/lessons/level_7/myltiply_by_11'
        time={time}
        title={exerciseName}
      />
      <Description1 />

      <Settings
        onChangeExamplesNumber={(e) => setExamplesNumber(e.target.value)}
        onChangeMin={(e) => setMin(e.target.value)}
        onChangeMax={(e) => setMax(e.target.value)}
        onStart={onStart}
        examplesNumber={examplesNumber}
        min={min}
        max={max}
        displaySettings={displaySettings}
        displayMin={false}
        displayMax={false}
        displayShowHints={false}
        showHints={false}
        onChangeShowHints={() => {}}
      />

      <ExerciseDivisionSimple
        displayExample={displayExample}
        onStopExercise={onStopExercise}
        example={example!}
        onAnswer={onAnswer}
        numberOf_Task={numberOf_Task}
        arrOfDivident={arrOfDivident}
        onChangeUserAnswers={onChangeUserAnswers}
        tempUserDigit_1={tempUserDigit_1}
        tempUserDigit_2={tempUserDigit_2}
        tempUserDigit_3={tempUserDigit_3}
        tempUserDigit_4={tempUserDigit_4}
        tempUserDigit_5={tempUserDigit_5}
        tempUserDigit_6={tempUserDigit_6}
        tempUserDigit_7={tempUserDigit_7}
        tempAnswerRem_1={tempAnswerRem_1}
        tempAnswerRem_2={tempAnswerRem_2}
        userAnswerRem={userAnswerRem}
        userDigit_1={userDigit_1}
        userDigit_2={userDigit_2}
        userDigit_3={userDigit_3}
        userDigit_4={userDigit_4}
        userDigit_5={userDigit_5}
        userDigit_6={userDigit_6}
        userDigit_7={userDigit_7}
        dividentHintTemp2={dividentHintTemp2}
        dividentHintTemp3={dividentHintTemp3}
        dividentHintTemp4={dividentHintTemp4}
        dividentHintTemp5={dividentHintTemp5}
        dividentHintTemp6={dividentHintTemp6}
        dividentHintTemp7={dividentHintTemp7}
        dividentHint2={dividentHint2}
        dividentHint3={dividentHint3}
        dividentHint4={dividentHint4}
        dividentHint5={dividentHint5}
        dividentHint6={dividentHint6}
        dividentHint7={dividentHint7}
        showMiddleRow={showMiddleRow}
      />

      <ReportDivisionWithRest
        onContinue={onContinue}
        resultsList={resultsList}
        displayStatistics={displayStatistics}
        exerciseName={exerciseName}
        time={time}
      />
    </Grid>
  );
}
