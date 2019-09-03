let name = 'you'
let holida = 'Independence Day';
let number = 20;
let mother = "Mother's Day";

function happyHolidays(){
  return "Happy holiday!";
}

happyHolidays();

function happyHolidaysTo(name){
  return 'Happy ${holiday}, ${name}!';
}

happyHolidaysTo();

function holidayCountdown(mother, number){
  return 'Its ${number} days until ${mother}!';
}
holidayCountdown();
