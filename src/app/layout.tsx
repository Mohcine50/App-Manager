import "./globals.css";
import Providers from "./providers";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "App Manager",
  description: "Apps and consoles Manager",
};
const poppins = Poppins({
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
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
