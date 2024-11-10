import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="./imgs/icone.png" />
        <title>Oficina</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
