import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import AuthProvider from '@/components/AuthProvider/AuthProvider';
import ToastProvider from '@/components/ToastProvider/toast.provider';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid2';
import theme_dark from '@/mui_theme/theme_dark';
import Navbar from '@/components/layout_home/navbar/Navbar';
import Footer from '@/components/layout_home/footer/Footer';

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

export const metadata: Metadata = {
  title: 'Do mental arithmetic',
  description: 'Mental arithmetic skill',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme_dark}>
        <CssBaseline />
        <html lang='en'>
          <body
            className={`${geistSans.variable} ${geistMono.variable}`}
            suppressHydrationWarning={true}
          >
            <ToastProvider>
              <Grid
                container
                direction='column'
                display='flex'
                justifyContent='flex-start'
                alignItems='center'
                margin={`auto`}
                minWidth={320}
                maxWidth={1024}
                pr={`2rem`}
                pl={`2rem`}
                pt={`4rem`}
              >
                <Navbar />
                {children}
                <Footer />
              </Grid>
            </ToastProvider>
          </body>
        </html>
      </ThemeProvider>
    </AuthProvider>
  );
}
