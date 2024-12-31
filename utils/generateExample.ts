import { v4 as uuidv4 } from 'uuid';
import { getRandomIntInclusive, numberToDigit } from './helper';

export class GenerateExampleAddMultSub {
  id: string;
  numberLeft: number;
  numberRight: number;
  resultAdd: number;
  resultMult: number;
  resultSub: number;
  constructor(min: number, max: number) {
    const tempLeft = getRandomIntInclusive(min, max);
    const tempRight = getRandomIntInclusive(min, max);

    if (tempLeft <= tempRight) {
      this.numberLeft = tempRight;
      this.numberRight = tempLeft;
    } else {
      this.numberLeft = tempLeft;
      this.numberRight = tempRight;
    }

    this.id = uuidv4();
    this.resultAdd = this.numberLeft + this.numberRight;
    this.resultMult = this.numberLeft * this.numberRight;
    this.resultSub = this.numberLeft - this.numberRight;
  }
}

interface TempObjSimpleDivisionInterface {
  tempLeft: number;
  tempRight: number;
  tempResult: number;
}

export class GenerateExampleSimpleDivision {
  id: string;
  numberLeft: number;
  numberRight: number;
  resultDivision: number;
  examplesArray: TempObjSimpleDivisionInterface[] = [];
  constructor(max: number) {
    this.id = uuidv4();
    for (let i = 1; i <= Number(max); i++) {
      for (let j = 1; j <= Number(max); j++) {
        if (i * j <= Number(max)) {
          const newObj: TempObjSimpleDivisionInterface = {
            tempLeft: i,
            tempRight: j,
            tempResult: i * j,
          };
          this.examplesArray.push(newObj);
        }
      }
    }

    const exampleIndex = getRandomIntInclusive(0, this.examplesArray.length);
    this.numberLeft = +this.examplesArray[exampleIndex].tempResult;
    this.numberRight = +this.examplesArray[exampleIndex].tempRight;
    this.resultDivision = +this.examplesArray[exampleIndex].tempLeft;
  }
}

export class GenerateExampleForCheckMultiplication {
  id: string;
  numberLeft: number;
  numberRight: number;
  resultRight: number;

  checkNumberLeft: number;
  checkNumberRight: number;

  checkResultLeft: number;
  checkResultRight: number;

  constructor(min: number, max: number) {
    this.id = uuidv4();
    this.numberLeft = getRandomIntInclusive(min, max);
    this.numberRight = getRandomIntInclusive(min, max);
    this.resultRight = this.numberLeft * this.numberRight;

    this.checkNumberLeft = numberToDigit(this.numberLeft);
    this.checkNumberRight = numberToDigit(this.numberRight);
    this.checkResultLeft = numberToDigit(
      this.checkNumberLeft * this.checkNumberRight
    );
    this.checkResultRight = numberToDigit(this.resultRight);
  }
}

export class GenExampleMultWithDifferentRangers {
  id: string;
  numberLeft: number;
  numberRight: number;
  resultRight: number;

  checkNumberLeft: number;
  checkNumberRight: number;

  checkResultLeft: number;
  checkResultRight: number;

  constructor(
    minLeft: number,
    maxLeft: number,
    minRight: number,
    maxRight: number
  ) {
    this.id = uuidv4();
    this.numberLeft = getRandomIntInclusive(minLeft, maxLeft);
    this.numberRight = getRandomIntInclusive(minRight, maxRight);
    this.resultRight = this.numberLeft * this.numberRight;

    this.checkNumberLeft = numberToDigit(this.numberLeft);
    this.checkNumberRight = numberToDigit(this.numberRight);
    this.checkResultLeft = numberToDigit(
      this.checkNumberLeft * this.checkNumberRight
    );
    this.checkResultRight = numberToDigit(this.resultRight);
  }
}

export class GenExampleSquaringEnding5 {
  id: string;
  number_1: number;
  resultRight: number;
  examplesArray: number[] = [];
  constructor(max: number) {
    this.id = uuidv4();

    for (let i = 15; i < Number(max); i += 10) {
      this.examplesArray.push(i);
    }

    const exampleIndex = getRandomIntInclusive(0, this.examplesArray.length);
    this.number_1 = isNaN(this.examplesArray[exampleIndex])
      ? 15
      : this.examplesArray[exampleIndex];

    this.resultRight = Math.pow(this.number_1, 2);
  }
}

export class GenExampleSquaringCloseTo {
  id: string;
  number_1: number;
  resultRight: number;

  constructor(min: number, max: number) {
    this.id = uuidv4();

    this.number_1 = getRandomIntInclusive(min, max);

    this.resultRight = Math.pow(this.number_1, 2);
  }
}
