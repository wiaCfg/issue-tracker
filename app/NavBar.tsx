import Link from 'next/link';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';

const NavBar = () => {
  const links = [
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'issues',
      href: '/issues',
    },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map(link => (
          <Link href={link.href} className="text-zinc-500 hover:text-zinc-800 transotion-colors">
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
