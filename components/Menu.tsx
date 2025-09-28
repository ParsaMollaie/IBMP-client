'use client';

import React from 'react';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
} from '@/components/ui/menubar';
import { ScrollArea } from '@/components/ui/scroll-area';

type MenuItem = {
  title: string;
  children?: { title: string; items: string[] }[];
};

interface Props {
  menuData: MenuItem[];
}

const Menu: React.FC<Props> = ({ menuData }) => {
  return (
    <Menubar className="hidden lg:flex justify-center gap-11 bg-secondary-600 rounded-none py-5">
      {menuData.map((menu) => (
        <MenubarMenu key={menu.title}>
          <MenubarTrigger className=" text-white cursor-pointer font-medium hover:text-primary-600 hover:underline">
            {menu.title}
          </MenubarTrigger>

          {menu.children && menu.children.length > 0 && (
            <MenubarContent
              className="w-screen max-w-none border border-transparent shadow-sm "
              align="start"
            >
              <ScrollArea className="max-h-[500px] overflow-y-auto">
                <div
                  className="flex flex-wrap items-start gap-x-10 gap-y-8 px-18 py-6"
                  dir="rtl"
                >
                  {menu.children.map((col, index) => (
                    <div
                      key={col.title}
                      className={`
                        min-w-[180px] px-10 mt-6 
                        ${index !== 0 ? 'border-r border-stroke-2' : ''}
                      `}
                    >
                      <div className="flex items-center gap-2 w-full mb-3">
                        <span className="w-[3px] h-7 bg-primary-600 rounded" />
                        <h3 className=" text-[#171717] font-bold leading-6">
                          {col.title}
                        </h3>
                      </div>
                      <ul className="flex flex-col items-start justify-center gap-3 text-sm text-text-3 font-normal">
                        {col.items.map((item) => (
                          <li
                            key={item}
                            className="cursor-pointer leading-6 hover:text-primary-600"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </MenubarContent>
          )}
        </MenubarMenu>
      ))}
    </Menubar>
  );
};

export default Menu;
