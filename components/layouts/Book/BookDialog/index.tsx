import { Dialog } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectBookDialog } from 'redux/selectors';
import { triggerDialog } from 'redux/bookDialogSlice';
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
