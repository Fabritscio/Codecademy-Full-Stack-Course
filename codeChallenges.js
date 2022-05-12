 /*
 Write function below
 Write a function subLength() that takes 2 parameters, a string and a single character.
 The function should search the string for the two occurrences of the character and 
 return the length between them including the 2 characters. 
 If there are less than 2 or more than 2 occurrences 
 of the character the function should return 0.
*/
const subLength = (str, char) => {
    let charCount = 0;
    let len = -1;

    for (let i = 0; i < str.length; i++) {

      if (str[i] === char) {
        charCount++;
        if (charCount > 2) {
          return 0;
        }

        if (len === -1) {
          len = i;
        } else {
          len = i - len + 1
        }
      }
    }

    if (charCount < 2) {
      return 0;
    }
    return len;
  };
subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0

/*

Write a function groceries() that takes an array of object literals of grocery items.
 The function should return a string with each item separated by a comma except the last
  two items should be separated by the word 'and'. Make sure spaces
 (' ') are inserted where they are appropriate.

 */
// Write function below
// Write function below
const groceries = list => {
    let listString = ''
  
    for (let i=0; i<list.length; i++) {
      listString += list[i].item;
      if (i < list.length - 2) {
        listString += ', ';
      } else if (i == list.length - 2){
        listString += ' and ';
      }
    }
    
    return listString;
  }