import {
  Container,
  ContentContainer,
  ItemContainer,
  ItemCaption,
  PrintButton,
} from "./styled";
import { Grid, Typography } from "@material-ui/core";
import { BiPrinter as PrintIcon } from "react-icons/bi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import Image from "next/image";
import _ from "lodash";

export default function QRCodeGenerator() {
  const [items, setItems] = useState<string[][]>([]);
  const router = useRouter();

  const handlePrint = () => {
    window && window.print();
  };

  useEffect(() => {
    const queriedItems = router.query["items[]"] as string[];
    const chunks = _.chunk(queriedItems, 12);
    setItems(chunks);
  }, [router.query]);

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
                  <QRCode value={subitem} size={165} renderAs="svg" />
                  <ItemCaption>
                    <Image
                      src="/images/logo.png"
                      width={25}
                      height={25}
                      unoptimized
                    />
                    <Typography>{subitem}</Typography>
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
