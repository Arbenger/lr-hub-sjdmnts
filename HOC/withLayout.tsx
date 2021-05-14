import { ComponentType, Fragment } from "react";
import { useTheme } from "@material-ui/core";

import Head from "next/head";
import Footer from "components/layouts/Footer";
import Navbar from "components/layouts/Navbar";

interface Config {
  pageName: string;
  title: string;
  withNavbar: boolean;
  withFooter: boolean;
}

export default function withLayout<T>(
  WrappedComponent: ComponentType<T>,
  { pageName, title, withNavbar, withFooter }: Config
) {
  const WithLayout = (props: T) => {
    const { appPalette } = useTheme();

    return (
      <Fragment>
        <Head>
          <meta
            name="theme-color"
            content={appPalette[appPalette.current].dark}
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <title>LR Hub | {title}</title>
        </Head>

        <div id="root-layout">
          {withNavbar && <Navbar pageName={pageName} />}
          <WrappedComponent {...props} />
          {withFooter && <Footer />}
        </div>
      </Fragment>
    );
  };
  return WithLayout;
}
