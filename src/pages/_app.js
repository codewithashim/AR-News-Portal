import store from '@/reudx/store';
import '@/styles/globals.css'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  return <Provider store={store}>
  {getLayout(<Component {...pageProps} />)}
  </Provider>;
}
