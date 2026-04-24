import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black px-6 text-center">
  
  <div className="max-w-2xl space-y-4">
    
    <p className="text-sm font-semibold tracking-widest uppercase text-blue-600 dark:text-blue-400">
      Welcome to the Future
    </p>

    <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white tracking-tight">
      Build something <br /> 
      <span className="italic text-zinc-400">extraordinary.</span>
    </h1>

    <div className="pt-8">
      <Link
        href="/auth/signin" 
        className="text-zinc-900 dark:text-white font-medium underline underline-offset-8 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        Sign in to your dashboard →
      </Link>
    </div>

  </div>


</div>
  );
}
