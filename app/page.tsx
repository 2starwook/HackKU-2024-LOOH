import Image from "next/image";
import Link from "next/link";
import Component from "../components/component";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Component />
      <div className="z-10 max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by clicking&nbsp;
          <Link href="/form">
            <code className="font-mono font-bold">HERE</code>
          </Link>
        </p>
      </div>
    </main>
  );
}
