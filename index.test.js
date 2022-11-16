const { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles time on the hour', () => {
    const timeInWords = convertTimeToWords('10:00');
    expect(timeInWords).toBe("ten o'clock");
  });

  it('Handles random minute', () => {
    const timeInWords = convertTimeToWords('3:12');
    expect(timeInWords).toBe('twelve past three');
  });

  it('Handles 15 – 3:15', () => {
    const timeInWords = convertTimeToWords('3:15');
    expect(timeInWords).toBe('quarter past three');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });
});
