const month = [5];
let day = [17];

const timeWarp = (newMonth, newDay) => {
  month[0] = newMonth;
  day[0] = newDay;

}

timeWarp(5, 10); 
console.log(month, day);
timeWarp(7, 20);
console.log(month, day);
