import { Dialog } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectBookDialog } from 'services/redux/selectors';
import { triggerDialog } from 'services/redux/bookDialogSlice';
import Transition from './components/Transition';
import AppBar from './components/AppBar';
import Panels from './components/Panels';

export default function BookDialog() {
   const dispatch = useAppDispatch();
   const state = useAppSelector(selectBookDialog);

   const handleClose = () => {
      dispatch(triggerDialog('close'));
   };

   return (
      <Dialog
         open={state.isOpen}
         onClose={handleClose}
         TransitionComponent={Transition}
         fullScreen
      >
         <AppBar />
         <Panels />
      </Dialog>
   );
}
