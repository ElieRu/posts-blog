"use client";
import Navbar from "@/app/ui/nav-bar";
import { useState } from "react";
// app/layout.jsx
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";
import { Footer } from "./ui/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Navbar />
          <div style={{paddingTop: '80px'}}>
            {children}
          </div>
          <Footer/>
        </body>
      </UserProvider>
    </html>
  );
}
