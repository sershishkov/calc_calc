'use client';
import React, { useState } from 'react';
import { useTimer } from 'use-timer';
import { v4 as uuidv4 } from 'uuid';

import { GenExampleSquaringCloseTo } from '@/utils/generateExample';

import Header from '@/components/lessons/header/Header';
import Settings from '@/components/lessons/settings/Settings';
import ExerciseSquaringSimple from '@/components/lessons/exercises/ExerciseSquaringSimple';
import ReportOnlyResult from '@/components/lessons/reports/ReportOnlyResult';

import { ExampleSimpleInterface } from '@/interfaces/interfaces';

import Grid from '@mui/material/Grid2';
import Description1 from './Description1';

export default function SquaringCloseTo500({
  exerciseName,
}: Readonly<{
  exerciseName: string;
}>) {
  const refNumber = 500;
  const [min, setMin] = useState('490');
  const [max, setMax] = useState('510');
  const [examplesNumber, setExamplesNumber] = useState('10');
  const [example, setExample] = useState<GenExampleSquaringCloseTo>();
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
    setExample(new GenExampleSquaringCloseTo(Number(min), Number(max)));
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
      example: `${example!.number_1}`,
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
        hrefPrev='/lessons/level_5/squaring_close_to_50'
        hrefNext='/lessons/level_5/squaring_ending_1'
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
        displayShowHints={true}
        showHints={showHints}
        onChangeShowHints={(e) => setShowHints(e.target.checked)}
      />

      <ExerciseSquaringSimple
        displayExample={displayExample}
        onStopExercise={onStopExercise}
        example={example!}
        userAnswer={userAnswer}
        onChangeUserAnswer={(e) => setUserAnswer(e.target.value)}
        onAnswer={onAnswer}
        numberOf_Task={numberOf_Task}
        showHints={showHints}
        refNumber={refNumber}
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
