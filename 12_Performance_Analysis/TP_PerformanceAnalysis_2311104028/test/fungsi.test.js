const { CariTandaBilangan } = require('../fungsi');

test('bilangan negatif', () => {
    expect(CariTandaBilangan(-5)).toBe('Negatif');
});

test('bilangan positif', () => {
    expect(CariTandaBilangan(10)).toBe('Positif');
});

test('bilangan nol', () => {
    expect(CariTandaBilangan(0)).toBe('Nol');
});
