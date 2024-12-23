"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Login from "../api/auth/login";
import Logout from "../api/auth/logout";

export default function Navbar() {
  const navs = [
    { name: "Home", link: "/" },
    { name: "Posts", link: "/posts" },
    { name: "Profile", link: "/profile" },
    { name: "Login", link: "/api/auth/login" },
    { name: "Logout", link: "/api/auth/logout" },
  ];

  const pathname = usePathname();

  return (
    <div className="position-fixed flex justify-between py-5 px-16 bg-slate-200">
      <span>
        <Link href={'/'}>Logo</Link>
      </span>
      <div>
        {navs.map((nav, i) => {
          const isActive = pathname.startsWith(nav.link);
          return (
            <Link
              key={i}
              href={`${nav.link}`}
              style={{padding: '5px'}}
              className={isActive ? "text-red-500" : "text-blue-500"}
            >
              {nav.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
