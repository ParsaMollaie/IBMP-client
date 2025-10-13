"use client";

import { DirectionProvider } from "@radix-ui/react-direction";

const Direction = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <DirectionProvider dir="rtl">{children}</DirectionProvider>;
};

export default Direction;
