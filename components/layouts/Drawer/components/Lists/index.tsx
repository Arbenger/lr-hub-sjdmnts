import {
   Container,
   Header,
   Menu,
   MenuIcon,
   MenuItem,
   MenuTitle,
   MenuContainer,
} from './styled';
import { Divider } from '../../styled';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectLayout, selectPage } from 'services/redux/selectors';
import { useState, useEffect, Fragment } from 'react';
import { Hidden, useTheme } from '@material-ui/core';
import { triggerDrawer, triggerQuickAccess } from 'services/redux/layoutSlice';
import {
   AccountIcon,
   BookmarkIcon,
   DashboardIcon,
   HomeIcon,
   LibraryIcon,
   PendingRequestIcon,
   QuickAccessIcon,
   NotificationIcon,
   ArrowLeftIcon,
   ArrowRightIcon,
} from 'components/Icons';
import { List } from './types';
import Link from 'next/link';

export default function Lists() {
   const dispatch = useAppDispatch();
   const page = useAppSelector(selectPage);
   const { breakpoints } = useTheme();
   const { drawer } = useAppSelector(selectLayout);
   const [navbarHeight, setNavbarHeight] = useState<number>();

   const lists: List[] = [
      {
         title: 'Menu',
         items: [
            {
               title: 'Home',
               pageName: 'home',
               link: '/',
               icon: <HomeIcon />,
            },
            {
               title: 'Dashboard',
               pageName: 'dashboard',
               link: '/account/dashboard',
               icon: <DashboardIcon />,
            },
            {
               title: 'Library',
               pageName: 'library',
               link: '/book/library',
               icon: <LibraryIcon />,
            },
            {
               title: 'Account',
               pageName: 'account',
               link: '/account',
               icon: <AccountIcon />,
            },
         ],
      },
      {
         title: 'Tools',
         items: [
            {
               title: 'Quick Access',
               pageName: '',
               link: '',
               icon: <QuickAccessIcon />,
            },
            {
               title: 'Bookmarks',
               pageName: 'bookmarks',
               link: '/book/bookmarks',
               icon: <BookmarkIcon />,
            },
            {
               title: 'Pending Requests',
               pageName: 'pending-requests',
               link: '/account/pending-requests',
               icon: <PendingRequestIcon />,
            },
            {
               title: 'Notifications',
               pageName: 'notifications',
               link: '/account/notifications',
               icon: <NotificationIcon />,
            },
         ],
      },
      {
         title: 'Resources',
         items: [
            {
               title: 'Terms of Service',
               pageName: 'terms-of-service',
               link: '/resources/terms-of-service',
               icon: <ArrowRightIcon />,
            },
            {
               title: 'Privacy Policy',
               pageName: 'privacy-policy',
               link: '/resources/privacy-policy',
               icon: <ArrowRightIcon />,
            },
            {
               title: 'References',
               pageName: 'references',
               link: '/resources/references',
               icon: <ArrowRightIcon />,
            },
         ],
      },
   ];

   const handleClose = () => {
      dispatch(triggerDrawer('close'));
   };

   const handleClick = () => {
      const width = window.innerWidth;
      if (width <= breakpoints.values.sm) dispatch(triggerDrawer('close'));
   };

   const handleQuickAccessClick = () => {
      dispatch(triggerQuickAccess('open'));
   };

   useEffect(() => {
      const handleWindowResize = () => {
         const navbar = document.getElementById('navbar') as HTMLDivElement;
         navbar && setNavbarHeight(navbar.clientHeight);
      };
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      return () => {
         window.removeEventListener('resize', handleWindowResize);
      };
   }, []);

   return (
      <Container data-is-open={drawer.isOpen}>
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

            {lists.map((list) => (
               <Fragment key={list.title}>
                  <Header className="hide-on-close">{list.title}</Header>
                  <Menu
                     className={`${
                        list.title === 'Resources' ? 'hide-on-close' : null
                     }`}
                  >
                     {list.items.map((item) => {
                        if (item.title === 'Quick Access') {
                           return (
                              <MenuItem
                                 key={item.title}
                                 onClick={handleQuickAccessClick}
                              >
                                 <MenuIcon>{item.icon}</MenuIcon>
                                 <MenuTitle className="fade-on-close">
                                    {item.title}
                                 </MenuTitle>
                              </MenuItem>
                           );
                        }

                        return (
                           <Link key={item.title} href={item.link}>
                              <MenuItem
                                 data-is-active={page.name === item.pageName}
                                 onClick={handleClick}
                              >
                                 <MenuIcon>{item.icon}</MenuIcon>
                                 <MenuTitle className="fade-on-close">
                                    {item.title}
                                 </MenuTitle>
                              </MenuItem>
                           </Link>
                        );
                     })}
                  </Menu>
                  {list.title !== 'Resources' && <Divider />}
               </Fragment>
            ))}
         </MenuContainer>
      </Container>
   );
}
