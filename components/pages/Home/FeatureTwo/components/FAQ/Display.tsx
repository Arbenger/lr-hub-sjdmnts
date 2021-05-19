import { DisplayContainer, IconContainer } from "../styled";
import { FaQuestion as QuestionIcon } from "react-icons/fa";

export default function Display() {
  return (
    <DisplayContainer>
      <IconContainer>
        <QuestionIcon />
      </IconContainer>
    </DisplayContainer>
  );
}
