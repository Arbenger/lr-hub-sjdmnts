import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { triggerDialog } from 'services/redux/slices/account';
import { selectAccount } from 'services/redux/selectors';

import NotificationDialogOne from 'components/dialogs/NotificationDialogOne';

export default function DeactivateAccountRejectedDialog() {
   const dispatch = useAppDispatch();

   const { dialogs } = useAppSelector(selectAccount);

   async function handleClose() {
      dispatch(
         triggerDialog({
            dialog: 'deactivateRejected',
            isOpen: false,
         })
      );
   }

   return (
      <NotificationDialogOne
         contentText="You failed to deactivated your account!"
         isOpen={dialogs.deactivateRejected}
         onClose={handleClose}
      />
   );
}
