import { useAppDispatch, useAppSelector } from 'services/redux/hooks';
import { triggerDialog } from 'services/redux/slices/account';
import { selectAccount } from 'services/redux/selectors';
import { useRouter } from 'next/router';
import SimpleConfirmationDialog from 'components/dialogs/SimpleConfirmationDialog';

export default function RedirectConfirmationDialog() {
   const router = useRouter();
   const dispatch = useAppDispatch();
   const {
      dialogs: {
         redirect: { isOpen },
      },
   } = useAppSelector(selectAccount);

   const handleClose = () => {
      dispatch(triggerDialog({ target: 'redirect', state: { isOpen: false } }));
   };

   return (
      <SimpleConfirmationDialog
         isOpen={isOpen}
         title="Notification"
         content="The deactivation of your account was successful. Choose where to be redirected"
         confirmText="Login"
         rejectText="Home"
         handleReject={async () => {
            await router.push('/');
            handleClose();
         }}
         handleConfirm={async () => {
            await router.push('/account/login');
            handleClose();
         }}
      />
   );
}