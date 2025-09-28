'use client';

import React, { useEffect, useState, useRef } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

type MenuItem = {
  title: string;
  children?: { title: string; items: string[] }[];
};

interface Props {
  menuData: MenuItem[];
  open: boolean;
  onClose: () => void;
}

const MobileCategoryMenu: React.FC<Props> = ({ menuData, open, onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(() => {
    const firstWithChildren = menuData.findIndex(
      (m) => m.children && m.children.length > 0
    );
    return firstWithChildren === -1 ? 0 : firstWithChildren;
  });
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    if (selectedIndex >= menuData.length) setSelectedIndex(0);
  }, [open, menuData, selectedIndex]);

  // close on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!open) return;
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-16 z-50 flex justify-center">
      <div
        ref={panelRef}
        className="w-full max-w-2xl bg-[#E5E5E5] overflow-hidden"
        style={{ maxHeight: '78vh' }}
      >
        <div
          className="flex h-[66vh] min-h-[300px] overflow-hidden border-l border-surface-4"
          dir="rtl"
        >
          {/* Parents column (right) */}
          <aside className="w-36 sm:w-44 overflow-y-auto ">
            {menuData.map((m, idx) => {
              const active = idx === selectedIndex;
              return (
                <button
                  key={m.title}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full px-5 py-6 flex items-center justify-center border-b border-surface-4 ${
                    active
                      ? 'text-primary-600 font-medium leading-5 bg-white border-l border-surface-4'
                      : 'text-[#3D3D3D]'
                  }`}
                >
                  <span className=" text-sm">{m.title}</span>
                </button>
              );
            })}
          </aside>

          {/* Children / content area (left) */}
          <main className="flex-1 overflow-y-auto p-4 border-t border-surface-4 bg-white">
            <div className="flex flex-col gap-3 ">
              {menuData[selectedIndex]?.children?.length ? (
                menuData[selectedIndex].children!.map((col) => (
                  <div key={col.title} className=" border-b border-surface-4">
                    <Accordion type="multiple" className="">
                      <AccordionItem value={col.title}>
                        <AccordionTrigger className="px-4 py-3 text-sm font-normal text-[#171717] leading-5">
                          {col.title}
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-3">
                          <ul className="flex flex-col gap-2 text-sm text-gray-700">
                            {col.items.map((item) => (
                              <li
                                key={item}
                                className="py-2 text-text-3 font-medium text-xs leading-5"
                              >
                                <button className="w-full text-right ">
                                  {item}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                ))
              ) : (
                <div className="text-sm text-gray-500">
                  موردی برای نمایش وجود ندارد.
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MobileCategoryMenu;
