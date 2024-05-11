
import React from "react"
import { StreamVideoProvider } from "../providers/StreamClientProvider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voom ",
  description: "Video Call App",
  icons: {
    icon: '/icons/logo.svg'
  }
};


const Layout = ({children } : {children: React.ReactNode}) => {
  return (
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>   
    </main>
  )
}

export default Layout;