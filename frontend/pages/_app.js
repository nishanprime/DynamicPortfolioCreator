import '../styles/globals.css';
import { UserContextProvider } from '../userContext';
function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
