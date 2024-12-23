"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { user, error, isLoading } = useUser();

  const navs = [
    { name: "Home", link: "/" },
    { name: "Posts", link: "/posts" },
    { name: "Profile", link: "/profile" },
    { name: "Login", link: "/api/auth/login" },
    { name: "Logout", link: "/api/auth/logout" }
  ];

  const pathname = usePathname();

  return (
    <div className="relative z-40">
      <div className="fixed top-0 left-0 right-0 flex justify-between py-5 px-16 bg-gray-100 shadow-md">
        <span>
          <Link href={"/"}>Logo</Link>
        </span>
        <div>
          {navs.map((nav, i) => {
            const isActive = pathname.startsWith(nav.link);
            return (
              <Link
                key={i}
                href={`${nav.link}`}
                style={{ padding: "5px" }}
                className={isActive ? "text-red-500" : "text-blue-500"}
              >
                {nav.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
