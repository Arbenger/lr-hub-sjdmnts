import { Grid } from "@material-ui/core";
import { Container, PictureContainer, Picture, TextField } from "./styled";

export default function FeatureOne() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PictureContainer>
            <Picture
              width={150}
              height={150}
              objectFit="cover"
              alt="profile-picture"
              src="/images/no-profile-picture.png"
            />
          </PictureContainer>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Display Name"
            defaultValue="Arben Apura"
            variant="filled"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Email"
            defaultValue="arbenapura@gmail.com"
            variant="filled"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Occupation"
            defaultValue="Student"
            variant="filled"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Registered At"
            defaultValue="6/3/2021"
            variant="filled"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
