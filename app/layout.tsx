import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hayden Burgoyne",
  description: "Asteroid mining and ensuring artificial super-intelligence serves us folks",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
