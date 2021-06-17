import {
   Container,
   PictureContainer,
   PictureBorder,
   Picture,
   TextField,
} from './styled';
import { Grid, GridSize } from '@material-ui/core';
import { useAppSelector } from 'services/redux/hooks';
import { selectUser } from 'services/redux/selectors';

export default function FeatureOne() {
   const { info } = useAppSelector(selectUser);

   const fields = [
      {
         label: 'Display Name',
         value: info.displayName,
         size: 12,
      },
      {
         label: 'Email',
         value: info.email,
         size: 12,
      },
      {
         label: 'Occupation',
         value: info.occupation,
         size: 6,
      },
      {
         label: 'Registered At',
         value: new Date(info.registeredAt).toDateString(),
         size: 6,
      },
      {
         label: 'Provider',
         value: info.provider,
         size: 12,
      },
   ];

   return (
      <Container>
         <Grid container spacing={2}>
            <Grid item xs={12}>
               <PictureContainer>
                  <PictureBorder>
                     <Picture
                        width={150}
                        height={150}
                        objectFit="cover"
                        alt="profile-picture"
                        src={info.photoURL}
                        quality={100}
                     />
                  </PictureBorder>
               </PictureContainer>
            </Grid>

            {fields.map((field) => (
               <Grid item key={field.label} xs={field.size as GridSize}>
                  <TextField
                     label={field.label}
                     value={field.value}
                     variant="standard"
                     InputProps={{
                        readOnly: true,
                     }}
                  />
               </Grid>
            ))}
         </Grid>
      </Container>
   );
}
