// save characters in objects
// count the amount of characters
// read the amount of chars 
// assign the amount of chars as the  value of the key
// output the object that contains all the keys


function countLetters(string) {
    var object = {};
    var noSpaces = string.replace(/\s/g, '').toLowerCase();
    console.log(noSpaces);
    for (let i = 0; i < noSpaces.length; i++) {
        var holder = noSpaces[i];
        if (!object[holder]) {
            object[holder] = 1
        } else {
            object[holder] += 1
        }     
    }
    return object
}

console.log(countLetters('lighthouse in the house'));
