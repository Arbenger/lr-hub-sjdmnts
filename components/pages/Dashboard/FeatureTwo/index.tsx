import { StatisticsContainer, RootContainer } from "./styled";
import Statistics from "./Statistics";
import { useAppSelector } from "redux/hooks";
import { selectLayout } from "redux/selectors";
import { useEffect } from "react";

export default function FeatureTwo() {
  const {
    drawer: { isOpen },
  } = useAppSelector(selectLayout);

  useEffect(() => {
    setTimeout(() => window.dispatchEvent(new Event("resize")), 500);
  }, [isOpen]);

  return (
    <RootContainer maxWidth="lg">
      <StatisticsContainer>
        <Statistics />
      </StatisticsContainer>
    </RootContainer>
  );
}
