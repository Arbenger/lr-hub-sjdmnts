import { Provider } from 'react-redux';
import { store } from 'services/redux/store';
import AuthWrapper from 'components/wrappers/AuthWrapper';
import ThemeWrapper from 'components/wrappers/ThemeWrapper';
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
