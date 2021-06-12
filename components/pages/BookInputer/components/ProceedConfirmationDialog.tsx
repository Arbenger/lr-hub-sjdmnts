import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectBookInputer } from 'redux/selectors';
import { fetchInputBook } from 'redux/slices/bookInputer/thunks';
import { triggerDialog } from 'redux/slices/bookInputer';
import SimpleConfirmationDialog from 'components/dialogs/SimpleConfirmationDialog';

export default function ProceedConfirmationDialog() {
   const dispatch = useAppDispatch();
   const state = useAppSelector(selectBookInputer);

   return (
      <SimpleConfirmationDialog
         isOpen={state.dialogs.proceed.isOpen}
         title="Confirmation"
         content="Are you ready to proceed?"
         confirmText="Yes"
         rejectText="No"
         handleReject={() => {
            dispatch(triggerDialog({ target: 'proceed', action: 'close' }));
         }}
         handleConfirm={() => {
            dispatch(fetchInputBook());
            dispatch(triggerDialog({ target: 'proceed', action: 'close' }));
         }}
      />
   );
}
