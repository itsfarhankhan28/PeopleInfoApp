import React from 'react'
import Navbar from '../components/Navbar'

export default function UserLayout({children}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
