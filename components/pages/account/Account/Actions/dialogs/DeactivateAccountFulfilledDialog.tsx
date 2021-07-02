import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { triggerDialog } from 'services/redux/slices/account';
import { selectAccount } from 'services/redux/selectors';
import { useRouter } from 'next/router';

import NotificationDialogOne from 'components/dialogs/NotificationDialogOne';

export default function DeactivateAccountFulfilledDialog() {
   const router = useRouter();
   const dispatch = useAppDispatch();

   const { dialogs } = useAppSelector(selectAccount);

   async function handleClose() {
      await router.push('/account/login');

      dispatch(
         triggerDialog({
            dialog: 'deactivateFulfilled',
            isOpen: false,
         })
      );
   }

   return (
      <NotificationDialogOne
         contentText="You successfully deactivated your account!"
         isOpen={dialogs.deactivateFulfilled}
         onClose={handleClose}
      />
   );
}
