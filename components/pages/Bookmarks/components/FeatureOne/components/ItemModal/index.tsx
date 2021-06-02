import { Grid, Typography, Chip, Hidden, Fade } from "@material-ui/core";
import { closeItemModal } from "redux/bookmarksSlice";
import { useAppDispatch } from "redux/hooks";
import {
  Container,
  ContentContainer,
  Content,
  ContentImage,
  Button,
} from "./styled";
import Backdrop from "components/layouts/Backdrop";
import Image from "next/image";

export default function ItemModal() {
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeItemModal());
  };

  return (
    <Fade in={true}>
      <Container>
        <Backdrop onClick={handleClose} />
        <ContentContainer>
          <Content>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ContentImage>
                  <Image
                    src="/images/book-cover-1.png"
                    alt="book-cover"
                    width="auto"
                    height="auto"
                    objectFit="cover"
                  />
                </ContentImage>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">Sample book title</Typography>
                <Typography variant="body1">By Sample Author</Typography>

                <Grid container spacing={1}>
                  <Grid item>
                    <Button variant="outlined" size="small">
                      Borrow
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" size="small">
                      Remove
                    </Button>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6">Description</Typography>
                <Typography>
                  &nbsp; &nbsp; &nbsp; Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ducimus reprehenderit, blanditiis
                  exercitationem quaerat, iure amet, minima quibusdam libero
                  expedita consequuntur atque! Molestias odit dolore maxime,
                  nihil aspernatur ab qui magni?
                </Typography>
              </Grid>
            </Grid>
          </Content>
        </ContentContainer>
      </Container>
    </Fade>
  );
}
