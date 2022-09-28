import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTheme } from "@nextui-org/react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import style from "../styles/ContainerBlock.module.css";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();
  const { isDark } = useTheme();

  const meta = {
    title: "Screamscape // Amusement News",
    description: `Quickly get the amusement news and rumors as it happens!`,
    image: "/assets/images/logo.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
        <link rel="icon" type="image/png" href="favicon.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Screamscape" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@screamscape" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <>
        <nav className={ isDark ? `${style.fullwidthdark}` : `${style.fullwidthlight}` }>
          <Navigation />
        </nav>
        <main>
            <div className={isDark ? `${style.darkBackground}` : `${style.lightBackground}` }>{children}</div>
        </main>
        <footer className={isDark ? `${style.footer} ${style.footerDarkMode}` : `${style.footer} ${style.footerLightMode}`}>
          <Footer />
        </footer>
      </>
    </div>
  );
}
