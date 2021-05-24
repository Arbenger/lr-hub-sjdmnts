import { useEffect } from "react";
import { Container } from "./styled";

export default function Chart() {
  useEffect(() => {
    (async () => {
      const { Chart: FrappeChart } = await import("frappe-charts");

      new FrappeChart("#chart", {
        title: "Content",
        data: {
          labels: ["Barrow", "Return", "Penalty"],
          datasets: [
            {
              name: "Content",
              values: [5, 3, 5],
            },
          ],
        },
        type: "donut",
        height: 400,
        colors: ["#b71c1c", "#0d47a1", "#6a1b9a", "#2e7d32"],
      });
    })();
  }, []);

  return (
    <Container>
      <div id="chart" />
    </Container>
  );
}
