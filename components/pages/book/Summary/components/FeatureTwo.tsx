import {
   List,
   ListItem,
   ListItemText,
   ListItemAvatar,
   ListSubheader,
   Avatar,
   makeStyles,
   Paper,
} from '@material-ui/core';
import { FaRegUser as AuthorIcon } from 'react-icons/fa';
import { CgTag as TitleIcon } from 'react-icons/cg';
import { BiBook as StatusIcon } from 'react-icons/bi';
import { MdDescription as DescriptionIcon } from 'react-icons/md';

const useStyles = makeStyles(({ spacing, palette }) => ({
   root: {
      height: '100%',
      '& .MuiAvatar-root': {
         backgroundColor: palette.primary.main,
      },
   },
}));

export default function FeatureTwo() {
   const classes = useStyles();

   return (
      <Paper className={classes.root}>
         <List>
            <ListSubheader>Details</ListSubheader>

            <ListItem button>
               <ListItemAvatar>
                  <Avatar>
                     <TitleIcon />
                  </Avatar>
               </ListItemAvatar>
               <ListItemText primary="Sample Book Title" />
            </ListItem>

            <ListItem button>
               <ListItemAvatar>
                  <Avatar>
                     <AuthorIcon />
                  </Avatar>
               </ListItemAvatar>
               <ListItemText primary="Arben Mendoza Apura" />
            </ListItem>

            <ListItem button>
               <ListItemAvatar>
                  <Avatar>
                     <StatusIcon />
                  </Avatar>
               </ListItemAvatar>
               <ListItemText primary="Available" />
            </ListItem>

            <ListItem button>
               <ListItemAvatar>
                  <Avatar>
                     <DescriptionIcon />
                  </Avatar>
               </ListItemAvatar>
               <ListItemText primary="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem illum libero ipsum consequuntur ad corrupti cum adipisci in omnis repellendus similique sed, aspernatur repellat, excepturi, voluptatem veritatis! Voluptatem, tempora soluta." />
            </ListItem>
         </List>
      </Paper>
   );
}
