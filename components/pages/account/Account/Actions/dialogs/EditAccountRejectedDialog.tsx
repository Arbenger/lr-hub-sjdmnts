import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectAccount } from 'services/redux/selectors';
import { triggerDialog } from 'services/redux/slices/account';

import NotificationDialogOne from 'components/dialogs/NotificationDialogOne';

export default function EditAccountRejectedDialog() {
   const dispatch = useAppDispatch();

   const { dialogs } = useAppSelector(selectAccount);

   function handleClose() {
      dispatch(
         triggerDialog({
            dialog: 'editRejected',
            isOpen: false,
         })
      );
   }

   return (
      <NotificationDialogOne
         contentText="You failed to edit your account!"
         isOpen={dialogs.editRejected}
         onClose={handleClose}
      />
   );
}
