"use client";

import React, { useEffect, useRef, useState } from "react";

import Category from "@/components/icons/Category";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { menuData } from "@/constants/menubar";
import { useDisclosure } from "@/hooks/shared/Disclosure";
import { cn } from "@/lib/utils";

const MobileMenuBar = () => {
  const { open, toggle } = useDisclosure();

  const [selectedIndex, setSelectedIndex] = useState<number>(() => {
    const firstWithChildren = menuData.findIndex((m) => m.children && m.children.length > 0);
    return firstWithChildren === -1 ? 0 : firstWithChildren;
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <div
        onClick={toggle}
        className={cn(
          "flex cursor-pointer flex-col items-center justify-center font-medium select-none",
          open ? "text-text-5" : "text-text-3"
        )}
      >
        <Category className="mb-1 size-6" />
        <span className="text-[10px] font-medium text-inherit">دسته‌بندی</span>
      </div>

      <div
        className={cn(
          "border-surface-4 fixed top-[60px] right-0 bottom-16 left-0 overflow-hidden bg-white",
          open ? "flex" : "hidden"
        )}
      >
        <aside className="overflow-y-auto border-l border-l-gray-300 bg-[#E5E5E5] text-[#3D3D3D]">
          {menuData.map((m, i) => {
            return (
              <button
                key={m.title}
                onClick={() => setSelectedIndex(i)}
                className={cn(
                  "flex h-[65px] w-full max-w-[94px] items-center justify-center border-b border-b-gray-300 px-3 text-[10px] font-medium",
                  i === selectedIndex ? "text-primary-600 bg-white" : ""
                )}
              >
                <span>{m.title}</span>
              </button>
            );
          })}
        </aside>

        <main className="border-surface-4 flex-1 overflow-y-auto border-t bg-white p-2">
          <div className="flex flex-col gap-3">
            {menuData[selectedIndex]?.children?.length ? (
              menuData[selectedIndex].children!.map((col) => (
                <div key={col.title} className="border-surface-4 border-b">
                  <Accordion type="multiple" className="">
                    <AccordionItem value={col.title}>
                      <AccordionTrigger className="px-4 py-3 text-sm text-[#171717]">
                        {col.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-3">
                        <ul className="flex flex-col gap-2 text-sm text-gray-700">
                          {col.items.map((item) => (
                            <li key={item} className="text-text-3 py-2 text-xs font-medium">
                              <button className="w-full text-right">{item}</button>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))
            ) : (
              <div className="text-sm text-gray-500">موردی برای نمایش وجود ندارد.</div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default MobileMenuBar;
