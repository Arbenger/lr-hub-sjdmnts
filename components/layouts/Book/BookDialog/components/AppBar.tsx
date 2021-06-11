import {
   DetailIcon,
   QRCodeIcon,
   ActionIcon,
   HistoryIcon,
} from 'components/Icons';
import {
   Tabs,
   Tab,
   useTheme,
   useMediaQuery,
   AppBar as MuiAppBar,
} from '@material-ui/core';
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectBookDialog } from 'redux/selectors';
import { changeTab, Tab as TabType } from 'redux/bookDialogSlice';

export default function AppBar() {
   const { breakpoints } = useTheme();
   const isXS = useMediaQuery(breakpoints.only('xs'));
   const dispatch = useAppDispatch();
   const state = useAppSelector(selectBookDialog);

   const handleChange = (event: ChangeEvent<{}>, newValue: TabType) => {
      dispatch(changeTab(newValue));
   };

   return (
      <MuiAppBar position="sticky" color="primary">
         <Tabs
            value={state.currentTab}
            onChange={handleChange}
            indicatorColor="secondary"
            variant="fullWidth"
         >
            <Tab
               label={!isXS && 'Summary'}
               icon={<DetailIcon fontSize={25} />}
            />
            <Tab
               label={!isXS && 'QR Code'}
               icon={<QRCodeIcon fontSize={25} />}
            />
            <Tab
               label={!isXS && 'Actions'}
               icon={<ActionIcon fontSize={25} />}
            />
            <Tab
               label={!isXS && 'History'}
               icon={<HistoryIcon fontSize={25} />}
            />
         </Tabs>
      </MuiAppBar>
   );
}
