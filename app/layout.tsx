import type { Metadata } from "next";
import Header from "@/app/components/header";
import {Fredoka, Josefin_Sans} from "next/font/google";
import "@/styles/reset.css";
import "@/styles/global.css";
import styles from "@/styles/layout.module.css";
import Footer from "@/app/components/footer";
// import RecoilRootWrapper from "@/app/components/recoil-root-wrapper";

const fredoka = Fredoka({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fredoka',
})

const josefinSans = Josefin_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefinSans',
})

export const metadata: Metadata = {
  title: "The New York Times Best Seller Explorer",
  description: "Next.js로 만든 뉴욕 타임즈 베스트셀러",
  icons: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📚</text></svg>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <RecoilRootWrapper>
      <html lang="en">
        <body className={`${fredoka.variable} ${josefinSans.variable}`}>
          <div className={styles.container}>
            <Header/>
            <main className={styles.content}>
              {children}
            </main>
            <Footer/>
          </div>
        </body>
      </html>
    // </RecoilRootWrapper>
  );
}
