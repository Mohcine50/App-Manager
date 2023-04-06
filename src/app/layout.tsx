import "./globals.css";
import Providers from "./providers";
import { Inter } from "next/font/google";
import SideBar from "./components/sideBar";
import Header from "./components/header";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata = {
  title: "Apps Manager | Dashboard",
  description: "Apps and consoles Manager",
};
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <html lang="en">
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <Providers>
          <SideBar session={session} />
          <div className="bg-[#F5F5F5] w-[100%] max-h-screen overflow-scroll">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
