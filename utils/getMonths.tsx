export default function getMonths() {
   const currentMonth = new Date().getMonth();
   let months = [
      'JAN',
      'FEB',
      'APR',
      'MAR',
      'MAY',
      'JUN',
      'JUL',
      'AUG',
      'SEP',
      'OCT',
      'NOV',
      'DEC',
   ];
   for (let i = 0; i <= currentMonth; i++) {
      const removedValue = months.pop();
      months.unshift(removedValue);
   }
   return months;
}
