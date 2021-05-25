import { ComponentType, Fragment } from "react";
import { useTheme } from "@material-ui/core";

import { LayoutContainer } from "./styled";
import { useAppSelector } from "redux/hooks";
import { selectLayout } from "redux/selectors";

import Head from "next/head";
import Footer from "components/layouts/Footer";
import Navbar from "components/layouts/Navbar";
import Drawer from "components/layouts/Drawer";

interface Config {
  pageName: string;
  title: string;
}

export default function withLayout<T>(
  WrappedComponent: ComponentType<T>,
  { pageName, title }: Config
) {
  const WithLayout = (props: T) => {
    const { appPalette } = useTheme();
    const {
      drawer: { isOpen },
    } = useAppSelector(selectLayout);

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
          <Navbar pageName={pageName} title={title} />
          <Drawer pageName={pageName} />
          <LayoutContainer data-is-drawer-open={isOpen}>
            <WrappedComponent {...props} />
            <Footer />
          </LayoutContainer>
        </div>
      </Fragment>
    );
  };
  return WithLayout;
}