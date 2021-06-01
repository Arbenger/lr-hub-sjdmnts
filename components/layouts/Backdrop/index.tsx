import { useEffect } from "react";
import { Container } from "./styled";

interface Props {
  onClick?: () => void;
}

export default function Backdrop({ onClick }: Props) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    const backdrop = document.getElementById("backdrop");
    if (backdrop) backdrop.addEventListener("click", onClick);
    return () => {
      document.body.style.overflowY = "auto";
      backdrop.removeEventListener("click", onClick);
    };
  }, []);
  return <Container id="backdrop"></Container>;
}
