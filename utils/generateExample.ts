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
