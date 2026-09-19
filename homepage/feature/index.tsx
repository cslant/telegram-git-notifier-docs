import React, { JSX, ReactNode } from "react";
import SoftCard from '@site/src/components/softui/SoftCard';
import softui from '@site/src/components/softui/softui.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Real-Time Notifications",
    emoji: "⚡",
    description: (
      <>
        Stay informed about your project's activity without the need to constantly
        monitor your repository's events.
      </>
    ),
  },
  {
    title: "Advanced Event Filtering",
    emoji: "🔍",
    description: (
      <>
        Reach 39 supported event types across GitHub (28) and GitLab (11) — tailor
        notifications so only what matters reaches you.
      </>
    ),
  },
  {
    title: "Channels & Topics",
    emoji: "🗨️",
    description: (
      <>
        Send notifications to channels, supergroup topics and multiple targets at
        once — perfect for teams that organize by thread.
      </>
    ),
  },
  {
    title: "Custom Commands & Buttons",
    emoji: "🔘",
    description: (
      <>
        Support for Telegram bot commands and inline buttons, so your bot can do
        more than just notify.
      </>
    ),
  },
  {
    title: "PHP 8.4+ & Laravel-ready",
    emoji: "🐘",
    description: (
      <>
        Works with Laravel or any plain PHP application — platform enum and typed
        DTOs keep the API safe and easy to consume.
      </>
    ),
  },
  {
    title: "Resilient Delivery",
    emoji: "🛡️",
    description: (
      <>
        Exponential backoff and retry logic handle Telegram API rate limits
        (HTTP 429) automatically, with optional PSR-3 logging.
      </>
    ),
  },
];

export default function Feature(): JSX.Element {
  return (
    <div className={softui.grid3}>
      {FeatureList.map((feature, idx) => (
        <SoftCard key={idx} delay={idx * 0.1}>
          <div style={{ fontSize: '2.2rem', marginBottom: '0.6rem' }}>{feature.emoji}</div>
          <h3 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.4rem' }}>{feature.title}</h3>
          <p className="m-0">{feature.description}</p>
        </SoftCard>
      ))}
    </div>
  );
}