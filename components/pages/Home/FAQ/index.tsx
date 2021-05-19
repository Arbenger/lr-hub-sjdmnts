import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { RiArrowDropDownLine as ArrowIcon } from "react-icons/ri";
import { Container, Title } from "./styled";

export default function FAQ() {
  const faqs = [
    {
      id: "questionOne",
      question: "Question number one?",
      answer: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
      nesciunt impedit tempore laboriosam iure, a earum consectetur amet,
      officia rerum exercitationem beatae quod id nemo repellendus
      doloremque. Officia, iure rem.`,
    },
    {
      id: "questionTwo",
      question: "Question number two?",
      answer: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
      nesciunt impedit tempore laboriosam iure, a earum consectetur amet,
      officia rerum exercitationem beatae quod id nemo repellendus
      doloremque. Officia, iure rem.`,
    },
    {
      id: "questionThree",
      question: "Question number three?",
      answer: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
      nesciunt impedit tempore laboriosam iure, a earum consectetur amet,
      officia rerum exercitationem beatae quod id nemo repellendus
      doloremque. Officia, iure rem.`,
    },
    {
      id: "questionFour",
      question: "Question number four?",
      answer: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
      nesciunt impedit tempore laboriosam iure, a earum consectetur amet,
      officia rerum exercitationem beatae quod id nemo repellendus
      doloremque. Officia, iure rem.`,
    },
    {
      id: "questionFive",
      question: "Question number five?",
      answer: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
      nesciunt impedit tempore laboriosam iure, a earum consectetur amet,
      officia rerum exercitationem beatae quod id nemo repellendus
      doloremque. Officia, iure rem.`,
    },
  ];

  const [expanded, setExpanded] = useState<any>(false);

  const handleChange = (panel: string) => (event, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container>
      <Title variant="h5">Frequently Asked Questions</Title>

      {faqs.map((faq) => (
        <Accordion
          key={faq.id}
          expanded={expanded === faq.id}
          onChange={handleChange(faq.id)}
          TransitionProps={{ unmountOnExit: true }}
        >
          <AccordionSummary expandIcon={<ArrowIcon />}>
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}
