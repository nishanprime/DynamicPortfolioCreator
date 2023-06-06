import { FeatureFlagContextProvider } from '../FeaftureFlags/featureFlag.context';
import '../styles/globals.css';
import { UserContextProvider } from '../userContext';
function MyApp({ Component, pageProps }) {
  return (
   <FeatureFlagContextProvider>
     <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
   </FeatureFlagContextProvider>
  );
}

export default MyApp;
