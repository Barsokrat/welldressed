import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yana Boro - Custom Tailoring Abu Dhabi | Пошив на заказ Абу-Даби",
  description: "Professional custom tailoring and bespoke women's clothing in Abu Dhabi. 10+ years experience. Dresses, skirts, trousers, blouses. | Профессиональный пошив женской одежды на заказ в Абу-Даби.",
  keywords: "custom tailoring Abu Dhabi, bespoke clothing UAE, seamstress Abu Dhabi, custom dresses UAE, пошив одежды Абу-Даби, швея ОАЭ, платья на заказ",
  authors: [{ name: "Yana Boro" }],
  openGraph: {
    title: "Yana Boro - Custom Tailoring Abu Dhabi",
    description: "Professional bespoke women's clothing. 10+ years of excellence in Abu Dhabi, UAE.",
    type: "website",
    locale: "en_US",
    siteName: "WellDressed.ae",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yana Boro - Custom Tailoring Abu Dhabi",
    description: "Professional bespoke women's clothing. 10+ years of excellence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
