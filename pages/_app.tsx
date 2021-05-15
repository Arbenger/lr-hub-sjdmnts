import { Provider } from "react-redux";
import { store } from "redux/store";
import ThemeSetter from "components/layouts/ThemeSetter";
import "styles/index.scss";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeSetter>
        <Component {...pageProps} />
      </ThemeSetter>
    </Provider>
  );
}

export default MyApp;
