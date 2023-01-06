module.exports = function toReadable (number) {
  const ONE_NUM = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }

  const TEENS_NUM = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  }

  const TWO_NUM = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  }

  const firstNum = number.toString()[0];
  const secondNum = number.toString()[1];
  const teensNum = number.toString().slice(1);
  const thirdNum = number.toString()[2];
  let result = '';

  if (number > 0 && number < 10) {
    return ONE_NUM[number]
  } else if (number >= 10 && number < 20) {
    return TEENS_NUM[number]
  } else if (number >= 20 && number < 100) {
    result += `${TWO_NUM[firstNum]}`;

    if (+secondNum !== 0) {
      result += ` ${ONE_NUM[secondNum]}`
    }

    return result;
  } else if (number >= 100 && number < 1000) {
    result += `${ONE_NUM[firstNum]} hundred`;

    for (let key in TEENS_NUM) {
      if (+teensNum === +key) {
        result += ` ${TEENS_NUM[key]}`
      }
    }
    if (teensNum < 10 || teensNum > 19) {
      if (+secondNum !== 0) {
        result += ` ${TWO_NUM[secondNum]}`
      }
      if (+thirdNum !== 0) {
        result += ` ${ONE_NUM[thirdNum]}`
      }
    }

    return result;
  } else {
    return 'zero'
  }
}
