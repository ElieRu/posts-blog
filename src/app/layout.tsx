'use client'
import Navbar from "@/app/ui/nav-bar";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactDOM }) {
  const [name, setName] = useState('')
  return (
    <html>
      <body>
        <div>
          <h1>Header</h1>
          <Navbar/>
          <div>
            {children}
          </div>
          <h1>Footer</h1>
        </div>
      </body>
    </html>
  );
}
