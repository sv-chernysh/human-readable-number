module.exports = function toReadable (number) {
    if (number < 100) {
        return toReadableLessOneHundred(number);
    } else if (number % 100 === 0) {
        return `${readableNumbersFromZeroToNineteen(String(number).slice(0, 1))} hundred`;
    } else {
        return `${readableNumbersFromZeroToNineteen(String(number).slice(0, 1))} hundred ${toReadableLessOneHundred(+String(number).slice(1))}`
    }
};

function readableNumbersFromZeroToNineteen(number) {
    let firstTwentyNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    return firstTwentyNumbers[number]
}

function redableTensNumbers(number) {
    let tenNumbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    return tenNumbers[(number / 10) - 2];
}

function toReadableLessOneHundred(number) {
    let result = '';
    if (number < 20) {
        result += readableNumbersFromZeroToNineteen(number);
        return result;
    } else if (number % 10 === 0) {
        result += redableTensNumbers(number);
        return result;
    } else {
        return result = `${redableTensNumbers(String(number).slice(0,1) * 10)} ${readableNumbersFromZeroToNineteen(String(number).slice(1))}`
    }
}
