'use client';
import React, { useState } from 'react';
import { useTimer } from 'use-timer';
import { v4 as uuidv4 } from 'uuid';

import { GenerateExampleForCheckMultiplication } from '@/utils/generateExample';

import Header from '@/components/lessons/header/Header';
import Settings from '@/components/lessons/settings/Settings';
import ExercieMultWithHintsCheck from '@/components/lessons/exercises/ExercieMultWithHintsCheck';
import ReportResultAndCheck from '@/components/lessons/reports/ReportResultAndCheck';

import { ExampleSimpleAndCheckAnswerObjInterface } from '@/interfaces/refdata';

import Grid from '@mui/material/Grid2';

import Description from './Description';

export default function RefNumber50({
  exerciseName,
}: Readonly<{
  exerciseName: string;
}>) {
  const [min, setMin] = useState('41');
  const [max, setMax] = useState('59');
  const [examplesNumber, setExamplesNumber] = useState('10');
  const [example, setExample] =
    useState<GenerateExampleForCheckMultiplication>();
  const [userAnswer, setUserAnswer] = useState('');
  const [userAnswerCheckNumberLeft, setUserAnswerCheckNumberLeft] =
    useState('');
  const [userAnswerCheckNumberRight, setUserAnswerCheckNumberRight] =
    useState('');
  const [userAnswerCheckResultLeft, setUserAnswerCheckResultLeft] =
    useState('');
  const [userAnswerCheckResultRight, setUserAnswerCheckResultRight] =
    useState('');

  const [displayExample, setDisplayExample] = useState(false);
  const [displaySettings, setDisplaySettings] = useState(true);
  const [displayStatistics, setDisplayStatistics] = useState(false);

  const [numberOf_Task, setNumberOf_Task] = useState(0);
  const [resultsList, setResultsList] = useState<
    ExampleSimpleAndCheckAnswerObjInterface[]
  >([]);
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

    setUserAnswerCheckNumberLeft('');
    setUserAnswerCheckNumberRight('');
    setUserAnswerCheckResultLeft('');
    setUserAnswerCheckResultRight('');
  };

  const nextTask = () => {
    setExample(
      new GenerateExampleForCheckMultiplication(Number(min), Number(max))
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

    setUserAnswerCheckNumberLeft('');
    setUserAnswerCheckNumberRight('');
    setUserAnswerCheckResultLeft('');
    setUserAnswerCheckResultRight('');
  };

  const onAnswer = () => {
    const doneExample = +userAnswer === example!.resultRight;
    const doneCheck =
      +userAnswerCheckNumberLeft === example!.checkNumberLeft &&
      +userAnswerCheckNumberRight === example!.checkNumberRight &&
      +userAnswerCheckResultLeft === example!.checkResultLeft &&
      +userAnswerCheckResultRight === example!.checkResultRight;
    const obj = {
      id: uuidv4(),
      example: `${example!.numberLeft} * ${example!.numberRight}`,

      userAnswer,
      userAnswerCheckNumberLeft,
      userAnswerCheckNumberRight,
      userAnswerCheckResultLeft,
      userAnswerCheckResultRight,

      resultRight: example!.resultRight,
      checkNumberLeft: example!.checkNumberLeft,
      checkNumberRight: example!.checkNumberRight,
      checkResultLeft: example!.checkResultLeft,
      checkResultRight: example!.checkResultRight,

      doneExample,
      doneCheck,
      doneExcercise: doneExample && doneCheck,
    };

    setResultsList((prevState) => [...prevState, obj]);

    setUserAnswer('');
    setUserAnswerCheckNumberLeft('');
    setUserAnswerCheckNumberRight('');
    setUserAnswerCheckResultLeft('');
    setUserAnswerCheckResultRight('');

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
        hrefPrev='/lessons/level_3/ref_number_20'
        hrefNext='/lessons/level_3/ref_number_200'
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
        displayMin={false}
        displayMax={false}
        displayShowHints={true}
        showHints={showHints}
        onChangeShowHints={(e) => setShowHints(e.target.checked)}
      />
      <ExercieMultWithHintsCheck
        displayExample={displayExample}
        onStopExercise={onStopExercise}
        example={example!}
        operator={'*'}
        userAnswer={userAnswer}
        onChangeUserAnswer={(e) => setUserAnswer(e.target.value)}
        onAnswer={onAnswer}
        numberOf_Task={numberOf_Task}
        showHints={showHints}
        showPlusHints={true}
        showMinusHints={true}
        refNumber={50}
        userAnswerCheckNumberLeft={userAnswerCheckNumberLeft}
        userAnswerCheckNumberRight={userAnswerCheckNumberRight}
        userAnswerCheckResultLeft={userAnswerCheckResultLeft}
        userAnswerCheckResultRight={userAnswerCheckResultRight}
        setAnswerCheckNumberLeft={(e: any) =>
          setUserAnswerCheckNumberLeft(e.target.value)
        }
        setAnswerCheckNumberRight={(e: any) =>
          setUserAnswerCheckNumberRight(e.target.value)
        }
        setAnswerCheckResultLeft={(e: any) =>
          setUserAnswerCheckResultLeft(e.target.value)
        }
        setAnswerCheckResultRight={(e: any) =>
          setUserAnswerCheckResultRight(e.target.value)
        }
      />
      <ReportResultAndCheck
        onContinue={onContinue}
        resultsList={resultsList}
        displayStatistics={displayStatistics}
        exerciseName={exerciseName}
        time={time}
      />
    </Grid>
  );
}
