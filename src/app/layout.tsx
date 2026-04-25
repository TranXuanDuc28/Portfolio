import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Preloader } from "@/components/ui/Preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tran Xuan Duc | Fullstack Developer",
  description: "Portfolio of Tran Xuan Duc, a passionate Fullstack Developer specializing in React, Node.js, and modern web technologies.",
  keywords: ["Tran Xuan Duc", "Fullstack Developer", "Portfolio", "React", "Node.js", "Next.js"],
  authors: [{ name: "Tran Xuan Duc" }],
  openGraph: {
    title: "Tran Xuan Duc | Fullstack Developer",
    description: "Portfolio of Tran Xuan Duc, a passionate Fullstack Developer specializing in React, Node.js, and modern web technologies.",
    url: "https://your-portfolio-url.com",
    siteName: "Tran Xuan Duc Portfolio",
    images: [
      {
        url: "https://your-portfolio-url.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tran Xuan Duc | Fullstack Developer",
    description: "Portfolio of Tran Xuan Duc, a passionate Fullstack Developer specializing in React, Node.js, and modern web technologies.",
    images: ["https://your-portfolio-url.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-background text-foreground min-h-screen selection:bg-primary/30`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
          <Preloader />
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Tran Xuan Duc",
                "jobTitle": "Fullstack Developer",
                "url": "https://your-portfolio-url.com",
                "sameAs": [
                  "https://github.com/TranXuanDuc28",
                ],
                "knowsAbout": [
                  "React", "Node.js", "Next.js", "MySQL", "Fullstack Development"
                ]
              })
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
