import { Container, LogoutIcon, LockIcon } from "./styled";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListSubheader,
} from "@material-ui/core";

export default function FeatureTwo() {
  return (
    <Container>
      <List>
        <ListSubheader>Actions</ListSubheader>

        <ListItem button>
          <ListItemAvatar>
            <Avatar>
              <LogoutIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Logout" />
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
