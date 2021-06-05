import { Grid } from "@material-ui/core";
import { useAppSelector } from "redux/hooks";
import { selectAccount } from "redux/selectors";
import {
  Container,
  PictureContainer,
  PictureBorder,
  Picture,
  TextField,
} from "./styled";

export default function FeatureOne() {
  const {
    data: { displayName, email, occupation, registeredAt, photoURL, provider },
  } = useAppSelector(selectAccount);

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
                  photoURL !== "not-applicable" && photoURL !== "Loading"
                    ? photoURL
                    : "/images/no-profile-picture.png"
                }
                quality={100}
              />
            </PictureBorder>
          </PictureContainer>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Display Name"
            value={displayName}
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Email"
            value={email}
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Occupation"
            value={occupation}
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Registered At"
            value={new Date(registeredAt).toDateString()}
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Provider"
            value={provider}
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
