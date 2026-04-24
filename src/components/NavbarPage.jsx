'use client'
import {signOut, useSession} from "@/lib/auth-client";
import {Link, Button} from "@heroui/react";
import { usePathname } from "next/navigation";

const NavbarPage=() => {
  
  const {data, isPending}=useSession();
  const pathname = usePathname();

  if(isPending) {
    return <div>Loading.....</div>
  }

  console.log('login session data', data)
  
  const user=data?.user;

    return (
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
  <header className="flex h-16 items-center justify-between px-6">
    <div className="flex items-center gap-3">
    
      <p className="font-bold text-2xl">IdentityGate</p>
    </div>
    <ul className="flex items-center gap-4">
      <li><Link href="/" className={`px-4 py-2 text-zinc-700 dark:text-zinc-300 font-medium no-underline bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition duration-200 ${
               pathname === "/" 
                ? "border-b-2 border-blue-600 text-blue-600" 
                : "border-b-2 border-transparent text-gray-500 hover:text-gray-700"
            }`}>Home</Link></li>
      <li><Link href="/dashboard" className={`px-4 py-2 text-zinc-700 dark:text-zinc-300 font-medium no-underline bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition duration-200 ${
              pathname === "/dashboard" 
                ? "border-b-2 border-blue-600 text-blue-600" 
                : "border-b-2 border-transparent text-gray-500 hover:text-gray-700"
            }`}>DashBoard</Link></li>
          </ul>
          <div className="flex justify-center gap-4">
            <div className="">

              {user? <div className="flex justify-center items-center gap-4">
                <div className="">
              {/* <p className="italic text-zinc-400"> Welcome {user.name} </p> */}
                </div>
              
              <button className="no-underline w-[100px] inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 text-center text-[14px]" onClick={() => signOut()}>Sign out</button></div>:<Link href="/auth/signin" className="no-underline w-[100px] inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 text-center text-[14px]">
                Sign In
            </Link>}
            </div>

            <div className="">
            <Link href="/auth/signup" className="no-underline w-[100px] inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 text-center ">Sign Up</Link>
            </div>
          </div>
         
         
  </header>
</nav>
    );
};

export default NavbarPage;