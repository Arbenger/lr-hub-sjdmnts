import { Grid, Paper, Box, makeStyles, TextField } from '@material-ui/core';
import { useAppSelector } from 'services/redux/hooks';
import { selectUser } from 'services/redux/selectors';
import Image from 'next/image';

export default function Informations() {
   const { info } = useAppSelector(selectUser);

   const classes = makeStyles(({ spacing, palette }) => ({
      root: {
         padding: spacing(2),
      },
      pictureContainer: {
         width: '100%',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
      },
      pictureBorder: {
         width: 160,
         height: 160,
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         borderRadius: '50%',
         backgroundColor: palette.primary.main,
      },
      picture: {
         borderRadius: '50%',
      },
   }))();

   return (
      <Paper className={classes.root}>
         <Grid container spacing={2}>
            {/* PROFILE PICTURE */}
            <Grid item xs={12}>
               <Box className={classes.pictureContainer}>
                  <Box className={classes.pictureBorder}>
                     <Image
                        width={150}
                        height={150}
                        quality={100}
                        objectFit="cover"
                        alt="profile-picture"
                        src={info.photoURL}
                        className={classes.picture}
                     />
                  </Box>
               </Box>
            </Grid>

            {/* DISPLAY NAME */}
            <Grid item xs={12}>
               <TextField
                  label="Display Name"
                  value={info.displayName}
                  InputProps={{ readOnly: true }}
                  variant="standard"
                  fullWidth
               />
            </Grid>

            {/* EMAIL */}
            <Grid item xs={12}>
               <TextField
                  label="Email"
                  value={info.email}
                  InputProps={{ readOnly: true }}
                  variant="standard"
                  fullWidth
               />
            </Grid>

            {/* OCCUPATION */}
            <Grid item xs={6}>
               <TextField
                  label="Occupation"
                  value={info.occupation}
                  InputProps={{ readOnly: true }}
                  variant="standard"
                  fullWidth
               />
            </Grid>

            {/* REGISTERED AT */}
            <Grid item xs={6}>
               <TextField
                  label="Registered At"
                  value={new Date(info.registeredAt).toDateString()}
                  InputProps={{ readOnly: true }}
                  variant="standard"
                  fullWidth
               />
            </Grid>

            {/* PROVIDER */}
            <Grid item xs={12}>
               <TextField
                  label="Provider"
                  value={info.provider}
                  InputProps={{ readOnly: true }}
                  variant="standard"
                  fullWidth
               />
            </Grid>
         </Grid>
      </Paper>
   );
}
