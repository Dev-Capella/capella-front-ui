import '../styles/globals.css';
import Menu from "../components/menu/menu";
import TopBanner from '@/components/top-banner/top-banner';
import TopBar from '@/components/top-bar/top-bar';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopBanner />
        <TopBar />
        <Menu />
        {children}
      </body>
    </html>
  );
}
