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
    { name: "Logout", link: "/api/auth/logout" },
  ];

  const pathname = usePathname();

  return (
    <>
      <div className="relative z-40 bg-gray-500">
        <div className="fixed top-0 left-0 right-0 flex justify-between items-center py-2 px-16 bg-gray-100 shadow-md">
          <span>
            <Link href={"/"} className="underline">Logo</Link>
          </span>
          <div>
            <div className="dropdown border-2 rounded-lg">
              <button className="dropbtn rounded-lg flex items-center">
                {(!isLoading && user) && <span style={{width: '40px', height: '40px', marginRight: '5px'}}>
                  <img src={user?.picture} alt="My profile" className="rounded-md" />
                </span>}
                {isLoading ? 'Loading...' : user ? user.name : 'Not Connected'}
              </button>
              <div className="dropdown-content">
                {user && <Link href={`/posts`} style={{ padding: "5px" }}>
                  My posts
                </Link>}
                {!user && <Link href={`/api/auth/login`} style={{ padding: "5px" }}>
                  Login
                </Link>}
                {user && <Link href={`/api/auth/logout`} style={{ padding: "5px" }}>
                  Logout
                </Link>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
