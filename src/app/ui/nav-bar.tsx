'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Login from "../api/auth/login";
import Logout from "../api/auth/logout";

export default function Navbar() {
  const navs = [
    { name: "Home", link: "/" },
    { name: "Posts", link: "/posts" },
    { name: "Profile", link: "/profile" },
    { name: "Login", link: "/login" },
    { name: "About", link: "/about" },
  ];

  const pathname = usePathname();
  
  return (
    <>
    <ul>
      {navs.map((nav, i) => {
        const isActive = pathname.startsWith(nav.link)
        // console.log(isActive);        
        return (<li key={i}>
          <Link 
            href={`${nav.link}`}
            className={isActive ? 'text-red-500' : 'text-blue-500'}>{nav.name}</Link>
        </li>)
      })}
    </ul>
    <Login/>
    <Logout/>
    </>
  );
}
