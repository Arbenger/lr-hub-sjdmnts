import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { selectAccount } from 'services/redux/selectors';
import { triggerDialog } from 'services/redux/slices/account';

import NotificationDialogOne from 'components/dialogs/NotificationDialogOne';

export default function EditAccountFulfilledDialog() {
   const dispatch = useAppDispatch();

   const { dialogs } = useAppSelector(selectAccount);

   function handleClose() {
      dispatch(
         triggerDialog({
            dialog: 'editFulfilled',
            isOpen: false,
         })
      );
   }

   return (
      <NotificationDialogOne
         contentText="You successfully edited your account!"
         isOpen={dialogs.editFulfilled}
         onClose={handleClose}
      />
   );
}
