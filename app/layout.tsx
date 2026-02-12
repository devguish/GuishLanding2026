import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import Preloader from "./components/Preloader";

const apercu = localFont({
  src: [
    {
      path: "./fonts/apercu_regular_pro.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/apercu_regular_italic_pro.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/apercu_medium_pro.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/apercu_medium_italic_pro.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/apercu_bold_pro.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/apercu_bold_italic_pro.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-apercu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Landing page moderna y responsive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${apercu.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Preloader>
            {children}
          </Preloader>
        </ThemeProvider>
      </body>
    </html>
  );
}
