import { AppProps } from "next/app";
import React from "react";
import { DefaultSeo } from "next-seo";
import Layout from "../components/layout/Layout";
import { AuthProvider } from "../hooks/useAuth";

import "../styles/globals.css";
import SEO from "../next-seo.config";

export default function MyApp({ Component, pageProps }: AppProps): any {
  return (
    <AuthProvider>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
