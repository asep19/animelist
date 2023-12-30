import '@/styles/global.css'
import { Inter } from 'next/font/google'
import { metadata as mdata } from "@/data/metadata"


const inter = Inter({subsets: ['latin']})

export const metadata = mdata

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        { children }
      </body>
    </html>
  )
}
