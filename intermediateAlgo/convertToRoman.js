
function convertToRoman(num) {
    var romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];//an array of roman numerals in order from largest to smallest
    var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanized = "";

    for (var i=0; i< decimals.length; i++) {
        while (decimals[i] <= num) {
            romanized += romanNumerals[i];
            num -= decimals[i];
        }
    }
    
    return romanized;
}

module.exports = convertToRoman;