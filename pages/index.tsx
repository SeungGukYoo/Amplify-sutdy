import styles from "@/styles/Home.module.css";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <main className="bg-white">
          <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Amplify Forum
              </p>
              <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
                Welcome to Amplify Forum Hi, There!, I am dyson.
              </p>
            </div>
          </div>
        </main>
      </div>

      <footer></footer>
    </div>
  );
}
