import { AuthProvider } from 'firebase/AuthProvider';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import ThemeSetter from 'components/layouts/ThemeSetter';
import 'styles/index.scss';

function MyApp({ Component, pageProps }) {
   return (
      <AuthProvider>
         <Provider store={store}>
            <ThemeSetter>
               <Component {...pageProps} />
            </ThemeSetter>
         </Provider>
      </AuthProvider>
   );
}

export default MyApp;
