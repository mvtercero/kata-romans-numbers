var RomanNumerals = function () {};

var numerals = [
    {value: 4, numeral: "IV"},
    {value: 1, numeral: "I"}
];

RomanNumerals.prototype.fromNumber = function(number) {
    result = "";
    numerals.forEach(function (item) {
        if (number >= item.value) {
            result += item.numeral;
            number -= item.value;
        }
    });

    return result;
};

module.exports = new RomanNumerals();