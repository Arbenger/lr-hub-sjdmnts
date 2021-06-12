import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectBookInputer } from 'redux/selectors';
import { triggerDialog } from 'redux/slices/bookInputer';
import { useRouter } from 'next/router';
import SimpleConfirmationDialog from 'components/dialogs/SimpleConfirmationDialog';

export default function PrintConfirmationDialog() {
   const router = useRouter();
   const dispatch = useAppDispatch();
   const state = useAppSelector(selectBookInputer);

   return (
      <SimpleConfirmationDialog
         isOpen={state.dialogs.print.isOpen}
         title="Confirmation"
         content="The transaction was successful. Do you want to print or download the QR Codes of the book's copies?"
         confirmText="Yes"
         rejectText="No"
         handleReject={() => {
            dispatch(triggerDialog({ target: 'print', action: 'close' }));
         }}
         handleConfirm={async () => {
            await router.push({
               pathname: '/admin/book/qr-code-generator',
               query: {
                  ...state.fetchedData,
               },
            });
            dispatch(triggerDialog({ target: 'print', action: 'close' }));
         }}
      />
   );
}
