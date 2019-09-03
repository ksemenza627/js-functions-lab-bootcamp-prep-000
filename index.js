let name = 'you';
let holiday = 'Independence Day';
let number = 20;
let mother = "Mother's Day";

function happyHolidays(){
  return "Happy holidays!";
}

happyHolidays();

function happyHolidaysTo(name){
  return 'Happy holidays, ${name}!';
}

happyHolidays();

function happyHolidayTo(holiday, name){
  return 'Happy ${holiday}, ${name}!'
}

happyHolidaysTo();

function holidayCountdown(number, mother){
  return 'It\'s ${number} days until ${mother}!';
}
holidayCountdown();
