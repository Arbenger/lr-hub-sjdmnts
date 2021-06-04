export const getMonthLabels = () => {
  const months = [
    "JAN",
    "FEB",
    "APR",
    "MAR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  let current = new Date().getMonth();
  let labels: string[] = [];
  for (let i = 0; i < 12; i++) {
    labels = [...labels, months[current]];
    if (current === 11) current = 0;
    else current++;
  }
  return labels;
};
