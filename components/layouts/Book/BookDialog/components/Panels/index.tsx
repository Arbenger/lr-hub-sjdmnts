import { Fragment } from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectBookDialog } from 'redux/selectors';
import { Tab as TabType } from 'redux/bookDialogSlice';
import SummaryPanel from './components/SummaryPanel/index';
import QRCodePanel from './components/QRCodePanel';
import ActionsPanel from './components/ActionsPanel';

interface TabPanelProps {
   children?: React.ReactNode;
   index: TabType;
   value: TabType;
}

function TabPanel(props: TabPanelProps) {
   const { children, value, index, ...other } = props;

   return (
      <div role="tabpanel" hidden={value !== index} {...other}>
         {value === index && children}
      </div>
   );
}

export default function Panels() {
   const state = useAppSelector(selectBookDialog);

   return (
      <Fragment>
         <TabPanel value={state.currentTab} index={0}>
            <SummaryPanel />
         </TabPanel>
         <TabPanel value={state.currentTab} index={1}>
            <QRCodePanel />
         </TabPanel>
         <TabPanel value={state.currentTab} index={2}>
            <ActionsPanel />
         </TabPanel>
         <TabPanel value={state.currentTab} index={3}>
            History
         </TabPanel>
      </Fragment>
   );
}
