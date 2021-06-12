import { Grid, GridSize } from '@material-ui/core';
import { useAppSelector } from 'redux/hooks';
import { selectAccount } from 'redux/selectors';
import {
   Container,
   PictureContainer,
   PictureBorder,
   Picture,
   TextField,
} from './styled';

export default function FeatureOne() {
   const {
      info: {
         email,
         displayName,
         occupation,
         registeredAt,
         photoURL,
         provider,
      },
   } = useAppSelector(selectAccount);

   interface Field {
      label: string;
      value: string;
      size: GridSize;
   }

   const fields: Field[] = [
      {
         label: 'Display Name',
         value: displayName,
         size: 12,
      },
      {
         label: 'Email',
         value: email,
         size: 12,
      },
      {
         label: 'Occupation',
         value: occupation,
         size: 6,
      },
      {
         label: 'Registered At',
         value: new Date(registeredAt).toDateString(),
         size: 6,
      },
      {
         label: 'Provider',
         value: provider,
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
                        src={
                           photoURL && photoURL !== 'not-applicable'
                              ? photoURL
                              : '/images/no-profile-picture.png'
                        }
                        quality={100}
                     />
                  </PictureBorder>
               </PictureContainer>
            </Grid>

            {fields.map((field) => (
               <Grid item key={field.label} xs={field.size}>
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
