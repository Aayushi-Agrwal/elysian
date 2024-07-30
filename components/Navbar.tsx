import { bebasneue } from "@/app/ui/fonts";
import React from "react";
import Image from "next/image";
import Search from "./form/Search";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BEAUTY_CATEGORIES,
  HOME_CATEGORIES,
  KIDS_CATEGORIES,
  MEN_CATEGORIES,
  WOMEN_CATEGORIES,
} from "@/constants";
import CommandSearch from "./CommandSearch";
import { Suspense } from "react";

const createMenuItems = (categories: ICategoryItems) => {
  return (Object.keys(categories) as (keyof ICategoryItems)[]).map(
    (category) => (
      <MenubarSub key={category}>
        <MenubarSubTrigger className="navbar-item">
          {category}
        </MenubarSubTrigger>
        <MenubarSubContent>
          {categories[category].map((item) => (
            <MenubarItem className="navbar-item" key={item}>
              {item}
            </MenubarItem>
          ))}
        </MenubarSubContent>
      </MenubarSub>
    )
  );
};

const MenuItem = () => {
  return (
    <Menubar className="bg-[#E3DED3] border-none">
      <MenubarMenu>
        <MenubarTrigger className="navbar-name">Men</MenubarTrigger>
        <MenubarContent>{createMenuItems(MEN_CATEGORIES)}</MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="navbar-name">Women</MenubarTrigger>
        <MenubarContent>{createMenuItems(WOMEN_CATEGORIES)}</MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="navbar-name">Kids</MenubarTrigger>
        <MenubarContent>{createMenuItems(KIDS_CATEGORIES)}</MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="navbar-name">Decor</MenubarTrigger>
        <MenubarContent>{createMenuItems(HOME_CATEGORIES)}</MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="navbar-name">Beauty</MenubarTrigger>
        <MenubarContent>{createMenuItems(BEAUTY_CATEGORIES)}</MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

const Icons = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="flex items-center">
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
export const Navbar = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <nav className="flex flex-col justify-around lg:h-16 h-28 py-2 bg-[#E3DED3] sm:px-8 px-2">
      <div className="flex items-center justify-between">
        <div
          className={`${bebasneue.className} sm:text-2xl sm:block tracking-wide hidden`}
        >
          elysian
        </div>
        {/* <CommandSearch /> */}
        <Search placeholder="Search invoices..." />
        {/* <Suspense
          key={query + currentPage}
          fallback={<InvoicesTableSkeleton />}
        >
          <Table query={query} currentPage={currentPage} />
        </Suspense> */}
        <div className="items-center lg:gap-6 gap-2 lg:flex hidden">
          <MenuItem />
        </div>
        <div className="flex items-center sm:gap-6 gap-4">
          <Icons name="Profile">
            <Image
              src="/icons/profile.svg"
              alt="profile"
              height={20}
              width={20}
            />
          </Icons>
          <Icons name="Wishlist">
            <Image
              src="/icons/heart.svg"
              alt="wishlist"
              height={20}
              width={20}
            />
          </Icons>
          <Icons name="Cart">
            <div className="cart-icon">
              <Image
                src="/icons/cart.svg"
                alt="shopping-cart"
                height={26}
                width={26}
              />
              <div className="cart-icon-number">1</div>
            </div>
          </Icons>
        </div>
      </div>
      <div className="lg:hidden lg:w-1/2 w-full flex items-center justify-around">
        <MenuItem />
      </div>
    </nav>
  );
};

export default Navbar;
