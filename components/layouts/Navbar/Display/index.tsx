import { Container } from "./styled";
import { HiMenuAlt2 as MenuIcon } from "react-icons/hi";
import { Hidden, IconButton, Typography } from "@material-ui/core";
import { useAppDispatch } from "redux/hooks";
import { triggerDrawer } from "redux/layoutSlice";

interface Props {
  title: string;
}

export default function Display({ title }: Props) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(triggerDrawer("toggle"));
  };

  return (
    <Container>
      <Hidden mdUp>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="drawer-toggler"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>

      <Typography variant="h6" className="title">
        {title}
      </Typography>
    </Container>
  );
}
