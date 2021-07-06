import type { AppProps } from 'next/app';
import { Provider } from 'mobx-react';
import RootStore from '../stores';

const root = new RootStore();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider {...root}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
