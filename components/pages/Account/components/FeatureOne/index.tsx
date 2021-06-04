import { Grid } from "@material-ui/core";
import {
  Container,
  PictureContainer,
  PictureBorder,
  Picture,
  TextField,
} from "./styled";

interface Props {
  displayName: string;
  email: string;
  occupation: string;
  registeredAt: string;
  photoURL: string;
  provider: string;
}

export default function FeatureOne({
  displayName,
  email,
  occupation,
  registeredAt,
  photoURL,
  provider,
}: Props) {
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
                src={photoURL || "/images/no-profile-picture.png"}
                quality={100}
              />
            </PictureBorder>
          </PictureContainer>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Display Name"
            defaultValue={displayName}
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Email"
            defaultValue={email}
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Occupation"
            defaultValue={occupation}
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Registered At"
            defaultValue={new Date(registeredAt).toDateString()}
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Provider"
            defaultValue={provider}
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
