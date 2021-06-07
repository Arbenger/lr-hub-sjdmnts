import { Grid } from "@material-ui/core";
import {
  Container,
  Description,
  Cover,
  Title,
  Subtitle,
  Button,
} from "./styled";
import { Props } from "./types";
import Image from "next/image";

export default function BookSummary({ book }: Props) {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Cover>
            <Image
              src={`/images/book-cover-${book.id}.png`}
              width="auto"
              height="auto"
              objectFit="cover"
            />
          </Cover>
        </Grid>
        <Grid item xs={7}>
          <Title variant="h6">{book.title}</Title>
          <Subtitle variant="body2">20 available copies</Subtitle>
          <Button variant="outlined" size="small" color="primary">
            Borrow
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Title variant="h6">Description</Title>
          <Description variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
            rem? Accusantium consequatur magnam ullam, laborum vel iusto, enim
            in officia expedita, ab ut ipsam velit perferendis corrupti
            corporis? Doloribus, eos.
          </Description>
        </Grid>
      </Grid>
    </Container>
  );
}
