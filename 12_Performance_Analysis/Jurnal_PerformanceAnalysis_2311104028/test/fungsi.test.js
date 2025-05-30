const { CariNilaiPangkat } = require('../fungsi');

test('b = 0', () => {
  expect(CariNilaiPangkat(5, 0)).toBe(1);
});

test('b negatif', () => {
    expect(CariNilaiPangkat(5, -2)).toBe(-1);
});

test('b > 10', () => {
    expect(CariNilaiPangkat(5, 11)).toBe(-2);
});

test('a > 100', () => {
    expect(CariNilaiPangkat(101, 2)).toBe(-2);
});

test('hasil > MAX_SAFE_INTEGER', () => {
    expect(CariNilaiPangkat(99999999, 999)).toBe(-3);
});

test('normal case: 2^3', () => {
    expect(CariNilaiPangkat(2, 3)).toBe(8);
});
