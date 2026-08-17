import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUMINA | لوحات فنية مضيئة من البورسلين الفاخر — قطر",
  description:
    "LUMINA — أول علامة متخصصة في قطر تقدم لوحات فنية مضيئة مصنوعة من البورسلين الفاخر والمُرصّعة بالكريستال والألماس مع إضاءة LED ذكية. فن مُضاء يُحوّل جدرانك إلى تجربة فاخرة.",
  keywords: [
    "LUMINA",
    "لوحات فنية",
    "لوحات مضيئة",
    "بورسلين فاخر",
    "إضاءة LED",
    "كريستال",
    "ألماس",
    "ديكور قطر",
    "فن إسلامي",
    "لوحات جدارية",
  ],
  authors: [{ name: "LUMINA Majestic" }],
  icons: {
    icon: "https://luminamajestic.com/wp-content/uploads/2025/10/cropped-Logo-description_20250909_135324_0000_page-0001-32x32.jpg",
  },
  openGraph: {
    title: "LUMINA | فن مُضاء يُحوّل جدرانك إلى تجربة فاخرة",
    description:
      "لوحات فنية مضيئة مصنوعة من بورسلين فاخر، مُرصّعة بالكريستال والألماس مع إضاءة LED ذكية.",
    url: "https://luminamajestic.com",
    siteName: "LUMINA",
    type: "website",
    locale: "ar_QA",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUMINA | فن مُضاء يُحوّل جدرانك إلى تجربة فاخرة",
    description:
      "لوحات فنية مضيئة من البورسلين الفاخر مع إضاءة LED ذكية — قطر",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${ibmPlexArabic.variable} ${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
