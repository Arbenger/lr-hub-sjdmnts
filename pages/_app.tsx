import { Provider } from "react-redux";
import { store } from "redux/store";
import ThemeSetter from "components/layouts/ThemeSetter";
import "styles/index.scss";

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
