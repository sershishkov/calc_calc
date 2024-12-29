'use client';
import React, { useState } from 'react';
import { useTimer } from 'use-timer';
import { v4 as uuidv4 } from 'uuid';

import { GenExampleMultWithDifferentRangers } from '@/utils/generateExample';

import Header from '@/components/lessons/header/Header';
import Settings from '@/components/lessons/settings/Settings';
import ExerciseMultWithHintsTwoRef from '@/components/lessons/exercises/ExerciseMultWithHintsTwoRef';
import ReportOnlyResult from '@/components/lessons/reports/ReportOnlyResult';

import { ExampleSimpleInterface } from '@/interfaces/interfaces';

import Grid from '@mui/material/Grid2';

import Description1 from './Description1';
import Description2 from './Description2';
import Description3 from './Description3';

export default function TwoRefNumbers({
  exerciseName,
}: Readonly<{
  exerciseName: string;
}>) {
  const minLeft = 11;
  const maxLeft = 19;
  const minRight = 90;
  const maxRight = 99;
  const referenceNumber1 = 20;
  const referenceNumber2 = 5;

  const [examplesNumber, setExamplesNumber] = useState('10');
  const [example, setExample] = useState<GenExampleMultWithDifferentRangers>();
  const [userAnswer, setUserAnswer] = useState('');

  const [displayExample, setDisplayExample] = useState(false);
  const [displaySettings, setDisplaySettings] = useState(true);
  const [displayStatistics, setDisplayStatistics] = useState(false);

  const [numberOf_Task, setNumberOf_Task] = useState(0);
  const [resultsList, setResultsList] = useState<ExampleSimpleInterface[]>([]);
  const [showHints, setShowHints] = useState(true);

  const { time, start, pause, reset } = useTimer();
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
    setUserAnswer('');
  };

  const nextTask = () => {
    setExample(
      new GenExampleMultWithDifferentRangers(
        minLeft,
        maxLeft,
        minRight,
        maxRight
      )
    );
    setNumberOf_Task((prevState) => prevState + 1);
    const userAnswerInput = document.getElementById('userAnswer');
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
    setUserAnswer('');
  };

  const onAnswer = () => {
    const obj = {
      id: uuidv4(),
      example: `${example!.numberLeft} * ${example!.numberRight}`,
      userAnswer,
      rightAnswer: example!.resultRight,
      done: +userAnswer === +example!.resultRight,
    };

    setResultsList((prevState) => [...prevState, obj]);

    setUserAnswer('');

    if (Number(numberOf_Task) < Number(examplesNumber)) {
      nextTask();
    } else {
      setDisplayExample(false);
      setDisplayStatistics(true);
      pause();
    }
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
        hrefPrev='/lessons/level_3/ref_number_500'
        hrefNext='/lessons/level_4/addition'
        time={time}
        title={exerciseName}
      />
      <Description1 />
      <Description2 />
      <Description3 />
      <Settings
        onChangeExamplesNumber={(e) => setExamplesNumber(e.target.value)}
        onChangeMin={() => {}}
        onChangeMax={() => {}}
        onStart={onStart}
        examplesNumber={examplesNumber}
        min={'0'}
        max={'0'}
        displaySettings={displaySettings}
        displayMin={false}
        displayMax={false}
        displayShowHints={true}
        showHints={showHints}
        onChangeShowHints={(e) => setShowHints(e.target.checked)}
      />
      <ExerciseMultWithHintsTwoRef
        displayExample={displayExample}
        onStopExercise={onStopExercise}
        example={example!}
        operator={'*'}
        userAnswer={userAnswer}
        onChangeUserAnswer={(e) => setUserAnswer(e.target.value)}
        onAnswer={onAnswer}
        numberOf_Task={numberOf_Task}
        showHints={showHints}
        showPlusHints={false}
        showMinusHints={true}
        referenceNumber1={referenceNumber1}
        referenceNumber2={referenceNumber2}
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
