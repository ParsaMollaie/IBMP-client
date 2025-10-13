"use client";

import React from "react";

import {
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
  Menubar as ShaMenubar,
} from "@/components/ui/menubar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Container from "../../Container";

type MenuItem = {
  title: string;
  children?: { title: string; items: string[] }[];
};

interface Props {
  menuData: MenuItem[];
}

const Menubar: React.FC<Props> = ({ menuData }) => {
  return (
    <div className="bg-secondary-600 hidden py-2 lg:block">
      <Container>
        <ShaMenubar className="text-secondary-foreground bg-secondary-600 flex justify-between border-none p-0">
          {menuData.map((menu) => (
            <MenubarMenu key={menu.title}>
              <MenubarTrigger
                disableFocus
                disableStateOpen
                className="hover:text-primary cursor-pointer bg-transparent p-0 font-medium"
              >
                {menu.title}
              </MenubarTrigger>

              {menu.children && menu.children.length > 0 && (
                <MenubarContent
                  className="w-screen max-w-none border border-transparent shadow-sm"
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
                          className={`mt-6 min-w-[180px] px-10 ${index !== 0 ? "border-stroke-2 border-r" : ""} `}
                        >
                          <div className="mb-3 flex w-full items-center gap-2">
                            <span className="bg-primary-600 h-7 w-[3px] rounded" />
                            <h3 className="leading-6 font-bold text-[#171717]">{col.title}</h3>
                          </div>
                          <ul className="text-text-3 flex flex-col items-start justify-center gap-3 text-sm font-normal">
                            {col.items.map((item) => (
                              <li
                                key={item}
                                className="hover:text-primary-600 cursor-pointer leading-6"
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
        </ShaMenubar>
      </Container>
    </div>
  );
};

export default Menubar;
