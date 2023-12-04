import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Container, Theme, ThemePanel } from '@radix-ui/themes';
import Navbar from './Navbar'
// import AuthProvider from './auth/Provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {/* <AuthProvider> */}
        <Theme accentColor="iris" radius="full">
          <Navbar />
          <main className='p-5'>
            <Container>
              {children}
            </Container>
          </main>
          {/* <ThemePanel /> */}
        </Theme>
        {/* </AuthProvider> */}
        </body>
    </html>
  )
}
