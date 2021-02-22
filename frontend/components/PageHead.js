import Head from "next/head";

import manifest from "public/manifest.json";
import { config } from "config/config";
import isDevelopment from "lib/isDevelopment";
import nightwind from "nightwind/helper";

const PageHead = ({ title, description, path = "/" }) => {
  const pageTitle = title
    ? `${title} – ${config.appName}`
    : `${config.appName} – ${config.appTagline}`;

  const pageDescription = description || config.appDescription;

  // SEO: title 60 characters, description 160 characters
  if (isDevelopment())
    console.log("PageHead (dev):", [
      60 - pageTitle.length,
      160 - pageDescription.length,
      pageTitle,
      pageDescription,
    ]);

  const thumbnailUrl = `https://screens.myscreenshooterserver.com/?url=${
    config.appUrl
  }${path.slice(1)}${path.includes("?") ? "&" : "?"}thumbnail=true`;
  const iconUrl = "/favicon.png";
  const fonts = [["Inter", "300,400,700"]];

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      <meta charSet="utf-8" />
      <meta
        httpEquiv="content-language"
        content={config.locale.split("_")[0]}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      <link rel="manifest" href="/manifest.json" />

      {fonts.map((font) => (
        <link
          key={font[0]}
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css?family=${`${font[0].replace(
            / /g,
            "+"
          )}${font[1] ? ":" + font[1] : ""}`}&display=swap`}
        />
      ))}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#003333" />
      <meta name="msapplication-TileColor" content="#003333" />
      <link rel="shortcut icon" type="image/x-icon" href={iconUrl} />

      <meta property="og:site_name" content={config.appName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:locale" content={config.locale} />

      {thumbnailUrl && (
        <>
          <meta property="og:image" content={thumbnailUrl} />
          <meta name="twitter:image" content={thumbnailUrl} />
        </>
      )}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="theme-color" content={manifest.theme_color} />

      {manifest.display === "standalone" ? (
        <meta name="apple-mobile-web-app-capable" content="yes" />
      ) : null}
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content={config.appName} />

      {/*
        <link rel='apple-touch-startup-image' href='' />

        <link rel='canonical' href={websiteUrl} />
        <meta property='og:url' content={websiteUrl} />

        <meta name='twitter:site' content={`@${config.landingPage.social.twitter}`} />
      */}

      {config.googleSiteVerification ? (
        <meta
          name="google-site-verification"
          content={config.googleSiteVerification}
        />
      ) : null}
      <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
    </Head>
  );
};
export default PageHead;
