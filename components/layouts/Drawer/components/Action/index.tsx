import { Container } from "./styled";
import { Hidden, IconButton } from "@material-ui/core";
import { MdKeyboardArrowRight as ArrowIcon } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectLayout } from "redux/selectors";
import { triggerDrawer } from "redux/layoutSlice";

export default function Action() {
  const dispatch = useAppDispatch();
  const {
    drawer: { isOpen },
  } = useAppSelector(selectLayout);

  const handleClick = () => {
    dispatch(triggerDrawer("toggle"));
  };

  return (
    <Container data-is-open={isOpen}>
      <Hidden smDown>
        <IconButton
          color="inherit"
          aria-label="close-drawer"
          onClick={handleClick}
        >
          <ArrowIcon />
        </IconButton>
      </Hidden>
    </Container>
  );
}
