import { List } from "@material-ui/core";
import { Container, LoadMoreButton, LoadMoreContainer } from "./styled";
import { Item as ItemType } from "./types";
import { useAppSelector } from "redux/hooks";
import { selectBookmarks } from "redux/selectors";
import Item from "./components/Item";
import ItemModal from "./components/ItemModal";

export default function FeatuerOne() {
  const bookmarks = useAppSelector(selectBookmarks);
  const items: ItemType[] = [
    {
      bookTitle: "Sample book title",
      imageUrl: "/images/book-cover-1.png",
      createdAt: new Date(),
    },
    {
      bookTitle: "Sample book title",
      imageUrl: "/images/book-cover-2.png",
      createdAt: new Date(),
    },
    {
      bookTitle: "Sample book title",
      imageUrl: "/images/book-cover-3.png",
      createdAt: new Date(),
    },
    {
      bookTitle: "Sample book title",
      imageUrl: "/images/book-cover-4.png",
      createdAt: new Date(),
    },
    {
      bookTitle: "Sample book title",
      imageUrl: "/images/book-cover-5.png",
      createdAt: new Date(),
    },
    {
      bookTitle: "Sample book title",
      imageUrl: "/images/book-cover-1.png",
      createdAt: new Date(),
    },
    {
      bookTitle: "Sample book title",
      imageUrl: "/images/book-cover-2.png",
      createdAt: new Date(),
    },
    {
      bookTitle: "Sample book title",
      imageUrl: "/images/book-cover-3.png",
      createdAt: new Date(),
    },
    {
      bookTitle: "Sample book title",
      imageUrl: "/images/book-cover-4.png",
      createdAt: new Date(),
    },
    {
      bookTitle: "Sample book title",
      imageUrl: "/images/book-cover-5.png",
      createdAt: new Date(),
    },
  ];

  return (
    <Container>
      <List>
        {items.map((item, index) => (
          <Item
            key={index}
            index={index}
            bookTitle={item.bookTitle}
            imageUrl={item.imageUrl}
            createdAt={item.createdAt}
          />
        ))}
      </List>
      <LoadMoreContainer>
        <LoadMoreButton variant="contained">Load More</LoadMoreButton>
      </LoadMoreContainer>
      {bookmarks.itemModal.isOpen ? <ItemModal /> : null}
    </Container>
  );
}
