import { DisplayContainer, IconContainer } from "../styled";
import { BiTargetLock as TargetIcon } from "react-icons/bi";

export default function Display() {
  return (
    <DisplayContainer>
      <IconContainer>
        <TargetIcon />
      </IconContainer>
    </DisplayContainer>
  );
}
