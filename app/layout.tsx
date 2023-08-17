import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import classNames from "classnames";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-grain">
      <body
        className={classNames(
          inter.className,
          "bg-zinc-600/90 text-amber-50 h-full min-h-screen"
        )}
      >
        <main className="py-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="p-3 border border-zinc-700 rounded-lg">
            Major
          </Link>
          <Link
            href="/minor"
            className="ml-3 p-3 border border-zinc-700 rounded-lg"
          >
            Minor
          </Link>
          <section className="pt-5">{children}</section>
        </main>
      </body>
    </html>
  );
}
