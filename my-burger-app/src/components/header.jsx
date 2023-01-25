import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import logo from '../assets/logo.png';

const mockData = [
  { name: 'Home', to: '/' },
  { name: 'Order', to: '/orders' },
  { name: 'Contacts', to: '/contacts' },
  { name: 'FAQ', to: '/faq' },
];

function Header() {
  return (
    <>
      <header id='app-name-container'>
        <div id='logo-wrapper'>
          <span id='logo'>
            <img src={logo} alt='logo' />
          </span>
        </div>
        <div id='title-wraper'>
          <span className='app-name'>Extreme Retro Burgers app</span>
        </div>
        <div id='header-item-wrapper'>
          {mockData.map((link, index) => (
            <span key={`${index}_${link.name}`}>
              <Link to={link.to} className='header-item'>
                {link.name}
              </Link>
            </span>
          ))}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Header;
