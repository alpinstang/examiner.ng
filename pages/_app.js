import React from "react";
import Router from "next/router";
import Link from "next/link";
import "../styles/globals.css";
import TopNav from "components/page/TopNav";
// Import global CSS files here
// import 'node_modules/aether-css-framework/dist/aether.min.css'

// import { config } from 'config/config'

import PageHead from "components/page/PageHead";
import Notifications from "components/page/Notifications";
import { googlePageview } from "components/page/GoogleAnalytics";

Router.events.on("routeChangeComplete", (path) => googlePageview(path));

const MyApp = ({ Component, pageProps, router }) => {
  // props (Server + Client): Component, err, pageProps, router
  const { title, description } = pageProps;
  return (
    <>
      <PageHead title={title} description={description} path={router.asPath} />

      <TopNav />

      <main className="container p-4 dark:bg-gray-900">
        <Component {...pageProps} {...router} />
      </main>

      <Link href="/">
        <a className="button circle-menu-button">
          <img src="/icons/menu.svg" />
        </a>
      </Link>
      <button className="circle-menu-button right">
        <img src="/icons/person.svg" />
      </button>
      <button className="circle-menu-button bottom right">
        <img src="/icons/help.svg" />
      </button>

      <Notifications />
    </>
  );
};
export default MyApp;
