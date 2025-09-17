import WebLayout from '@/components/layout/web';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <WebLayout>{children}</WebLayout>;
}
