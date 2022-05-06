let raceNumber = Math.floor(Math.random() * 1000);


const runnerRegisteredEarly = true;
const runnersAge = 18;

if (runnersAge >= 18 && runnerRegisteredEarly) {
  raceNumber += 1000;
} 

if (runnersAge > 18 && runnerRegisteredEarly) {
  console.log(`${raceNumber} They will race at 9:30 am`);
} else if (runnersAge > 18 && !runnerRegisteredEarly) {
  console.log(`${raceNumber} They will race at 11:00`);
} else if (runnersAge < 18) {
  console.log(`${raceNumber} They will race at 12:30 pm`);
} else {
  console.log(`${raceNumber} runner to see registration desk.`);
}