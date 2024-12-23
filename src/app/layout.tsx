"use client";
import Navbar from "@/app/ui/nav-bar";
import { useState } from "react";
// app/layout.jsx
import { UserProvider } from "@auth0/nextjs-auth0/client";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          {/* ms:px-0 */}
          <Navbar />
          {children}
          <h3>Footer</h3>
        </body>
      </UserProvider>
    </html>
  );
}
