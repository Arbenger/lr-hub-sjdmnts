import { useEffect } from "react";
import { Container } from "./styled";

interface Props {
  elementId: string;
  isOpen: boolean;
  onClick?: any;
}

export default function Backdrop({ isOpen, elementId }: Props) {
  useEffect(() => {
    const element = document.getElementById(elementId) as HTMLDivElement;
    if (!element) return;
    const preventScroll = (event) => event.preventDefault();
    element.addEventListener("touchmove", preventScroll);
    element.addEventListener("wheel", preventScroll);
    return () => {
      element.removeEventListener("touchmove", preventScroll);
      element.removeEventListener("wheel", preventScroll);
    };
  }, [isOpen]);

  return <Container></Container>;
}
