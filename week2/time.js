const month = 5;
let day = 17;

const timeWarp = (newMonth, newDay) => {
  let month = newMonth;
  day = newDay;
  console.log(month, day);
}

timeWarp(5, 10);
timeWarp(7, 20);
