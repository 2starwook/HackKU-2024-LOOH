import Image from "next/image";
import Link from "next/link";
import Component from "../components/component";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 dark:bg-gray-800">
      <Component />
      <div className="max-w-5xl flex flex-col items-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 mt-4">
          ㅎㅇ
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 mb-4">
          디스크립션
        </p>
        <Link href="/form" passHref>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white font-bold text-lg rounded-lg hover:bg-blue-700 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 cursor-pointer">
            GOGOGOGO
          </button>
        </Link>
      </div>
    </main>
  );
}
