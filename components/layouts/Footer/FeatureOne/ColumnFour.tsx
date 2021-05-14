import { Typography } from "@material-ui/core";
import {
  HiOutlineMail as MailIcon,
  HiOutlineLocationMarker as LocationIcon,
} from "react-icons/hi";
import { BiPhone as PhoneIcon } from "react-icons/bi";
import { ColumnFourContainer } from "./styled";

export default function ColumnFour() {
  return (
    <ColumnFourContainer>
      <Typography>CONTACT US</Typography>
      <ul>
        <li>
          <PhoneIcon />
          <span>+(64) 9266943578</span>
        </li>
        <li>
          <MailIcon />
          <span>lr.hub.sjdmnts@gmail.com</span>
        </li>
        <li>
          <LocationIcon />
          <span>
            Barangay Fatima V, Area E, San Jose del Monte City, Bulacan
          </span>
        </li>
      </ul>
    </ColumnFourContainer>
  );
}
