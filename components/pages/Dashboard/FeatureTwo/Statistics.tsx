import { useEffect } from "react";
import { Chart } from "frappe-charts";

export default function Statistics() {
  useEffect(() => {
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

    const getLabels = () => {
      let current = new Date().getMonth();
      let labels: string[] = [];
      for (let i = 0; i < 12; i++) {
        labels = [...labels, months[current]];
        if (current === 11) current = 0;
        else current++;
      }
      return labels;
    };

    const labels = getLabels();

    const data = {
      labels,
      datasets: [
        {
          name: "Barrowed",
          chartType: "line",
          values: [5, 3, 5, 6, 7, 3, 6, 8, 4, 3, 2, 2],
        },
        {
          name: "Returned",
          chartType: "line",
          values: [4, 2, 5, 8, 4, 6, 4, 9, 3, 4, 3, 2],
        },
        {
          name: "Expired",
          chartType: "bar",
          values: [2, 3, 2, 0, 5, 5, 1, 2, 0, 0, 1, 0],
        },
        {
          name: "Lost",
          chartType: "bar",
          values: [1, 2, 0, 0, 0, 5, 3, 0, 2, 0, 2, 0],
        },
      ],
    };

    new Chart("#chart", {
      title: "Statistics",
      data: data,
      type: "axis-mixed",
      height: 400,
      colors: ["#b71c1c", "#0d47a1", "#6a1b9a", "#2e7d32"],
      axisOptions: {
        xIsSeries: true,
      },
      lineOptions: {
        heatLine: 1,
      },
    });
  }, []);

  return <div id="chart" />;
}
