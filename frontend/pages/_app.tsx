import { AppProps } from "next/app";
import React from "react";
import Layout from "../components/layout/Layout";
import { AuthProvider } from "../hooks/useAuth";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps): any {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
