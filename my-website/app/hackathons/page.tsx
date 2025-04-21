"use client";
import React from "react";

import { Timeline } from "@/components/ui/timeline";
import Iphone15Pro from "@/components/iphone15pro";
import { Safari } from "@/components/safari";
import {
  SiSwift,
  SiPython,
  SiFastapi,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiFigma,
  SiAndroid,
  SiKotlin,
  SiChromewebstore,
  SiHtml5,
  SiCss3,
  SiTensorflow,
  SiArduino,
  SiChatbot,
  SiIonic,
  SiD3Dotjs,
} from "react-icons/si";
// HackathonsPage.tsx
import { TimelineEntry } from "@/components/ui/timeline";
import {title} from "@/components/primitives";

export default function HackathonsPage() {
  const data: TimelineEntry[] = [
    {
      title: "HackaTUM",
      year: "2022",
      company: {
        name: "David",
      },
      subtitle: "HackaTUM 2022 – 2nd Place",
      description: "" +
          "The David app aims to improve the people's experience in the City of Munich with the help of gamification tools. The user can write stories about a building while roaming around the city and the stories are categorised into a particular genre with the help of Machine Learning.\n" +
          "\n" +
          "The fun part is that the users can read stories written by other people about a particular theme and can upvote or downvote them, then the gamification part comes into play, there is a leader board of stories based on the number of downvotes and upvotes it has got and attractive badges also appear on the profile of the user based on the number of stories written by the user." +
          "",
      award: true,
      tags: [
        { name: "SwiftUI", icon: <SiSwift /> },
        { name: "Python", icon: <SiPython /> },
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "React", icon: <SiReact /> },
      ],
      links: {
        github: "https://github.com/wedalb/david",
        devpost: "https://devpost.com/software/david-fn1k62",
        linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7000431859855675392/",
        website: "https://hack.tum.de/",
      },
      iPhoneImages: [
        "/hackathon-images/hackaTUM-2022/img.png",
        "/hackathon-images/hackaTUM-2022/img_1.png",
        "/hackathon-images/hackaTUM-2022/img_2.png",
        "/hackathon-images/hackaTUM-2022/img_3.png",
      ],
    },
    {
      title: "TEG Hack",
      year: "2023",
      company: {
        name: "TEG - The Entrepreneurial Group",
      },
      subtitle: "TEG Hack 2023 – 1st Place",
      description: "We built an interactive prototype for TEG’s community platform and won 1st place.",
      award: true,
      tags: [{ name: "Figma", icon: <SiFigma /> }],
      links: {
        linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7000431859855675392/",
        website: "https://www.teg-ev.de/",
      },
      iPhoneImages: [
        "/hackathon-images/startHack-2023/img.png",
        "/hackathon-images/startHack-2023/img_1.png",
        "/hackathon-images/startHack-2023/img_2.png",
      ],
    },
    {
      title: "START Hack",
      year: "2023",
      company: {
        name: "Luisa",
      },
      subtitle: "START Hack 2023 – First Time at STARTHack",
      description: "A cross-platform mobile experience built in Android & Kotlin.",
      award: false,
      tags: [
        { name: "Android", icon: <SiAndroid /> },
        { name: "Kotlin", icon: <SiKotlin /> },
        { name: "Figma", icon: <SiFigma /> },
      ],
      links: {
        github: "https://github.com/shivambanka/LUISA/blob/main/Antler_International-nerds.pdf.pdf",
        website: "https://luisa.ai/",
        linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7000431859855675392/",
      },
      safariImages: ["/hackathon-images/startHack-2023/img.png"],
    },
    {
      title: "TUM.ai Makeathon",
      year: "2023",
      company: {
        name: "Uncancelled",
      },
      subtitle: "TUM.ai Makeathon 2023 – Finalists",
      description: "A Chrome extension for sentiment analysis, built with JS & TensorFlow.",
      award: true,
      tags: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Chrome Extension", icon: <SiChromewebstore /> },
        { name: "Python", icon: <SiPython /> },
      ],
      links: {
        github: "https://github.com/wedalb/uncancelled",
        website: "https://www.tum-ai.com/",
      },
      safariImages: ["https://via.placeholder.com/1200x750"],
    },
    {
      title: "START Sport Hack",
      year: "2023",
      company: {
        name: "Prosthetic Hand",
      },
      subtitle: "START Sport Hack 2023 – 2nd Place",
      description: "An Arduino-powered prosthetic hand prototype for adaptive training.",
      award: true,
      tags: [
        { name: "Arduino", icon: <SiArduino /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Figma", icon: <SiFigma /> },
      ],
      images: ["https://via.placeholder.com/1200x750"],
    },
    {
      title: "EthHack",
      year: "2023",
      company: {
        name: "Karmalized",
      },
      subtitle: "EthHack 2023 – Great Experience",
      description: "We had a lot of fun building Karmalized, a smart engaging community app for Munich.",
      award: false,
      tags: [
        { name: "Solidity", icon: <SiJavascript /> },
        { name: "React", icon: <SiReact /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Ionic", icon: <SiChatbot /> },
        { name: "web3.js", icon: <SiJavascript /> },
        { name: "Truffle", icon: <SiJavascript /> },
        { name: "Figma", icon: <SiFigma /> },
      ],
      links: {
        devpost: "https://devfolio.co/projects/karmalized-b2e9",
        youtube: "https://youtu.be/vZJQIbkvjUI",
      },
      safariImages: [
        "/hackathon-images/ethHack-2023/img_1.png",
        "/hackathon-images/ethHack-2023/img_2.png",
      ],
    },
    {
      title: "Planetarium Hack Bochum",
      year: "2023",
      company: {
        name: "galactic space mission",
      },
      subtitle: "Planetarium Hack Bochum 2023 – First Place",
      description: "We had a lot of fun building Galactic Space Mission, a smart engaging community app for Munich.",
      award: true,
      tags: [
        { name: "Solidity", icon: <SiJavascript /> },
        { name: "React", icon: <SiReact /> },
        { name: "CSS", icon: <SiCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Ionic", icon: <SiChatbot /> },
        { name: "web3.js", icon: <SiJavascript /> },
        { name: "Truffle", icon: <SiJavascript /> },
        { name: "Figma", icon: <SiFigma /> },
      ],
      links: { website: "https://pitch.com/v/galactic-space-mission-xth6b6" },
      images: ["https://via.placeholder.com/1200x750"],
    },
    {
      title: "FuturePynk Hack",
      year: "2023",
      company: {
        name: "FuturePynk",
      },
      subtitle: "FuturePynk Hack 2023 – First Place",
      description: "We had a lot of fun building Sustainable Thingy, a smart engaging community app for Munich.",
      award: false,
      tags: [
        { name: "Python", icon: <SiPython /> },
        { name: "Swift", icon: <SiSwift /> },
        { name: "SwiftUI", icon: <SiSwift /> },
      ],
    },
    {
      title: "Cassini Hackathon",
      year: "2023",
      company: {
        name: "ConCast",
      },
      subtitle: "lala",
      description: "description",
      award: true,
      tags: [
        { name: "Python", icon: <SiPython /> },
        { name: "Streamlit", icon: <SiNodedotjs /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "OpenCV", icon: <SiFigma /> },
      ],
      links: {
        github: "https://github.com/wedalb/cassinihack-backend",
        website: "https://concast.streamlit.app/",
      },
    },
    {
      title: "BaselHack",
      year: "2023",
      company: {
        name: "Dine Divine",
      },
      subtitle: "BaselHack 2023 – First Place",
      description: "We had a lot of fun building DineDivine, a smart engaging community app for Munich.",
      award: true,
      tags: [
        { name: "Python", icon: <SiPython /> },
        { name: "ChatGPT", icon: <SiChatbot /> },
        { name: "Ionic", icon: <SiIonic /> },
        { name: "Spline", icon: <SiD3Dotjs /> },
      ],
    },
    {
      title: "Junction Hack",
      year: "2023",
      company: {
        name: "junction",
      },
      subtitle: "Junction Hack Helsinki 2023 – First Place",
      description: "We had a lot of fun building Junction, a smart engaging community app for Munich.",
      award: true,
      tags: [
        { name: "Figma", icon: <SiFigma /> },
        { name: "ChatGPT", icon: <SiChatbot /> },
      ],
    },
    {
      title: "Upcoming: Q-Hack",
      year: "2025",
      subtitle: "Stay tuned…",
    },
    {
      title: "Upcoming: Circular Hack Fest",
      year: "2025",
    },
    {
      title: "Upcoming: Junction Hack 2025",
      year: "2025",
    },
  ];

  return (
      <div className="w-full">
        <h1 className={title()}>Hackathon Projects</h1>
        <Timeline data={data} />
      </div>
  );
}
