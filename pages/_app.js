import '../styles/global.css';
import { Bitter } from '@next/font/google';

const mainFont = Bitter();

export default function App({ Component, pageProps }) {
  return <main className={mainFont.className}>
    <Component {...pageProps} />;
    </main>
}