import Link from "@docusaurus/Link";
import SvgBackground from "@site/repos/telegram-git-notifier-docs/assets/public/images/telegram-git-notifier-background.svg";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";

import "../assets/styles/styles.scss";
import Feature from "./feature";
import Head from "@docusaurus/core/lib/client/exports/Head";
import React, { JSX } from "react";
import { useMouseGlow } from '@site/src/components/useMouseGlow';
import MouseGlowOverlay from '@site/src/components/MouseGlowOverlay';

const HeaderData = {
  title: "Documentation For Telegram Git Notifier",
  Svg: SvgBackground,
  description:
    "With this package, you can create a Telegram bot to receive notifications from GitHub or GitLab events. You can use this package with Laravel or any PHP application.",
  tags: ["Telegram", "GitHub", "GitLab", "Bot", "Laravel", "PHP"],
  startButtonLink: "/telegram-git-notifier/introduction",
  startButtonLabel: "🚀 Get Started",
};

function HomepageHeader() {
  const {Svg, title, description, tags, startButtonLink, startButtonLabel} = HeaderData;
  const { glow, onMouseMove, onMouseLeave } = useMouseGlow();

  return (
    <>
      <Head>
        <title>Homepage | Telegram Git Notifier | CSlant Documentation</title>
        <link rel="canonical" href="https://docs.cslant.com/telegram-git-notifier" data-rh="true" />
        <meta name="description"
              content="Telegram Git Notifier is a package that allows you to create a Telegram bot to receive notifications from GitHub or GitLab events. You can use this package with Laravel or any PHP application."
              data-rh="true" />
        <meta name="keywords"
              content="laravel telegram git notifier,telegram git notifier,telegram bot,gitlab,github,laravel,php,package,documentation"
              data-rh="true" />
        <meta name="author" content="CSlant" data-rh="true" />
        <meta name="robots" content="index, follow" data-rh="true" />
        <meta name="theme-color" content="#2e8555" data-rh="true" />
        <meta name="generator" content="Docusaurus" data-rh="true" />
        
        <meta property="og:site_name" content="Telegram Git Notifier Documentation" data-rh="true" />
        <meta property="og:type" content="website" data-rh="true" />
        <meta property="og:title" content="Homepage | Telegram Git Notifier | CSlant Documentation" data-rh="true" />
        <meta property="og:description" content="Telegram Git Notifier Documentation - Documentation" data-rh="true" />
        <meta property="og:url" content="https://docs.cslant.com/telegram-git-notifier" data-rh="true" />
        <meta property="og:locale" content="en_US" data-rh="true" />
        
        <meta name="twitter:card" content="summary_large_image" data-rh="true" />
        <meta name="twitter:title" content="Homepage | Telegram Git Notifier | CSlant Documentation" data-rh="true" />
        <meta name="twitter:description" content="Telegram Git Notifier Documentation - Documentation" data-rh="true" />
        <meta name="twitter:creator" content="@cslantofficial" data-rh="true" />
        <meta name="twitter:site" content="@cslantofficial" data-rh="true" />
        
        <meta name="format-detection" content="telephone=no" data-rh="true" />
        <meta name="mobile-web-app-capable" content="yes" data-rh="true" />
        <meta name="apple-mobile-web-app-capable" content="yes" data-rh="true" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" data-rh="true" /></Head>
      <header
        className="main_header"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <MouseGlowOverlay glow={glow} color="rgba(59, 130, 246, 0.18)" />
        <div className="container">
          <div className="row">
            <div className="col col--5 left_header">
              <div className="tgn_badge">🤖 Git Notifications via Telegram</div>
              <Heading as="h1" className="hero__title main_title">
              {title}
              </Heading>
              <p className="hero__subtitle">{description}</p>
              <div className="tags_container">
                {tags.map((tag, idx) => (
                  <span key={idx} className="tag-badge" style={{ animationDelay: `${0.5 + idx * 0.08}s` }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="buttons">
                <Link className="button button--info button--lg" to={startButtonLink}>
                  {startButtonLabel}
                </Link>
              </div>
            </div>
            <div className={clsx("col col--7")}>
              <Svg />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default function TelegramGitNotifierHome(): JSX.Element {
  return (
    <Layout title="Home Page" description="Telegram Git Notifier Documentation">
      <HomepageHeader/>
      <main>
        <section className="home-page__features">
          <div className="container">
            <hr className="section-divider" />
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 className="section-title-fancy" style={{
                background: 'linear-gradient(135deg, #3b82f6, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                ⚡ Key Features
              </h2>
              <p className="section-subtitle-fancy">
                Stay connected with your repositories through powerful Telegram notifications.
              </p>
            </div>
            <div className="row home-page__container">
              <Feature/>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
