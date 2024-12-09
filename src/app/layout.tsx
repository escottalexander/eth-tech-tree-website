import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'
import './globals.css'

const source_code_pro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro',
})

export const metadata: Metadata = {
  title: 'ETH Tech Tree',
  description:
    'Advanced Solidity challenges to test your Ethereum development skills.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${source_code_pro.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
