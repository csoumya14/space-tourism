import "./globals.css";
import type { Metadata } from "next";
import StyledComponentsRegistry from "./registry";
import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import { SharedTop } from "@/components/SharedTop/SharedTop";
import { Layout } from "@/components/Layout/Layout";

const bellefair = Bellefair({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bellefair",
});

const barlow = Barlow({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const barlow_condensed = Barlow_Condensed({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

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
    <html lang="en">
      <body
        className={`${bellefair.variable} ${barlow.variable} ${barlow_condensed.variable}`}
        suppressHydrationWarning={true}
      >
        <StyledComponentsRegistry>
          <Layout>
            <header>
              <SharedTop />
            </header>
            {children}
          </Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
