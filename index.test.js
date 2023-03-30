const {calcBMI, getStatus} = require('./index');

test('w = 100, h = 1 ', () => {
    expect(calcBMI(100,1)).toBe(100);
});

test('status = obese', () => {
    expect(getStatus(100)).toBe('obese');
});