import awsconfig from "@/src/aws-exports";
import "@/styles/globals.css";
import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";
import { config } from "process";

Amplify.configure(config);
Amplify.configure(awsconfig);

export default function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return <AnyComponent {...pageProps} />;
}
