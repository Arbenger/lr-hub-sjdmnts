import { Provider } from 'react-redux';
import { store } from 'services/redux/store';
import AuthWrapper from 'components/wrapper/AuthWrapper';
import ThemeWrapper from 'components/wrapper/ThemeWrapper';
import 'styles/index.scss';

function MyApp({ Component, pageProps }) {
   return (
      <Provider store={store}>
         <AuthWrapper>
            <ThemeWrapper>
               <Component {...pageProps} />
            </ThemeWrapper>
         </AuthWrapper>
      </Provider>
   );
}

export default MyApp;
