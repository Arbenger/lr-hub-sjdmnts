import { useAppDispatch, useAppSelector } from "redux/hooks";
import { triggerDrawer } from "redux/layoutSlice";
import { selectLayout } from "redux/selectors";
import { Container } from "./styled";

export default function Backdrop() {
  const dispatch = useAppDispatch();
  const { drawer } = useAppSelector(selectLayout);

  const handleClick = () => {
    dispatch(triggerDrawer("close"));
  };

  return (
    <Container
      data-is-drawer-open={drawer.isOpen}
      onClick={handleClick}
    ></Container>
  );
}
