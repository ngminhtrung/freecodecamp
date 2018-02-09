function translatePigLatin(str) {
    
        var consonantStr = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z", "w", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "X", "Z", "W"];
        var suffixedStr = [];
        var i = 0;
        var char = str.charAt(i);
    
        while (consonantStr.indexOf(char) !== -1) {
            suffixedStr.push(char);
            i++;
            char = str.charAt(i);
        };

        suffixedStr = suffixedStr.join("");
    
        if (suffixedStr.length === 0) {
            str = str.concat("way");
         } else if (suffixedStr.length >= 1) {
            str = str.concat(suffixedStr.concat("ay"));
            str = str.slice(suffixedStr.length);
        
         }
    
         return str;
    }

module.exports = translatePigLatin;
