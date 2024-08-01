import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Website',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <h1>Welcome to My Website</h1> */}
        {children}
        {/* <footer>
          <h1>This is Footer of page</h1>
        </footer> */}
        </body>
    </html>
  )
}
