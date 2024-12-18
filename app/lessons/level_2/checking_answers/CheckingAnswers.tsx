'use client';
import React, { useState } from 'react';
import { useTimer } from 'use-timer';
import { v4 as uuidv4 } from 'uuid';

import { GenerateExampleForCheckMultiplication } from '@/utils/generateExample';

import Header from '@/components/lessons/header/Header';
import Settings from '@/components/lessons/settings/Settings';
import ExerciseCheck from '@/components/lessons/exercises/ExerciseCheck';
import ReportOnlyCheck from '@/components/lessons/reports/ReportOnlyCheck';

import { ExampleCheckAnswerObjInterface } from '@/interfaces/refdata';

import Grid from '@mui/material/Grid2';

import Description from './Description';

export default function CheckingAnswers({
  exerciseName,
}: Readonly<{
  exerciseName: string;
}>) {
  const [min, setMin] = useState('101');
  const [max, setMax] = useState('999');
  const [examplesNumber, setExamplesNumber] = useState('10');
  const [example, setExample] =
    useState<GenerateExampleForCheckMultiplication>();
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
    ExampleCheckAnswerObjInterface[]
  >([]);

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
    const userAnswer_CheckNumberLeftInput = document.getElementById(
      'userAnswerCheckNumberLeft'
    );
    userAnswer_CheckNumberLeftInput!.focus();
  };
  const onContinue = () => {
    nextTask();

    reset();
    setDisplayExample(false);
    setDisplayStatistics(false);
    setNumberOf_Task(0);
    setDisplaySettings(true);
    setResultsList([]);

    setUserAnswerCheckNumberLeft('');
    setUserAnswerCheckNumberRight('');
    setUserAnswerCheckResultLeft('');
    setUserAnswerCheckResultRight('');
  };

  const onAnswer = () => {
    const obj = {
      id: uuidv4(),
      example: `${example!.numberLeft} * ${example!.numberRight} = ${
        example!.resultRight
      } `,

      userAnswerCheckNumberLeft,
      userAnswerCheckNumberRight,
      userAnswerCheckResultLeft,
      userAnswerCheckResultRight,

      checkNumberLeft: example!.checkNumberLeft,
      checkNumberRight: example!.checkNumberRight,
      checkResultLeft: example!.checkResultLeft,
      checkResultRight: example!.checkResultRight,

      doneCheck:
        +userAnswerCheckNumberLeft === example!.checkNumberLeft &&
        +userAnswerCheckNumberRight === example!.checkNumberRight &&
        +userAnswerCheckResultLeft === example!.checkResultLeft &&
        +userAnswerCheckResultRight === example!.checkResultRight,
    };

    setResultsList((prevState) => [...prevState, obj]);

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
        hrefPrev='/lessons/level_2/ref_number_100_mix'
        hrefNext='/lessons/level_2/ref_number_20'
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
        displayShowHints={false}
        showHints={false}
        onChangeShowHints={() => {}}
      />
      <ExerciseCheck
        displayExample={displayExample}
        onStopExercise={onStopExercise}
        example={example!}
        operator={'*'}
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
        onAnswer={onAnswer}
        numberOf_Task={numberOf_Task}
      />
      <ReportOnlyCheck
        onContinue={onContinue}
        resultsList={resultsList}
        displayStatistics={displayStatistics}
        exerciseName={exerciseName}
        time={time}
      />
    </Grid>
  );
}
