import convert from '../basic';

test('should convert 1', () => {
  const result = convert('8 (927) 000-00-00');

  expect(result).toBe('+79270000000');
});

test('should convert 2', () => {
  const result = convert('+7 960 000 00 00');

  expect(result).toBe('+79600000000');
});

test('should convert 3', () => {
  const result = convert('+86 000 000 0000');

  expect(result).toBe('+860000000000');
});
