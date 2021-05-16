import { Container, Icon, Title } from "./styled";
import { RiBookOpenLine as BookIcon } from "react-icons/ri";
import { useEffect, useState } from "react";

export default function Brand() {
  const [maxHeight, setMaxHeight] = useState<number>();

  useEffect(() => {
    const handleWindowResize = () => {
      const navbar = document.getElementById("navbar") as HTMLDivElement;
      navbar.clientHeight && setMaxHeight(navbar.clientHeight);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Container maxHeight={maxHeight}>
      <Icon>
        <BookIcon />
      </Icon>
      <Title className="fade-on-close">LR Hub</Title>
    </Container>
  );
}
