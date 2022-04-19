// Write function below
const subLength = (str, char) => {
    let strChars = str.toLowerCase().split(""),
        found = [],
        length = 0;
    
    strChars.forEach((val, index) => {
        if (val === char) {
            found.push(index);
        }
       
    });

    if (found.length != 2) {
        return length;
    }

   return str.slice(found[0], found[1]).length + 1;
}

console.log(subLength('Saturday', 'a')); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0

console.log(subLength());
