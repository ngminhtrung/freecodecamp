function sumAll(arr) {

    var sum = arr[0] + arr[1];

    if (arr[0] <= arr[1]) {
        for (var i = (arr[0] + 1); i <= (arr[1] - 1); i++) {
            sum = sum + i;
        }
    } else {
        for (var i = (arr[1] + 1); i <= (arr[0] - 1); i++) {
            sum = sum + i;
        }
    }
    return sum;
}

module.exports = sumAll;