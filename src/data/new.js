// import { SubCategories } from "../sections";
import {
  wavingHand,
  gear,
  file,
  clipBoard,
  moneyBag,
  briefCase,
  alarmClock,
} from "../assets/categories";

const categories = [
  {
    svg: gear,
    title: "Testing",
    description:
      "Help your user learn more about the basic of your product and how they can get started",
    status: "active",
    articles: [
      {
        title: "Organization Settings Article",
        description: "learn about how to create an account",
      },
      {
        title: "Performance Settings Article",
        description: "learn about how to create an account",
      },
      {
        title: "General Settings Article",
        description: "learn about how to create an account",
      },
      {
        title: "Learning & Development Settings",
        description: "learn about how to create an account",
      },
    ],
  },
  {
    svg: wavingHand,
    title: "Perfect",
    description:
      "Help your user learn more about the basic of your product and how they can get started",
    status: "active",
    subCategories: [
      {
        title: "General Settings",
        description: "Company - Holiday - Projects",
      },
      {
        title: "Organization Settings",
        description: "Company - Holiday - Projects",
      },
      {
        title: "User Access Control Settings",
        description: "Company - Holiday - Projects",
      },
      {
        title: "Automation Settings",
        description: "Company - Holiday - Projects",
      },
      {
        title: "Policies Settings",
        description: "Company - Holiday - Projects",
      },
      {
        title: "Self Service Settings",
        description: "Company - Holiday - Projects",
      },
      {
        title: "Payroll Setting",
        description: "Company - Holiday - Projects",
      },
      {
        title: "Time & Attendance Settings",
        description: "Company - Holiday - Projects",
      },
      {
        title: "Performance Settings",
        description: "Company - Holiday - Projects",
      },
      {
        title: "Learning & Development Settings",
        description: "Company - Holiday - Projects",
      },
    ],
    articles: [
      {
        title: "Organization Settings Article",
        description: "learn about how to create an account",
        subCategories: "Organization Settings",
      },
      {
        title: "Performance Settings Article",
        description: "learn about how to create an account",
        subCategories: "Performance Settings",
      },
      {
        title: "General Settings Article one",
        description: "learn about how to create an account",
        subCategories: "General Settings",
      },
      {
        title: "General Settings Article",
        description: "learn about how to create an account",
        subCategories: "General Settings",
      },
      {
        title: "Learning & Development Settings",
        description: "learn about how to create an account",
        subCategories: "Learning & Development Settings",
      },
    ],
  },
  { status: "" },
];

export { categories };

// Category -- subcategory -- articles -- content
// category -- {name,title , description , article: [name, description, subcategories]}
// so the logic would be to map the articles and find the categories
// if subcategories is null , then route the article names to the articles
// if it exist pair all the
// article -- {name, content ,category, subcategory}
