//Overengineering just for the sake of abstraction
interface DateInterface {
  getYear(): number;
  getMonth(): number;
  getDate(): number;
}

class DateClass implements DateInterface {
  constructor(private date: Date) { }

  getYear(): number {
    return this.date.getFullYear();
  }

  getMonth(): number {
    return this.date.getMonth();
  }

  getDate(): number {
    return this.date.getDate();
  }
}

function getDateInfo(date: DateClass) {
  console.log('Year: ', date.getYear());
  console.log('Month: ', date.getMonth());
  console.log('Date: ', date.getDate());
  console.log('Full date: ', date);
}



const dateTime: DateClass = new DateClass(new Date());

console.log('--------- Abstraction - 2 ----------');

getDateInfo(dateTime)

console.log('------------------------------------');

const now = new Date();

const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1;
const currentDate = now.getDate() + 1;

console.log('currentYear', currentYear);
console.log('currentMonth', currentMonth);
console.log('currentDate', currentDate);
console.log('------------------------------------');




