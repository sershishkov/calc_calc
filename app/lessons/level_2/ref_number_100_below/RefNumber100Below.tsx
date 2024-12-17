'use client';
import React, { useState } from 'react';
import { useTimer } from 'use-timer';
import { v4 as uuidv4 } from 'uuid';

import { GenerateExampleAddMultSub } from '@/utils/generateExample';

import Header from '@/components/lessons/header/Header';
import Settings from '@/components/lessons/settings/Settings';
import ExercieMultWithHints from '@/components/lessons/exercises/ExercieMultWithHints';
import ReportOnlyResult from '@/components/lessons/reports/ReportOnlyResult';

import { ExampleSimpleInterface } from '@/interfaces/interfaces';

import Grid from '@mui/material/Grid2';

import Description from './Description';

export default function RefNumber100Below() {
  const exerciseName =
    'Уровень 2 Умножение чисел с опорным числом 100 (числа меньше 100)';
  const [min, setMin] = useState('85');
  const [max, setMax] = useState('99');
  const [examplesNumber, setExamplesNumber] = useState('10');
  const [example, setExample] = useState<GenerateExampleAddMultSub>();
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
    setExample(new GenerateExampleAddMultSub(Number(min), Number(max)));
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
      rightAnswer: example!.resultMult,
      done: +userAnswer === +example!.resultMult,
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
        hrefPrev='/lessons/level_2/ref_number_100_above'
        hrefNext='/lessons/level_2/ref_number_100_mix'
        time={time}
        title={exerciseName}
      />
      <Description />

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
        displayShowHints={true}
        showHints={showHints}
        onChangeShowHints={(e) => setShowHints(e.target.checked)}
      />
      <ExercieMultWithHints
        onStopExercise={onStopExercise}
        onChangeUserAnswer={(e) => setUserAnswer(e.target.value)}
        onAnswer={onAnswer}
        example={example!}
        operator={'*'}
        userAnswer={userAnswer}
        numberOf_Task={numberOf_Task}
        displayExample={displayExample}
        showHints={showHints}
        showPlusHints={false}
        showMinusHints={true}
        refNumber={100}
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
