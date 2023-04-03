import "./globals.css";

export const metadata = {
  title: "App Manager",
  description: "Apps and consoles Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
