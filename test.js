const { fromEuroToDollar } = require('./app.js');

test('1 Euro debe ser igual a 1.2 dollars', () => {
    let result = fromEuroToDollar(1);
    expect(result).toBe(1.2);
});

const { fromDollarToYen } = require('./app.js');

test('1.2 Dollar debe ser igual a 127.9 japan yen', () => {
    let result = fromDollarToYen(1.2);
    expect(result).toBe(153.48);
});



const { fromYanToPound } = require('./app.js');

test('153.48 Yan debe ser igual a 0.8 pounds', () => {
    let result = fromYanToPound(153.48);
    expect(result).toBe(123);
});