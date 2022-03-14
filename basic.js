var days = 2;
var dayname;

switch (days) {
  case 1:
    dayname = "Monday";
    break;

  case 2:
    dayname = "Tuesday";
    

  case 3:
    dayname = "Wednesday";
    break;

  case 4:
    dayname = "Thursday";
    break;

  case 5:
    dayname = "Friday";
    break;

  case 6:
    dayname = "Saturday";
    break;

  case 7:
    dayname = "Sunday";
    break;

  default:
    dayname = "invalid days";
    break;
}
console.log (dayname)
