import { List, ListSubheader, Paper } from '@material-ui/core';
import { Fragment } from 'react';

import SignOutButton from './buttons/SignOutButton';
import DeactivateAccountButton from './buttons/DeactivateAccountButton';
import EditAccountButton from './buttons/EditAccountButton';

import EditAccountDialog from './dialogs/EditAccountDialog';
import EditAccountFulfilledDialog from './dialogs/EditAccountFulfilledDialog';
import EditAccountRejectedDialog from './dialogs/EditAccountRejectedDialog';
import DeactivateAccountDialog from './dialogs/DeactivateAccountDialog';
import DeactivateAccountFulfilledDialog from './dialogs/DeactivateAccountFulfilledDialog';

export default function Actions() {
   return (
      <Fragment>
         <Paper>
            <List>
               <ListSubheader>Actions</ListSubheader>

               {/* BUTTONS */}
               <SignOutButton />
               <EditAccountButton />
               <DeactivateAccountButton />
            </List>
         </Paper>

         {/* DIALOGS */}
         <EditAccountDialog />
         <EditAccountFulfilledDialog />
         <EditAccountRejectedDialog />
         <DeactivateAccountDialog />
         <DeactivateAccountFulfilledDialog />
      </Fragment>
   );
}
