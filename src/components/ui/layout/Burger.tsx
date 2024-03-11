"use client";

import { useOnClickOutside } from "@/hooks/use-on-click-outside";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useRef } from "react";

interface INav {
  path: string;
  title: string;
}

interface IProps {
  navlimks: INav[];
  isShow: boolean;
  closeModal: Dispatch<SetStateAction<boolean>>;
}
const Burger = ({ navlimks, isShow, closeModal }: IProps) => {
  const params = usePathname();
  const burgerRef = useRef<HTMLElement | null>(null);
  useOnClickOutside(burgerRef, () => closeModal(false));
  return (
    isShow && (
      <div className='ovarlay__wrapper   inset-0   fixed z-50  flex justify-end  overflow-hidden'>
        <nav ref={burgerRef} className='max-w-[500px] w-full bg-white    '>
          <ul className='p-[20px] grid  gap-y-[25px]'>
            <li className='flex justify-between'>
              <div className='header__logo'>
                <Image
                  src='/assets/images/gitpod_logo.jpg'
                  alt='gitpod'
                  title='Gitpod'
                  width={131}
                  height={40}
                />
              </div>

              <Icon
                onClick={() => closeModal(false)}
                className='cursor-pointer'
                icon='carbon:close-outline'
                width={24}
                height={24}
                color='black'
              />
            </li>
            {navlimks?.map((nav, i) => (
              <li
                key={i}
                className={`          
              hover:text-gray-800
               ${params === nav.path ? "text-gray-800" : "text-gray-500"}
               `}>
                <Link className=' text-[1.6rem] ' href={nav.path} passHref scroll={false}>
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  );
};

export default Burger;
