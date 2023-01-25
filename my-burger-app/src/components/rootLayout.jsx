import { Outlet } from 'react-router-dom';

import MainNavigation from './header';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;