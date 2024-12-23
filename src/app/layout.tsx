"use client";
import Navbar from "@/app/ui/nav-bar";
import { useState } from "react";
// app/layout.jsx
import { UserProvider } from "@auth0/nextjs-auth0/client";

// export default function Layout({ children }: { children: React.ReactDOM }) {
//   return (
//     <html>
//       <body>
//         <div>
//           <h1>Header</h1>
//           <Navbar/>
//           <div>
//             {children}
//           </div>
//           <h1>Footer</h1>
//         </div>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script src="https://unpkg.com/alpinejs"></script>

      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/tippy.js/6.3.7/tippy.min.css"
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <script
        src="https://unpkg.com/@ryangjchandler/alpine-tooltip@1.2.0/dist/cdn.min.js"
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script> */}
      <UserProvider>
        <body>
          <Navbar />
          {children}
          <h3>Footer</h3>
        </body>
      </UserProvider>
    </html>
  );
}
