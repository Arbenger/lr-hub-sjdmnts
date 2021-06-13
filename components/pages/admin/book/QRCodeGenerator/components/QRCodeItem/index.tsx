import { Container, Caption } from './styled';
import { Typography } from '@material-ui/core';
import QRCode from 'qrcode.react';

interface Props {
   copyId: string;
   bookId: string;
   bookTitle: string;
}

export default function QRCodeItem(props: Props) {
   return (
      <Container>
         <QRCode value={JSON.stringify(props)} size={165} renderAs="svg" />
         <Caption>
            <img src="/images/logo.png" width={25} height={25} />
            <Typography>{props.copyId}</Typography>
            <img src="/images/sjdmnts-logo.png" width={25} height={25} />
         </Caption>
      </Container>
   );
}
