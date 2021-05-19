import { Typography } from "@material-ui/core";
import { ContentContainer, Title } from "../styled";

export default function Content() {
  return (
    <ContentContainer>
      <Title variant="h4">Our Mission</Title>
      <Typography>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quia
        dolorem accusamus ad architecto. Magnam rerum molestiae atque velit nam
        natus repellendus omnis sunt eaque pariatur obcaecati, animi, veritatis
        iure?
      </Typography>
    </ContentContainer>
  );
}
