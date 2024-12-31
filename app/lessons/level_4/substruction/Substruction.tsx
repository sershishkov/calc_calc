'use client';
import React, { useState, useEffect } from 'react';
import { useTimer } from 'use-timer';
import { v4 as uuidv4 } from 'uuid';

import { GenerateExampleAddMultSub } from '@/utils/generateExample';

import Header from '@/components/lessons/header/Header';
import Settings from '@/components/lessons/settings/Settings';
import ExerciseColumnAdding from '@/components/lessons/exercises/ExerciseColumnAdding';
import ReportOnlyResult from '@/components/lessons/reports/ReportOnlyResult';

import { ExampleSimpleInterface } from '@/interfaces/interfaces';

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
};

export default function Substruction({
  exerciseName,
}: Readonly<{
  exerciseName: string;
}>) {
  const [min, setMin] = useState('100000');
  const [max, setMax] = useState('999999');

  const [examplesNumber, setExamplesNumber] = useState('10');
  const [example, setExample] = useState<GenerateExampleAddMultSub>();
  const [userAnswers, setUserAnswers] = useState(initialStateUserAnswers);
  const {
    userDigit_1,
    userDigit_2,
    userDigit_3,
    userDigit_4,
    userDigit_5,
    userDigit_6,
    userDigit_7,
  } = userAnswers;

  const [displayExample, setDisplayExample] = useState(false);
  const [displaySettings, setDisplaySettings] = useState(true);
  const [displayStatistics, setDisplayStatistics] = useState(false);

  const [numberOf_Task, setNumberOf_Task] = useState(0);
  const [resultsList, setResultsList] = useState<ExampleSimpleInterface[]>([]);

  const { time, start, pause, reset } = useTimer();
  useEffect(() => {
    if (displayExample) {
      const userDigit_7 = document.getElementById('userDigit_7');
      userDigit_7!.focus();
    }
  }, [displayExample]);

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
  };

  const nextTask = () => {
    setExample(new GenerateExampleAddMultSub(Number(min), Number(max)));
    setNumberOf_Task((prevState) => prevState + 1);
    const userDigit_7_Input = document.getElementById('userDigit_7');
    userDigit_7_Input!.focus();
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
  };

  const onAnswer = () => {
    const userAnswer = `${userDigit_1}${userDigit_2}${userDigit_3}${userDigit_4}${userDigit_5}${userDigit_6}${userDigit_7}`;

    const obj = {
      id: uuidv4(),
      example: `${example!.numberLeft} - ${example!.numberRight}`,
      userAnswer,
      rightAnswer: example!.resultSub,
      done: +userAnswer === +example!.resultSub,
    };

    setResultsList((prevState) => [...prevState, obj]);

    setUserAnswers(initialStateUserAnswers);

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
        hrefPrev='/lessons/level_4/addition'
        hrefNext='/lessons/level_5/squaring_ending_5'
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
        displayMin={true}
        displayMax={true}
        displayShowHints={false}
        showHints={false}
        onChangeShowHints={() => {}}
      />
      <ExerciseColumnAdding
        displayExample={displayExample}
        example={example!}
        onChangeUserAnswers={onChangeUserAnswers}
        userDigit_1={userDigit_1}
        userDigit_2={userDigit_2}
        userDigit_3={userDigit_3}
        userDigit_4={userDigit_4}
        userDigit_5={userDigit_5}
        userDigit_6={userDigit_6}
        userDigit_7={userDigit_7}
        onAnswer={onAnswer}
        numberOf_Task={numberOf_Task}
        onStopExercise={onStopExercise}
      />
      <ReportOnlyResult
        onContinue={onContinue}
        resultsList={resultsList}
        display={displayStatistics}
        exerciseName={exerciseName}
        time={time}
      />
    </Grid>
  );
}
