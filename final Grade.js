// Write your function here:
const finalGrade = (test, exam, final) => {
    if ((test > 100 || test < 0) || (exam > 100 || exam < 0) || (final > 100 || final < 0)) {
      return 'You have entered an invalid grade.'
    } 
    let average = (test + exam + final) / 3
  if (average < 60) {
    return 'F';
  } else if (average < 70) {
    return 'D';
  } else if (average < 80) {
    return 'C';
  } else if (average < 90) {
    return 'B';
  } else if (average < 100) {
    return 'A';
  } else if (average < 0 || finalGrade > 100) {
    return 'You have entered an invalid grade.';
  }
  }
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
   console.log(finalGrade(99, 92, 95)) // Should print 'A'
  
  // We encourage you to add more function calls of your own to test your code!