import React from 'react';
import Link from 'next/link';
import { FlexRow, NavContainer } from '../UI';
import ThemeToggle from '../ThemeToggle';
import CartDrawer from './CartDrawer';
import Image from 'next/image';
import NavLinks from './NavLinks';
import MenuDrawer from '../MenuDrawer/MenuDrawer';

const Navbar = () => {
  return (
    <NavContainer className="absolute top-0 left-0 z-40 w-full">
      <MenuDrawer />
      <Link href="/">
        <Image
          width={200}
          height={100}
          alt="Tentlify Rentals"
          draggable="false"
          src="https://firebasestorage.googleapis.com/v0/b/mern-ecommerce-f07b1.appspot.com/o/Tenlify_Logo_Thin_Small.png?alt=media&token=59587449-7b7c-439f-a434-5b4059035b11"
          className="w-32 md:w-44"
        />
      </Link>
      <FlexRow>
        <NavLinks />
        <ThemeToggle />
        <CartDrawer />
      </FlexRow>
    </NavContainer>
  );
};

export default Navbar;
