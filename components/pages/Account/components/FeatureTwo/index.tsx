import {
  Container,
  LogoutIcon,
  LockIcon,
  Avatar,
  EllipsisIcon,
  EditIcon,
} from "./styled";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import { firebaseClient } from "firebase/client";
import { useRouter } from "next/router";
import { useAppDispatch } from "redux/hooks";
import { triggerModal } from "redux/accountSlice";
import { useState } from "react";
import DeactivateAccountModal from "./components/DeactivateAccountModal";

export default function FeatureTwo() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isSignOutPending, setIsSignOutPending] = useState(false);

  const handleSignOut = async () => {
    setIsSignOutPending(true);
    await firebaseClient.auth().signOut();
    router.push("/login");
  };

  const handdleClickDeactivateAccount = () => {
    dispatch(
      triggerModal({
        target: "deactivateAccount",
        isOpen: true,
      })
    );
  };

  return (
    <Container>
      <List>
        <ListSubheader>Actions</ListSubheader>

        <ListItem button onClick={handleSignOut}>
          <ListItemAvatar>
            <Avatar>
              {isSignOutPending ? <EllipsisIcon /> : <LogoutIcon />}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={isSignOutPending ? "Signing Out" : "Sign Out"}
          />
        </ListItem>

        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <EditIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Edit Informations" />
        </ListItem>

        <ListItem button onClick={handdleClickDeactivateAccount}>
          <ListItemAvatar>
            <Avatar>
              <LockIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Deactivate Account" />
        </ListItem>
      </List>

      <DeactivateAccountModal />
    </Container>
  );
}
