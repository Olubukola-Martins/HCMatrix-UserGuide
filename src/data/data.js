import {
  wavingHand,
  gear,
  file,
  clipBoard,
  moneyBag,
  briefCase,
  alarmClock,
} from "../assets/categories";

import { pensive, relieved, smiling } from "../assets/review";

const reviews = [
  {
    emoji: pensive,
    name: "pensive",
  },
  {
    emoji: relieved,
    name: "relieved",
  },
  {
    emoji: smiling,
    name: "smiling",
  },
];

const categories = [
  {
    svg: wavingHand,
    title: "Sign up and sign in",
    description:
      "Help your user learn more about the basic of your product and how they can get started",
    articlesNo: 7,
    articles: [
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
    ],
    status: "active",
  },
  {
    svg: clipBoard,
    title: "Get Started",
    description:
      "Help your user learn more about the basic of your product and how they can get started",
    articlesNo: 7,
    articles: [
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
    ],
    status: "active",
  },
  {
    svg: gear,
    title: "Settings",
    description:
      "Help your user learn more about the basic of your product and how they can get started",
    articlesNo: 7,
    articles: [
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
    ],
    status: "active",
  },
  {
    svg: briefCase,
    title: "Self-Service",
    description:
      "Help your user learn more about the basic of your product and how they can get started",
    articlesNo: 7,
    articles: [
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
    ],
    status: "active",
  },
  {
    svg: file,
    title: "Payroll",
    description:
      "Help your user learn more about the basic of your product and how they can get started",
    articlesNo: 7,
    articles: [
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
    ],
    status: "active",
  },
  {
    svg: alarmClock,
    title: "Time & Attendance",
    description:
      "Help your user learn more about the basic of your product and how they can get started",
    articlesNo: 7,
    articles: [
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
    ],
    status: "active",
  },

  {
    svg: moneyBag,
    title: "Billing & Subscription",
    description:
      "Help your user learn more about the basic of your product and how they can get started",
    articlesNo: 7,
    articles: [
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
      {
        title: "How to create an account",
        description: "learn about how to create an account",
      },
    ],
    status: "active",
  },
  {
    svg: "",
    description: "",
    articlesNo: 0,
    articles: [],
    status: "coming soon",
  },
  {
    svg: "",
    description: "",
    articlesNo: 0,
    articles: [],
    status: "coming soon",
  },
  {
    svg: "",
    description: "",
    articlesNo: 0,
    articles: [],
    status: "coming soon",
  },
];

export { categories, reviews };

//