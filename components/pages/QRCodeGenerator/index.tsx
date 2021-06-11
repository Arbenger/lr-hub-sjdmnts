import {
   Container,
   ContentContainer,
   ItemContainer,
   ItemCaption,
   PrintButton,
} from './styled';
import { Grid, Typography } from '@material-ui/core';
import { BiPrinter as PrintIcon } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'redux/hooks';
import { selectQRCodeGenerator } from 'redux/selectors';
import QRCode from 'qrcode.react';
import Image from 'next/image';
import _ from 'lodash';

interface Item {
   copyId: string;
   bookId: string;
   bookTitle: string;
}

export default function QRCodeGenerator() {
   const state = useAppSelector(selectQRCodeGenerator);
   const [items, setItems] = useState<Item[][]>([]);

   const handlePrint = () => {
      window && window.print();
   };

   useEffect(() => {
      const items = state.copiesIds.map((copyId) => ({
         copyId,
         bookId: state.bookId,
         bookTitle: state.bookTitle,
      }));
      const chunks = _.chunk(items, 12);
      setItems(chunks);
   }, [state]);

   return (
      <Container>
         <PrintButton color="primary" aria-label="print" onClick={handlePrint}>
            <PrintIcon />
         </PrintButton>

         {items.map((item, index) => (
            <ContentContainer key={`item-${index}`}>
               <Grid container spacing={2}>
                  {item.map((subitem, subindex) => (
                     <Grid item key={`subitem-${subindex}`} xs={4}>
                        <ItemContainer>
                           <QRCode
                              value={JSON.stringify(subitem)}
                              size={165}
                              renderAs="svg"
                           />
                           <ItemCaption>
                              <Image
                                 src="/images/logo.png"
                                 width={25}
                                 height={25}
                                 unoptimized
                              />
                              <Typography>{subitem.copyId}</Typography>
                              <Image
                                 src="/images/sjdmnts-logo.png"
                                 width={25}
                                 height={25}
                                 unoptimized
                              />
                           </ItemCaption>
                        </ItemContainer>
                     </Grid>
                  ))}
               </Grid>
            </ContentContainer>
         ))}
      </Container>
   );
}
