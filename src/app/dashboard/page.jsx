import {auth} from "@/lib/auth";
import {authClient} from "@/lib/auth-client";
import {redirect} from "next/dist/server/api-utils";
import {headers} from "next/headers";
import Link from "next/link";

const dashBoard=async () => {
    const session=await auth.api.getSession({
        headers: await headers()
    });

    console.log('session: ', session)
    
    const user=session?.user;
    if(!user) {
        // redirect('/auth/signin')
        return (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-xl border border-gray-100 text-center">
      <div className="mb-6 flex justify-center">
        <div className="p-3 bg-blue-50 rounded-full">
          <svg
            className="w-8 h-8 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h2>
      <p className="text-gray-600 mb-8">
        Please sign in to access the dashboard
      </p>
      <Link href='/auth/signin' className="w-[200px] inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200">
        Sign In Now
      </Link>
    </div>
  </div>
);
    }
    return (
       <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
  </div>

  <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight">
   Hello <span className="text-blue-600"> {user.name}</span>
  </h1>
  
  <p className="mt-3 text-zinc-500 dark:text-zinc-400 max-w-sm">
    Welcome back! You can manage your projects and view analytics from here.
  </p>

  <div className="mt-8 w-20 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
</div>
    );
};

export default dashBoard;