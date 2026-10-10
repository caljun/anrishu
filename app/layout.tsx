import type { Metadata } from 'next';
import { site } from '@/lib/site';
import './globals.css';
export const metadata: Metadata = {
  ...(site.url ? {metadataBase: new URL(site.url)} : {}),
  title: `${site.name} | 犬の更生・リハビリ施設`, description: site.description,
  openGraph: {title: `${site.name} | 犬と人に、もう一度安心を。`,description:site.description,locale:'ja_JP',type:'website'},
  robots: {index: !!site.url, follow: !!site.url},
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="ja"><body>{children}</body></html>;}
