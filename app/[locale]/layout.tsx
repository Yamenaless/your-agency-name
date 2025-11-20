import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { LenisProvider } from "@/components/lenis-provider";
import { cn } from "@/lib/utils";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: RootLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "ar") {
    return {
      title: "DigitalAgency | وكالة التسويق الرقمي",
      description: "DigitalAgency - وكالة تسويق رقمي رائدة تقدم حلول شاملة للتسويق الرقمي",
    };
  }

  return {
    title: "DigitalAgency | Digital Marketing Agency",
    description: "DigitalAgency - Leading digital marketing agency offering comprehensive solutions to help businesses grow and thrive in the digital world",
  };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className={cn("antialiased", montserrat.variable, locale === "ar" ? "font-arabic" : "font-montserrat")}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <LenisProvider>
              <CustomCursor />
              {children}
            </LenisProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

