let name = 'you'
let holidays = 'Independence Day';
let number = 20;
let mother = "Mother's Day";

function happyHolidays(){
  return "Happy holidays!";
}

happyHolidays();

function happyHolidaysTo(name){
  return 'Happy ${holidays}, ${name}!';
}

happyHolidaysTo();

function holidayCountdown(mother, number){
  return 'It\'s ${number} days until ${mother}!';
}
holidayCountdown();
