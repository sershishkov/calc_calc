'use client';
import React, { useState } from 'react';
import { useTimer } from 'use-timer';
import { v4 as uuidv4 } from 'uuid';

import { GenerateExampleMultBy } from '@/utils/generateExample';

import Header from '@/components/lessons/header/Header';
import Settings from '@/components/lessons/settings/Settings';
import ExerciseMultBy from '@/components/lessons/exercises/ExerciseMultBy';
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

export default function MyltiplyBy6({
  exerciseName,
}: Readonly<{
  exerciseName: string;
}>) {
  const numberRight = 6;
  const [min, setMin] = useState('10000');
  const [max, setMax] = useState('99999');
  const [examplesNumber, setExamplesNumber] = useState('10');
  const [example, setExample] = useState<GenerateExampleMultBy>();

  const [userAnswers, setUserAnswers] = useState(initialStateUserAnswers);

  const [displayExample, setDisplayExample] = useState(false);
  const [displaySettings, setDisplaySettings] = useState(true);
  const [displayStatistics, setDisplayStatistics] = useState(false);

  const [numberOf_Task, setNumberOf_Task] = useState(0);
  const [resultsList, setResultsList] = useState<ExampleSimpleInterface[]>([]);

  const { time, start, pause, reset } = useTimer();

  const {
    userDigit_1,
    userDigit_2,
    userDigit_3,
    userDigit_4,
    userDigit_5,
    userDigit_6,
    userDigit_7,
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
  };

  const nextTask = () => {
    setExample(
      new GenerateExampleMultBy(Number(min), Number(max), numberRight)
    );

    setNumberOf_Task((prevState) => prevState + 1);

    const userAnswerInput = document.getElementById('userDigit_7');
    userAnswerInput!.focus();
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
      example: `${example!.numberLeft} * ${example!.numberRight}`,
      userAnswer,
      rightAnswer: example!.resultMult,
      done: +userAnswer === example!.resultMult,
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
        hrefPrev='/lessons/level_7/myltiply_by_12'
        hrefNext='/lessons/level_7/myltiply_by_7'
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

      <ExerciseMultBy
        displayExample={displayExample}
        onStopExercise={onStopExercise}
        example={example!}
        onAnswer={onAnswer}
        onChangeUserAnswers={onChangeUserAnswers}
        numberOf_Task={numberOf_Task}
        userDigit_1={userDigit_1}
        userDigit_2={userDigit_2}
        userDigit_3={userDigit_3}
        userDigit_4={userDigit_4}
        userDigit_5={userDigit_5}
        userDigit_6={userDigit_6}
        userDigit_7={userDigit_7}
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
