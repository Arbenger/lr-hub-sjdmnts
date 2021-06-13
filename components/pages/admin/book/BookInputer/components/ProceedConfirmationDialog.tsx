import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectBookInputer } from 'services/redux/selectors';
import { fetchInputBook } from 'services/redux/slices/bookInputer/thunks';
import { triggerDialog } from 'services/redux/slices/bookInputer';
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
