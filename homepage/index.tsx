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
import SoftCard from '@site/src/components/softui/SoftCard';
import StatCounter from '@site/src/components/softui/StatCounter';
import SectionHeader from '@site/src/components/softui/SectionHeader';
import StepCard from '@site/src/components/softui/StepCard';
import CtaBanner from '@site/src/components/softui/CtaBanner';
import FaqAccordion from '@site/src/components/softui/FaqAccordion';
import Timeline from '@site/src/components/softui/Timeline';
import softui from '@site/src/components/softui/softui.module.css';

const HeaderData = {
  title: "Documentation For Telegram Git Notifier",
  Svg: SvgBackground,
  description:
    "With this package, you can create a Telegram bot to receive notifications from GitHub or GitLab events. You can use this package with Laravel or any PHP application.",
  tags: ["Telegram", "GitHub", "GitLab", "Bot", "Laravel", "PHP"],
  startButtonLink: "/telegram-git-notifier/introduction",
  startButtonLabel: "🚀 Get Started",
};

const stats = [
  { value: 17, emoji: "📄", label: "Doc pages" },
  { value: 39, emoji: "📡", label: "Supported event types" },
  { value: 2, emoji: "🛰️", label: "Platforms: GitHub + GitLab" },
  { value: 7, emoji: "🚀", label: "Releases shipped" },
];

const quickSteps = [
  {
    step: 1,
    title: "Install via Composer",
    description: "The package works with Laravel or any plain PHP application.",
    code: "composer require cslant/telegram-git-notifier",
  },
  {
    step: 2,
    title: "Run the installer script",
    description: "Generate the configuration and credential files without navigating complex install steps.",
    code: "bash vendor/cslant/telegram-git-notifier/install.sh",
  },
  {
    step: 3,
    title: "Configure your bot",
    description: "Set your Telegram bot token, chat target and the event types you want to receive.",
  },
  {
    step: 4,
    title: "Set up the webhook",
    description: "Register the webhook URL on your GitHub or GitLab project and let the notifications flow.",
  },
];

const timelineItems = [
  {
    period: "v2.0.0 · 2026",
    title: "PHP 8.4+ & modern architecture",
    description: "Platform enum, ChatTarget DTO with thread support, in-memory config caching, PSR-3 logging and API retry logic for HTTP 429.",
    tags: ["PHP 8.4+", "Type-safe"],
  },
  {
    period: "v1.5.0 · 2024",
    title: "GitLab actions & team features",
    description: "Updated GitLab event configuration and new team collaboration capabilities.",
    tags: ["GitLab"],
  },
  {
    period: "v1.3.0 · 2023",
    title: "Enhanced features & optimizations",
    description: "install.sh integration, codebase refactoring, comprehensive tests across multiple PHP versions and chatIDs parameter for Notifier.",
    tags: ["Installer", "Refactor", "Tests"],
  },
  {
    period: "v1.2.0 · 2023",
    title: "Topics & bot commands",
    description: "Send notifications to supergroup topics (threads), support for Telegram bot commands and custom buttons.",
    tags: ["Topics", "Commands"],
  },
  {
    period: "v1.0.0 · 2023",
    title: "Initial release",
    description: "First public release with webhook action support for GitHub and GitLab.",
    tags: ["Webhooks"],
  },
];

const faqs = [
  {
    question: "Which platforms are supported?",
    answer:
      "GitHub and GitLab. The package maps 28 GitHub event types and 11 GitLab event types, configurable through typed JSON event files.",
  },
  {
    question: "Can I use it without Laravel?",
    answer:
      "Yes. The package works with Laravel or any plain PHP application — it is framework-agnostic by design.",
  },
  {
    question: "What happens if Telegram enforces rate limits?",
    answer:
      "The package implements exponential backoff and retry logic for HTTP 429 responses, plus optional PSR-3 logging through the validator.",
  },
  {
    question: "Do my servers need to be publicly reachable?",
    answer:
      "Yes — GitHub and GitLab push webhook payloads to your endpoint, so the app must expose the webhook route publicly.",
  },
  {
    question: "Where are event mappings defined?",
    answer:
      "Event-to-payload mappings live in the package config under config/jsons (github-events.json and gitlab-events.json) and can be customized.",
  },
];

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

function StatsBar() {
  return (
    <section className="home-page__section">
      <div className="container">
        <div className={softui.grid4}>
          {stats.map((stat, idx) => (
            <SoftCard key={idx} delay={idx * 0.1}>
              <StatCounter {...stat} delay={idx * 0.1} />
            </SoftCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickStart() {
  return (
    <section className="home-page__section">
      <div className="container">
        <SectionHeader
          title="Get Started in Four Steps"
          subtitle="From installing the package to receiving your first git notification."
          accent="linear-gradient(135deg, #3b82f6, #0ea5e9)"
        />
        <div className={softui.grid4}>
          {quickSteps.map((step, idx) => (
            <StepCard key={idx} step={step.step} title={step.title} description={step.description} code={step.code} delay={idx * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="home-page__section">
      <div className="container">
        <SectionHeader
          title="Release Timeline"
          subtitle="How Telegram Git Notifier evolved from its first release to today."
          accent="linear-gradient(135deg, #3b82f6, #0ea5e9)"
        />
        <div className={softui.timelineWrap}>
          <Timeline items={timelineItems} />
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="home-page__section">
      <div className="container">
        <SectionHeader title="Frequently Asked Questions" subtitle="Answers to the questions most often asked about Telegram Git Notifier." accent="linear-gradient(135deg, #3b82f6, #0ea5e9)" />
        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}

export default function TelegramGitNotifierHome(): JSX.Element {
  return (
    <Layout title="Home Page" description="Telegram Git Notifier Documentation">
      <HomepageHeader/>
      <main>
        <StatsBar />
        <section className="home-page__features">
          <div className="container">
            <SectionHeader
              title="⚡ Key Features"
              subtitle="Stay connected with your repositories through powerful Telegram notifications."
              accent="linear-gradient(135deg, #3b82f6, #0ea5e9)"
            />
            <Feature />
          </div>
        </section>
        <QuickStart />
        <TimelineSection />
        <FaqSection />
        <section className="home-page__section">
          <div className="container">
            <CtaBanner
              title="Never miss a git event again"
              subtitle="Wire your GitHub or GitLab activity straight into Telegram in minutes."
              accent="#3b82f6"
              primary={{ label: "🚀 Get Started", href: "/telegram-git-notifier/introduction" }}
              secondary={{ label: "⭐ GitHub Repository", href: "https://github.com/cslant/telegram-git-notifier", external: true }}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}