import {
  Container,
  LogoutIcon,
  LockIcon,
  Avatar,
  EllipsisIcon,
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
import { useState } from "react";

export default function FeatureTwo() {
  const router = useRouter();
  const [isSignOutLoading, setIsSignOutLoading] = useState(false);

  const handleLogout = async () => {
    setIsSignOutLoading(true);
    await firebaseClient.auth().signOut();
    router.push("/login");
  };

  return (
    <Container>
      <List>
        <ListSubheader>Actions</ListSubheader>

        <ListItem button onClick={handleLogout}>
          <ListItemAvatar>
            <Avatar>
              {isSignOutLoading ? <EllipsisIcon /> : <LogoutIcon />}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={isSignOutLoading ? "Signing Out" : "Sign Out"}
          />
        </ListItem>

        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <LockIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Deactivate Account" />
        </ListItem>
      </List>
    </Container>
  );
}
