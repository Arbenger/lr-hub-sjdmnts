import { Fragment } from "react";
import { ArrowDownIcon } from "components/Icons";
import { BookBackgroundCover, BookCover } from "./styled";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@material-ui/core";
import Image from "next/image";

export default function SummaryPanel() {
  const bookCoverUrl = "/images/book-cover-1.png";
  const details = [
    {
      key: "Title",
      value: "Sample Book Title",
    },
    {
      key: "Author",
      value: "Sample Author",
    },
    {
      key: "Description",
      value: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
      placeat ea autem, rem asperiores earum soluta quis tempora culpa
      accusamus beatae amet, ad, suscipit impedit illo. Nulla
      explicabo eveniet voluptatem.`,
    },
    {
      key: "Identification",
      value: "23942384sdf",
    },
    {
      key: "Status",
      value: "Available",
    },
  ];

  return (
    <Fragment>
      <Box marginBottom={4}>
        <BookBackgroundCover
          style={{
            backgroundImage: `url(${bookCoverUrl})`,
          }}
        />
        <BookCover>
          <Image
            src={bookCoverUrl}
            alt="book-cover"
            width={300}
            height={350}
            objectFit="cover"
          />
        </BookCover>
      </Box>

      <Container maxWidth="md">
        <Box paddingBottom={10}>
          {details.map((details, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ArrowDownIcon />}>
                <Typography>{details.key}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{details.value}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Fragment>
  );
}
