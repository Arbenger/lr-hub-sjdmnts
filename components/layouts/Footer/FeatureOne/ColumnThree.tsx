import { Typography } from "@material-ui/core";
import { ColumnThreeContainer } from "./styled";
import Link from "next/link";

export default function ColumnThree() {
  const items = [
    {
      title: "Terms of Service",
      link: "/resources/terms-of-service",
    },
    {
      title: "Privacy Policy",
      link: "/resources/privacy-policy",
    },
    {
      title: "References",
      link: "/resources/references",
    },
  ];

  return (
    <ColumnThreeContainer>
      <Typography>RESOURCES</Typography>
      <ul>
        {items.map((item) => (
          <Link key={item.title} href={item.link}>
            <li>{item.title}</li>
          </Link>
        ))}
      </ul>
    </ColumnThreeContainer>
  );
}
