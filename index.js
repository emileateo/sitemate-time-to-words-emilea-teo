// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const intToString = {
    0: 'midnight',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'quarter',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
    30: 'half'
  }

  const hour = parseInt(time.split(":")[0])
  const minute = parseInt(time.split(":")[1])

  const hourWord = intToString[hour]
  const minuteWord = intToString[minute]

  if (time === '0:00') {
    return 'midnight';
  } else if (minute === 0) {
    return hourWord + " o'clock";
  } else if (minute <= 30) {
    return minuteWord + " past " + hourWord;
  } else if (minute > 30) {
    return intToString[60 - minute] + " to " + intToString[hour + 1];
  }
}

module.exports = { convertTimeToWords };