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
          <button
            type="button"
            className="text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
          >
            GOGOGO
          </button>
        </Link>
      </div>
    </main>
  );
}
