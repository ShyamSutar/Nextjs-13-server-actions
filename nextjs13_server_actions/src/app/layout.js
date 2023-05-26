import './globals.css'
import { Inter } from 'next/font/google'
import Header from "./Header";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Server Actions',
  description: 'Trying out nextjs13 new feature',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
           
      <body className={inter.className}>
      <Header/>
      {children}
      </body>
    </html>
  )
}
