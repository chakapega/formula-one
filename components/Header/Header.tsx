'use client';

import { Navbar } from 'flowbite-react';

export const Header = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href='/'>
        <span className='self-center whitespace-nowrap text-xl font-semibold text-slate-600'>Formula One</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active href='/'>
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link active href='/statistics'>
          <p>Statistics</p>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
