function diffArray(arr1, arr2) {
    var newArray = arr1.concat(arr2);
    var overlapIndex = {
        arr1: [],
        arr2: []
    }
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) != -1) {
            overlapIndex.arr1.push(i);
        }
    }

    for (var j=0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) != -1) {
            overlapIndex.arr2.push(j);
        }
    }

    arr1 = arr1.filter(function(element,id){
        if (overlapIndex.arr1.indexOf(id) === -1) { return element;}
    });

    arr2 = arr2.filter(function(element,id){
        if (overlapIndex.arr2.indexOf(id) === -1) { return element;}
    });

    var newArray = [];
    newArray = arr1.concat(arr2);

    return newArray;
}

module.exports = diffArray;