const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if (day === 'Tuesday') {
      return 7;
    } else if (day === 'Wednesday') {
      return 5;
    } else if (day === 'Thursday') {
      return 6;
    } else if (day === 'Friday') {
      return 5;
    } else if (day === 'Saturday') {
      return 8;
    } else if (day === 'Sunday') {
      return 9
    } else {
      console.log('Invalid input!');
    }
  }
  const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours;
  const idealSleepHours = getIdealSleepHours;
  
  if (actualSleepHours === idealSleepHours) {
    console.log('The user got the perfect amount of sleep.');
  } else if (actualSleepHours === idealSleepHours) {
    console.log('The user got more sleep than needed.');
  } else if (actualSleepHours === idealSleepHours) {
    console.log('The user should get some rest.');
  } else {
    console.log('Error!');
  }
  }
  calculateSleepDebt();
  
  