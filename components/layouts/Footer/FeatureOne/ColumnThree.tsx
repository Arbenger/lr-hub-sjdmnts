import { Typography } from "@material-ui/core";
import { ColumnThreeContainer } from "./styled";

export default function ColumnThree() {
  return (
    <ColumnThreeContainer>
      <Typography>RESOURCES</Typography>
      <ul>
        <li>About</li>
        <li>Usage Guide</li>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>References</li>
      </ul>
    </ColumnThreeContainer>
  );
}
