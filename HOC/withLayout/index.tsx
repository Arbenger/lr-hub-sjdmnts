import { ComponentType, Fragment } from "react";
import { useTheme } from "@material-ui/core";

import { LayoutContainer } from "./styled";
import { useAppSelector } from "redux/hooks";
import { selectLayout, selectPage } from "redux/selectors";

import Head from "next/head";
import Footer from "components/layouts/Footer";
import Navbar from "components/layouts/Navbar";
import Drawer from "components/layouts/Drawer";

export default function withLayout<T>(WrappedComponent: ComponentType<T>) {
  const WithLayout = (props: T) => {
    const { appPalette } = useTheme();
    const { drawer } = useAppSelector(selectLayout);
    const page = useAppSelector(selectPage);

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
          <title>LR Hub | {page.title}</title>
        </Head>

        <div id="root-layout">
          <Navbar />
          <Drawer />
          <LayoutContainer data-is-drawer-open={drawer.isOpen}>
            <WrappedComponent {...props} />
            <Footer />
          </LayoutContainer>
        </div>
      </Fragment>
    );
  };
  return WithLayout;
}
