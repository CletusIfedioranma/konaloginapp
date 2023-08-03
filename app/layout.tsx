

import './globals.css'
import {store} from "@/redux/store";
import { Provider } from 'react-redux'
import React from "react";



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
// store
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
      <Provider store={store} >
    <html lang="en">
      <body>

      {children}
      </body>
    </html>
      </Provider>
  )
}
