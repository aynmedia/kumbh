/** @format */

import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: '6-Day Sampoorna Samkalpa Siddhi Maha Yagna',
  description: 'Kumbh 2025 is a spiritual journey to connect with the divine.',
  keywords:
    'Kumbh 2025, Kumbh, Kumbh Sadan, Kumbh Sadan Sadan, Kumbh Sadan Sadan Sadan',
  author: 'Kumbh Sadan',
  url: 'https://kumbh.srividyas.com/',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    site_name: '6-Day Sampoorna Samkalpa Siddhi Maha Yagna - Kumbh 2025',
    url: 'https://kumbh.srividyas.com/',
    title: '6-Day Sampoorna Samkalpa Siddhi Maha Yagna',
    description:
      'Kumbh 2025 is a spiritual journey to connect with the divine.',
    images: [
      {
        url: 'https://kumbh.srividyas.com/_next/static/media/footer.5368ac17.jpg',
        width: 1200,
        height: 630,
        alt: 'Kumbh 2025',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        {children}
      </body>
    </html>
  );
}
