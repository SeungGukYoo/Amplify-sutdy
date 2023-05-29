import Form from "@/components/form";
import styles from "@/styles/Home.module.css";
import { withAuthenticator, WithAuthenticatorProps } from "@aws-amplify/ui-react";

import { Clicker_Script, Inter } from "@next/font/google";
import { Auth } from "aws-amplify";

import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

function Home() {
  const getUser = async () => {
    try {
      // current User Session
      const session = await Auth.currentSession();
      const jwt = session.getIdToken().getJwtToken();
      // current User Info
      // const userInfo = await Auth.currentUserInfo();
      // session storage
      // const session = sessionStorage.getItem("sessionID");
      console.log(session);
    } catch (error) {
      console.log(error);
    }
  };
  const getSession = async () => {
    try {
      const session = await Auth.currentSession();
      console.log(session);
    } catch (error) {
      console.log(error);
    }
  };
  const signOut = async () => {
    try {
      await Auth.signOut();
      console.log(`log out `);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="container mx-auto">
        <main>
          <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mt-1 text-4xl font-extrabold text-white-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Amplify Forum
              </p>
              <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
                Welcome to Amplify Forum Hi, There!, I am dyson.
              </p>

              <Form />
              <button onClick={getUser}>info watch</button>
              <button onClick={getSession}>Session watch</button>
              <button onClick={signOut}>Sign Out</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Home;
