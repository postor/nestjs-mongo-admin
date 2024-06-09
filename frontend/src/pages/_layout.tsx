import { NavLink, Outlet } from 'react-router-dom';

const navs = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Admin', href: '/admin' },
];

const HeaderNav = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <ul className="flex space-x-4">
          {navs.map((nav) => (
            <li key={nav.href}>
              <NavLink
                to={nav.href}
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-gray-700 px-3 py-2 rounded-md'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md'
                }
              >
                {nav.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default () => {
  return <div>
    <HeaderNav />
    <div className='relative'>
      <Outlet />
    </div>
  </div>
}
