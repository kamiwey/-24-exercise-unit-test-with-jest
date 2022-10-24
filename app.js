let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euro) => {
    let dollars = euro * oneEuroIs.USD;
    return dollars;
}

const fromDollarToYen = (dollars) => {
    let yen = dollars * oneEuroIs.JPY;
    return yen;
}

const  fromYanToPound = (yen) => {
    let pound = yen * oneEuroIs.GBP;
    return Math.round(pound);
}

module.exports = { fromDollarToYen,  fromEuroToDollar, fromYanToPound};