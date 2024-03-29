import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
   render() {
      return (
         <Html lang="en">
            <Head>
               <meta
                  name="description"
                  content="San Jose del Monte National Trade School Learning Resources Management System. Developed by 12-Aquamarine."
               />
               <link
                  rel="shortcut icon"
                  href="/images/logo.png"
                  type="image/png"
               />
            </Head>

            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

MyDocument.getInitialProps = async (ctx) => {
   const sheets = new ServerStyleSheets();
   const originalRenderPage = ctx.renderPage;

   ctx.renderPage = () =>
      originalRenderPage({
         enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

   const initialProps = await Document.getInitialProps(ctx);

   return {
      ...initialProps,
      styles: [
         ...React.Children.toArray(initialProps.styles),
         sheets.getStyleElement(),
      ],
   };
};
