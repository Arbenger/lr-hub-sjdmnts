import { useTheme, Box, makeStyles } from '@material-ui/core';
import { Fragment, ReactNode, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectDrawer } from 'services/redux/selectors';
import { setPage } from 'services/redux/slices/page';
import Head from 'next/head';
import Navbar from 'components/layouts/Navbar';
import Drawer from 'components/layouts/Drawer';
import Footer from 'components/layouts/Footer';
import QuickAccess from 'components/layouts/QuickAccess';
import MainBookDialog from 'components/globals/MainBookDialog';

interface Props {
   children: ReactNode;
   pageName: string;
   pageTitle: string;
}

export default function LayoutWrapper({
   children,
   pageName,
   pageTitle,
}: Props) {
   const theme = useTheme();
   const dispatch = useAppDispatch();
   const drawer = useAppSelector(selectDrawer);

   const classes = makeStyles(({ breakpoints, transitions }) => ({
      layout: {
         transition: transitions.create('padding', { delay: 0 }),
         "&[data-is-drawer-open='false']": {
            transition: transitions.create('padding', { delay: 200 }),
         },
         [breakpoints.up('md')]: {
            "&[data-is-drawer-open='false']": {
               paddingLeft: 67.5,
            },
            "&[data-is-drawer-open='true']": {
               paddingLeft: 280,
            },
         },
      },
   }))();

   useEffect(() => {
      dispatch(
         setPage({
            name: pageName,
            title: pageTitle,
         })
      );
   }, [pageName, pageTitle]);

   return (
      <Fragment>
         <Head>
            <meta
               name="viewport"
               content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            <meta name="theme-color" content={theme.palette.primary.dark} />
            <title>LR Hub | {pageTitle}</title>
         </Head>

         <Box>
            <Navbar />
            <Drawer />
            <QuickAccess />

            <Box className={classes.layout} data-is-drawer-open={drawer.isOpen}>
               {children}
               <Footer />
            </Box>

            {/* GLOBALS */}
            <MainBookDialog />
         </Box>
      </Fragment>
   );
}
