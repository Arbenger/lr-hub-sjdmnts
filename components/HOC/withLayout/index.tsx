import { ComponentType, Fragment, useEffect } from 'react';
import { useTheme, Box } from '@material-ui/core';
import { LayoutContainer } from './styled';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectLayout, selectPage } from 'services/redux/selectors';
import { setPage } from 'services/redux/pageSlice';

import Head from 'next/head';
import Footer from 'components/layouts/Footer';
import Navbar from 'components/layouts/Navbar';
import Drawer from 'components/layouts/Drawer';
import QuickAccess from 'components/layouts/QuickAccess';
import BookDialog from 'components/layouts/Book/BookDialog';

interface Config {
   pageName: string;
   pageTitle: string;
}

export default function withLayout<T>(
   WrappedComponent: ComponentType<T>,
   config: Config
) {
   const WithLayout = (props: T) => {
      const { palette } = useTheme();
      const { drawer } = useAppSelector(selectLayout);
      const dispatch = useAppDispatch();
      const page = useAppSelector(selectPage);

      useEffect(() => {
         dispatch(setPage({ name: config.pageName, title: config.pageTitle }));
      }, []);

      return (
         <Fragment>
            <Head>
               <meta name="theme-color" content={palette.primary.dark} />
               <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
               />
               <title>LR Hub | {page.title}</title>
            </Head>

            <Box>
               <Navbar />
               <Drawer />
               <QuickAccess />
               <BookDialog />
               <LayoutContainer data-is-drawer-open={drawer.isOpen}>
                  <WrappedComponent {...props} />
                  <Footer />
               </LayoutContainer>
            </Box>
         </Fragment>
      );
   };
   return WithLayout;
}
