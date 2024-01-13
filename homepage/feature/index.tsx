import React from "react";
import "./style.scss";

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Real-Time Notifications",
    description: (
      <>
        Effortless Real-Time Updates: Stay informed about your project's activity without the need to constantly monitor your repository's events.
      </>
    ),
  },
  {
    title: "Advanced Filtering for Notifications",
    description: (
      <>
        Tailor your notifications to only receive alerts that matter most to you and your team. This feature ensures that you maintain focus on high-priority updates without being overwhelmed by less relevant activity.
      </>
    ),
  },
  {
    title: "Customizable Notification Channels",
    description: (
      <>
        Customize how and what you get notified about. This package allows you to set up multiple notification channels for different events or environments.
      </>
    ),
  },
];

function FeatureLayout({title, description}) {
  return (
    <div className="col col--3 feature__container">
      <div className="text--center">
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
        <FeatureLayout key={idx} {...props} />
      ))}
    </>
  );
}
