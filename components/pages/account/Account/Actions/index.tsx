import { List, ListSubheader, Paper } from '@material-ui/core';
import { Fragment, useMemo } from 'react';
import { useAppSelector } from 'services/redux/hooks';
import { selectUser } from 'services/redux/selectors';

import SignOutButton from './buttons/SignOutButton';
import DeactivateAccountButton from './buttons/DeactivateAccountButton';
import EditAccountButton from './buttons/EditAccountButton';

import EditAccountDialog from './dialogs/EditAccountDialog';
import EditAccountFulfilledDialog from './dialogs/EditAccountFulfilledDialog';
import EditAccountRejectedDialog from './dialogs/EditAccountRejectedDialog';
import DeactivateAccountDialog from './dialogs/DeactivateAccountDialog';
import DeactivateAccountFulfilledDialog from './dialogs/DeactivateAccountFulfilledDialog';

export default function Actions() {
   const {
      info: { isLibrarian },
   } = useAppSelector(selectUser);

   return (
      <Fragment>
         <Paper>
            <List>
               <ListSubheader>Actions</ListSubheader>

               {/* BUTTONS */}
               <SignOutButton />
               {!isLibrarian && (
                  <Fragment>
                     <EditAccountButton />
                     <DeactivateAccountButton />
                  </Fragment>
               )}
            </List>
         </Paper>

         {/* DIALOGS */}
         {!isLibrarian && (
            <Fragment>
               <EditAccountDialog />
               <EditAccountFulfilledDialog />
               <EditAccountRejectedDialog />
               <DeactivateAccountDialog />
               <DeactivateAccountFulfilledDialog />
            </Fragment>
         )}
      </Fragment>
   );
}
