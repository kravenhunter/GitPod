"use client";

import { Burger } from "@/components";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navlinks = [
  {
    path: "/",
    title: "Features",
  },
  {
    path: "#",
    title: "Pricing",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "#",
    title: "Docs",
  },
  {
    path: "#",
    title: "Changelog",
  },
  {
    path: "#",
    title: "We're hiring",
  },
  {
    path: "/zod-form",
    title: "Zod Form Validation",
  },
  {
    path: "/auth-user",
    title: "Authorized Page",
  },
];

const Header = () => {
  const params = usePathname();
  const [modal, setModal] = useState(false);

  return (
    <header className='header'>
      <div className='header__logo'>
        <Image
          src='/assets/images/gitpod_logo.jpg'
          alt='gitpod'
          title='Gitpod'
          width={131}
          height={40}
        />
      </div>
      <div className='header__burger'>
        <Icon
          onClick={() => setModal(!modal)}
          className='cursor-pointer'
          icon='iconamoon:menu-burger-horizontal-fill'
          width={24}
          height={24}
          color='black'
        />
        <Burger navlimks={navlinks} isShow={modal} closeModal={setModal} />
      </div>
      <nav className='header__nav'>
        <ul className='header__nav__list flex gap-x-[3.2rem] '>
          {navlinks?.map((link, index) => (
            <li
              key={index}
              className={`          
              hover:text-gray-800
               ${params === link.path ? "text-gray-800" : "text-gray-500"}
               `}>
              <Link href={link.path} passHref scroll={false}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className='header__login bg-gray-900 w-[80px] h-[32px]  grid rounded-3xl '>
        <Link
          className='text-white grid place-content-center text-[14px]'
          href='/log-in'
          passHref
          scroll={false}>
          Login
        </Link>
      </div>
    </header>
  );
};

export default Header;
