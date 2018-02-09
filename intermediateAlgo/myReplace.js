function myReplace(str, before, after) {

    after = checkUpcase(before, after);
    str = str.replace(before, after);
    
    return str;
  }

function checkUpcase(beforeStr, afterStr) {
    var firstCharCode = beforeStr.charCodeAt(0);
    if (firstCharCode <=90) {
      afterStr = afterStr.split("");
      afterStr[0] = afterStr[0].toLocaleUpperCase();
      afterStr = afterStr.join("");
    }
    return afterStr;
}

module.exports = myReplace;