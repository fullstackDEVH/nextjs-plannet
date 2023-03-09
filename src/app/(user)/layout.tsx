import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '../../styles/global.scss';

import { Footer, Header } from '@/components';
import HeaderProfile from './profile-user/HeaderUser';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="app">
      {/* <ReduxProvider> */}
      <div className="container">
        <HeaderProfile />
        <main>{children}</main>
      </div>
      {/* </ReduxProvider> */}
    </div>
  );
}
