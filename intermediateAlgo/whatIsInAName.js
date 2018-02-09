function whatIsInAName(collection, source) {
    var arr = [];
    var sourceKeys = Object.keys(source);
    for (var i = 0; i < collection.length; i++) {
        var isIncluded = false;
        var count = 0;
        for (var j = 0; j < sourceKeys.length; j++) {

            if (collection[i].hasOwnProperty(sourceKeys[j]) === true) {
                var x = sourceKeys[j];
                var y = source[x];
                var z = collection[i][x];
                if (z === y) {
                    isIncluded = true;
                    count++;
                }
            } else {
                isIncluded = false;
            }
        }
        if (count === sourceKeys.length) {
            arr.push(collection[i]);
        }
    }

    return arr;

}

module.exports = whatIsInAName;