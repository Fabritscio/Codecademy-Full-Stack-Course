// Write your function here:
const lifePhase = age => {
    if (age < 4) {
      return 'baby';
    } else if (age < 12) {
      return 'child';
    } else if (age < 19) {
      return 'teen';
    } else if (age < 65) {
      return 'adult';
    } else if (age < 140) {
      return 'senior citizen';
    } else if (age < 0 || age > 140) {
      console.log('This is not a valid age');
    }
    }
    
    
    
     console.log(lifePhase(5)); //should print 'child'
    