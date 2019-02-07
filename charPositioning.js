// save characters in objects
// count the amount of characters
// remove spaces from the string 
// convert string to lower case
// read the position of characters and transfer it to an array
// pass the value to the key
// output the object that contains all the keys with the position of that char in the array


function countLetters(string) {
  var object = {};
  var noSpaces = string.replace(/\s/g, '').toLowerCase();
    for (let i = 0; i < noSpaces.length; i++) {
        var holder = noSpaces[i];
        if (!object[holder]) {
            object[holder] = [i];
        } else {
            object[holder].push(i);
        }     
    }
    return object
}

console.log(countLetters('lighthouse in the house'));
