import Image from "next/image";
import Link from "next/link";
import Component from "../components/component";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-200 dark:bg-zinc-900 justify-center p-24">
      <Component />
      <div className="max-w-5xl flex flex-col items-center font-mono text-sm justify-center">
        <h1 className="text-amber-500 text-6xl font-bold mb-4 mt-4">
          LooHouse
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 mb-4">
          House Price Estimator w/ CV-LOO Learning
        </p>
        <Link href="/form" passHref>
          <span className="cursor-pointer inline-block text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-yellow-900">
            Get Started
          </span>
        </Link>
      </div>
    </main>
  );
}
