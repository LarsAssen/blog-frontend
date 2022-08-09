import React, { useState } from 'react'
import NavLogo from './NavLogo';
import NavMobileIcon from './NavMobileIcon';
import NavItemList from './NavItemList';
import Link from 'next/link';
import { fetcher } from '../../lib/api';
import { setToken, unsetToken } from '../../lib/auth';
import { useUser } from '../../lib/authContext';

const NavBar: React.FC = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };

    const [data, setData] = useState({
        identifier: '',
        password: '',
      });
    
      const { user, loading } = useUser();
    
      const handleSubmit = async (e:any) => {
        e.preventDefault();
    
        const responseData = await fetcher(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              identifier: data.identifier,
              password: data.password,
            }),
          }
        );
        setToken(responseData);
      };
    
      const logout = () => {
        unsetToken();
      };
    
      const handleChange = (e:any) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };

    return (
        <nav className="sticky top-0 z-50 flex items-center flex-wrap bg-main-color p-3">
            <NavLogo />
            <NavMobileIcon handleClick={handleClick} />
            <div className={`${active ? '' : 'hidden'} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start lg:h-auto'>
                    <NavItemList />
                </div>
            </div>
            {!loading &&
            (user ? (
              <li>
                <Link href="/profile">
                  <a className="md:p-2 py-2 block hover:text-purple-400">
                    Profile
                  </a>
                </Link>
              </li>
            ) : (
              ''
            ))}
          {!loading &&
            (user ? (
              <li>
                <a
                  className="md:p-2 py-2 block hover:text-purple-400"
                  onClick={logout}
                  style={{ cursor: 'pointer' }}
                >
                  Logout
                </a>
              </li>
            ) : (
              ''
            ))}
          {!loading && !user ? (
            <>
              <li>
                <form onSubmit={handleSubmit} className="form-inline">
                  <input
                    type="text"
                    name="identifier"
                    onChange={handleChange}
                    placeholder="Username"
                    className="md:p-2 form-input py-2 rounded mx-2"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Password"
                    className="md:p-2 form-input py-2 rounded mx-2"
                    required
                  />

                  <button
                    className="md:p-2 rounded py-2 text-black bg-purple-200 p-2"
                    type="submit"
                  >
                    Login
                  </button>
                </form>
              </li>
              <li>
                <Link href="/register">
                  <a className="md:p-2 block py-2 hover:text-purple-400 text-black">
                    Register
                  </a>
                </Link>
              </li>
            </>
          ) : (
            ''
          )}
        </nav>
    )
}

export default NavBar
