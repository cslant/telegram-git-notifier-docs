import React, { useEffect, useRef, useState } from "react";
import "../../assets/styles/feature/style.scss";

type FeatureItem = {
  title: string;
  emoji: string;
  description: React.ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Real-Time Notifications",
    emoji: "⚡",
    description: (
      <>
        Effortless Real-Time Updates: Stay informed about your project's activity
        without the need to constantly monitor your repository's events.
      </>
    ),
  },
  {
    title: "Advanced Filtering for Notifications",
    emoji: "🔍",
    description: (
      <>
        Tailor your notifications to only receive alerts that matter most to you
        and your team. This feature ensures that you maintain focus on
        high-priority updates without being overwhelmed by less relevant activity.
      </>
    ),
  },
  {
    title: "Customizable Notification Channels",
    emoji: "🔔",
    description: (
      <>
        Customize how and what you get notified about. This package allows you to
        set up multiple notification channels for different events or environments.
      </>
    ),
  },
];

function FeatureLayout({
  title,
  emoji,
  description,
  index,
}: FeatureItem & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <div
      ref={ref}
      className="col col--3 feature__container"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`,
      }}
    >
      <div className="text--center">
        <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{emoji}</div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Feature() {
  return (
    <>
      {FeatureList.map((props, idx) => (
        <FeatureLayout key={idx} index={idx} {...props} />
      ))}
    </>
  );
}
