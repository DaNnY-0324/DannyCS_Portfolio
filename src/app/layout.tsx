import type { Metadata } from "next";
import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollProgressBar from "./components/ScrollProgressBar";
import BackToTop from "./components/BackToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Danny Andrew Nguyen | Portfolio",
  description: "Personal portfolio website of Danny Andrew Nguyen, showcasing projects, skills, and experience",
  keywords: ["Danny Andrew Nguyen", "Portfolio", "Web Developer", "Computer Science", "Georgia State University"],
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://danny-0324.github.io/DannyCS_Portfolio' : 'http://localhost:3000'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${robotoMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <ScrollProgressBar />
          <BackToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
