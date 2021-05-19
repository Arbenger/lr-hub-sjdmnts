import { Container, ImageContainer, Title } from "./styled";
import { useEffect, useState } from "react";
import Image from "next/image";

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
      <ImageContainer>
        <Image
          src="/images/logo.png"
          alt="LR Hub Logo"
          width="100%"
          height="100%"
        />
      </ImageContainer>
      <Title className="fade-on-close">LR Hub</Title>
    </Container>
  );
}
