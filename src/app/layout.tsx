import "./globals.css";
import Providers from "./providers";
import { Inter, Poppins } from "next/font/google";
import SideBar from "./components/sideBar";

export const metadata = {
  title: "App Manager",
  description: "Apps and consoles Manager",
};
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <Providers>
          <SideBar />
          <div className="bg-[#F5F5F5] w-[100%]">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
