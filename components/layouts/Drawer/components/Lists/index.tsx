import {
  Container,
  Header,
  Menu,
  MenuIcon,
  MenuItem,
  MenuTitle,
  MenuContainer,
} from "./styled";
import {
  RiHomeLine as HomeIcon,
  RiDashboardLine as DashboardIcon,
  RiUser4Line as UserIcon,
  RiNotification3Line as NotificationIcon,
} from "react-icons/ri";
import {
  BiBook as BookIcon,
  BiErrorCircle as ErrorIcon,
  BiHourglass as HourglassIcon,
} from "react-icons/bi";
import { GoBook as BookManagerIcon } from "react-icons/go";
import {
  MdKeyboardArrowRight as ArrowRightIcon,
  MdKeyboardArrowLeft as ArrowLeftIcon,
} from "react-icons/md";
import Link from "next/link";
import { Divider } from "../../styled";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { selectLayout } from "redux/selectors";
import { useState, useEffect } from "react";
import { Hidden } from "@material-ui/core";
import { triggerDrawer } from "redux/layoutSlice";

interface Props {
  pageName: string;
}

export default function Lists({ pageName }: Props) {
  const {
    drawer: { isOpen },
  } = useAppSelector(selectLayout);
  const dispatch = useAppDispatch();
  const [navbarHeight, setNavbarHeight] = useState<number>();

  const handleClose = () => {
    dispatch(triggerDrawer("close"));
  };

  useEffect(() => {
    const handleWindowResize = () => {
      const navbar = document.getElementById("navbar") as HTMLDivElement;
      navbar && setNavbarHeight(navbar.clientHeight);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Container data-is-open={isOpen}>
      <MenuContainer maxHeight={`calc(100vh - ${navbarHeight}px - 60px)`}>
        <Hidden mdUp>
          <Menu>
            <MenuItem onClick={handleClose}>
              <MenuIcon>
                <ArrowLeftIcon />
              </MenuIcon>
              <MenuTitle>Close</MenuTitle>
            </MenuItem>
          </Menu>
        </Hidden>

        <Header className="hide-on-close">Menu</Header>
        <Menu>
          <Link href="/">
            <MenuItem data-is-active={pageName === "home"}>
              <MenuIcon>
                <HomeIcon />
              </MenuIcon>
              <MenuTitle className="fade-on-close">Home</MenuTitle>
            </MenuItem>
          </Link>

          <Link href="/dashboard">
            <MenuItem data-is-active={pageName === "dashboard"}>
              <MenuIcon>
                <DashboardIcon />
              </MenuIcon>
              <MenuTitle className="fade-on-close">Dashboard</MenuTitle>
            </MenuItem>
          </Link>

          <MenuItem>
            <MenuIcon data-is-active={pageName === "library"}>
              <BookIcon />
            </MenuIcon>
            <MenuTitle className="fade-on-close">Library</MenuTitle>
          </MenuItem>

          <MenuItem>
            <MenuIcon data-is-active={pageName === "account"}>
              <UserIcon />
            </MenuIcon>
            <MenuTitle className="fade-on-close">Account</MenuTitle>
          </MenuItem>
        </Menu>

        <Divider />

        <Header className="hide-on-close">Tools</Header>
        <Menu>
          <MenuItem data-is-active={pageName === "book-manager"}>
            <MenuIcon>
              <BookManagerIcon />
            </MenuIcon>
            <MenuTitle className="fade-on-close">Book Manager</MenuTitle>
          </MenuItem>

          <MenuItem data-is-active={pageName === "pending-requests"}>
            <MenuIcon>
              <HourglassIcon />
            </MenuIcon>
            <MenuTitle className="fade-on-close">Pending Requests</MenuTitle>
          </MenuItem>

          <MenuItem data-is-active={pageName === "notifications"}>
            <MenuIcon>
              <NotificationIcon />
            </MenuIcon>
            <MenuTitle className="fade-on-close">Notifications</MenuTitle>
          </MenuItem>

          <MenuItem data-is-active={pageName === "penalties"}>
            <MenuIcon>
              <ErrorIcon />
            </MenuIcon>
            <MenuTitle className="fade-on-close">Penalties</MenuTitle>
          </MenuItem>
        </Menu>

        <Divider />

        <Header className="hide-on-close">Resources</Header>
        <Menu className="hide-on-close">
          <MenuItem data-is-active={pageName === "about"}>
            <MenuIcon>
              <ArrowRightIcon />
            </MenuIcon>
            <MenuTitle className="fade-on-close">About</MenuTitle>
          </MenuItem>

          <MenuItem data-is-active={pageName === "usage-guide"}>
            <MenuIcon>
              <ArrowRightIcon />
            </MenuIcon>
            <MenuTitle className="fade-on-close">Usage Guide</MenuTitle>
          </MenuItem>

          <MenuItem data-is-active={pageName === "terms-of-service"}>
            <MenuIcon>
              <ArrowRightIcon />
            </MenuIcon>
            <MenuTitle className="fade-on-close">Terms of Service</MenuTitle>
          </MenuItem>

          <MenuItem data-is-active={pageName === "privacy-policy"}>
            <MenuIcon>
              <ArrowRightIcon />
            </MenuIcon>
            <MenuTitle className="fade-on-close">Privacy Policy</MenuTitle>
          </MenuItem>

          <MenuItem data-is-active={pageName === "references"}>
            <MenuIcon>
              <ArrowRightIcon />
            </MenuIcon>
            <MenuTitle className="fade-on-close">References</MenuTitle>
          </MenuItem>
        </Menu>
      </MenuContainer>
    </Container>
  );
}
