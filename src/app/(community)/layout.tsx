import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '../../styles/global.scss';

import { Footer, Header } from '@/components';

export default function CommLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* <ReduxProvider> */}
        <div id="app">
          <div className="container">
            <Header />
            <div className="layout__contain">
              <main className="layout">{children}</main>
            </div>
            <Footer />
          </div>
        </div>
        {/* </ReduxProvider> */}
      </body>
    </html>
  );
}
