import { Typography } from "@material-ui/core";
import { ColumnThreeContainer } from "./styled";

export default function ColumnThree() {
  return (
    <ColumnThreeContainer>
      <Typography>RESOURCES</Typography>
      <ul>
        <li>Usage</li>
        <li>Term of Servive</li>
        <li>Privacy Policy</li>
      </ul>
    </ColumnThreeContainer>
  );
}
