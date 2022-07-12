import { Outlet, useLocation } from 'react-router-dom';
import { Footer, Header } from 'src/components';

function getClassName(location: string):string {
  switch (location) {
    case '/':
      return 'page page--gray page--main';
    case '/login':
      return 'page page--gray page--login';
  }

  return 'page';
}

function LayoutPage() {
  const location = useLocation();

  return (
    <div className={getClassName(location.pathname)}>
      <Header />
      <Outlet />
      {location.pathname === '/favorites' && <Footer/>}
    </div>
  );
}

export default LayoutPage;
