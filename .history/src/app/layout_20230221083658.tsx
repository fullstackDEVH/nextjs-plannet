import './globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import store from '@/store/store';
import { Provider } from 'react-redux';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Provider store={store}>
          <header></header>
          <main>{children}</main>
          <footer></footer>
        </Provider>
      </body>
    </html>
  );
}
