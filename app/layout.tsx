

import './globals.css'
import {store} from "@/redux/store";
import React from "react";
import Providers from './Provider';



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
// store
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    
    <html lang="en">
      <body>
     <Providers>

      {children}
     </Providers>
      </body>
    </html>
    
  )
}
