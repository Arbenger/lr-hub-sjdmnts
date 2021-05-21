import { Grid } from "@material-ui/core";
import { Container } from "./styled";
import { BookOption } from "./types";
import BookSummary from "../BookSummary";

export default function BookMenu() {
  const books: BookOption[] = [
    {
      id: "1",
      title: "Sample sdfsdfsdfsdf Book 1",
      author: "Sample Author",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facere labore deleniti cum, ratione doloremque obcaecati, suscipit odit velit error tenetur ad accusantium quo at quidem nobis recusandae iusto! Libero.`,
    },
    {
      id: "2",
      title: "Sample Book 2",
      author: "Sample Author",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facere labore deleniti cum, ratione doloremque obcaecati, suscipit odit velit error tenetur ad accusantium quo at quidem nobis recusandae iusto! Libero.`,
    },
    {
      id: "3",
      title: "Sample Book 3",
      author: "Sample Author",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facere labore deleniti cum, ratione doloremque obcaecati, suscipit odit velit error tenetur ad accusantium quo at quidem nobis recusandae iusto! Libero.`,
    },
    {
      id: "4",
      title: "Sample Book 4",
      author: "Sample Author",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facere labore deleniti cum, ratione doloremque obcaecati, suscipit odit velit error tenetur ad accusantium quo at quidem nobis recusandae iusto! Libero.`,
    },
    {
      id: "5",
      title: "Sample Book 5",
      author: "Sample Author",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facere labore deleniti cum, ratione doloremque obcaecati, suscipit odit velit error tenetur ad accusantium quo at quidem nobis recusandae iusto! Libero.`,
    },
    {
      id: "1",
      title: "Sample sdfsdfsdfsdf Book 1",
      author: "Sample Author",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facere labore deleniti cum, ratione doloremque obcaecati, suscipit odit velit error tenetur ad accusantium quo at quidem nobis recusandae iusto! Libero.`,
    },
    {
      id: "2",
      title: "Sample Book 2",
      author: "Sample Author",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facere labore deleniti cum, ratione doloremque obcaecati, suscipit odit velit error tenetur ad accusantium quo at quidem nobis recusandae iusto! Libero.`,
    },
    {
      id: "3",
      title: "Sample Book 3",
      author: "Sample Author",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facere labore deleniti cum, ratione doloremque obcaecati, suscipit odit velit error tenetur ad accusantium quo at quidem nobis recusandae iusto! Libero.`,
    },
    {
      id: "4",
      title: "Sample Book 4",
      author: "Sample Author",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facere labore deleniti cum, ratione doloremque obcaecati, suscipit odit velit error tenetur ad accusantium quo at quidem nobis recusandae iusto! Libero.`,
    },
    {
      id: "5",
      title: "Sample Book 5",
      author: "Sample Author",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat facere labore deleniti cum, ratione doloremque obcaecati, suscipit odit velit error tenetur ad accusantium quo at quidem nobis recusandae iusto! Libero.`,
    },
  ];

  return (
    <Container>
      <Grid container spacing={2}>
        {books.map((book, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <BookSummary book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
