import { Typography } from "@material-ui/core";
import { ColumnTwoContainer } from "./styled";

export default function ColumnTwo() {
  return (
    <ColumnTwoContainer>
      <Typography>SITEMAP</Typography>
      <ul>
        <li>Home</li>
        <li>Dashboard</li>
        <li>Library</li>
        <li>Account</li>
      </ul>
    </ColumnTwoContainer>
  );
}
