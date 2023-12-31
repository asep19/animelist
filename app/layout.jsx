import '@/styles/global.css'
import { Inter } from 'next/font/google'
import { metadata as mdata } from "@/data/metadata"
import Nav from '@/components/nav'
import { ThemeProvider } from '@/components/theme-provider'


const inter = Inter({subsets: ['latin']})

export const metadata = mdata

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          { children }
        </ThemeProvider>
      </body>
    </html>
  )
}
