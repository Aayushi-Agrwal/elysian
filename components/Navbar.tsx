import { bebasneue } from "@/app/ui/fonts";
import React from "react";
import Image from "next/image";
import Search from "./form/Search";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-16 bg-[#E3DED3] px-8">
      <div className={`${bebasneue.className} text-2xl tracking-wide`}>
        elysian
      </div>
      <Search />
      <div className="items-center lg:gap-4 gap-2 md:flex hidden">
        <p className="navbar-item">men</p>
        <p className="navbar-item">women</p>
        <p className="navbar-item">collections</p>
        <p className="navbar-item">accessories</p>
        <div className="cart-icon">
          <Image
            src="/icons/shopping-cart.svg"
            alt="shopping-cart"
            height={24}
            width={24}
          />
          <div className="cart-icon-number">1</div>
        </div>
      </div>
      <div className="md:hidden block">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src="/icons/menu.svg"
              alt="shopping-cart"
              height={24}
              width={24}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="navbar-item-dropdown">
              men
            </DropdownMenuItem>
            <DropdownMenuItem className="navbar-item-dropdown">
              women
            </DropdownMenuItem>
            <DropdownMenuItem className="navbar-item-dropdown">
              collections
            </DropdownMenuItem>
            <DropdownMenuItem className="navbar-item-dropdown">
              accessories
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
