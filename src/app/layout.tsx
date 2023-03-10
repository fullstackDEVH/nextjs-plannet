import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* <ReduxProvider> */}
        <div id="app">
          <div className="container">
            <main>{children}</main>
          </div>
        </div>
        {/* </ReduxProvider> */}
      </body>
    </html>
  );
}
