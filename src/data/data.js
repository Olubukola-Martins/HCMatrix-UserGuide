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
    title: "sign up and sign in",
    description:
      "Help your user learn more about the basic of your product and how they can get started",
    status: "active",
    subcategories: null,
    articles: [
      {
        title: "how to create an account",
        description: "Learn about how to create an account",
      },
      {
        title: "how to sign in",
        description: "Learn about how to create an account",
      },
      {
        title: "how to reset or forget password",
        description: "learn about how to create an account",
      },
    ],
  },

  {
    svg: gear,
    title: "settings",
    description:
      "Help your user learn more about the basic of your product and how they can get started",
    status: "active",
    subcategories: [
      {
        title: "General Settings",
        description: "Company - Holiday - Projects",
        category: null,
      },
      {
        title: "Organization Settings",
        description: "Company - Holiday - Projects",
        category: [
          {
            title: "employee",
            desc: "learn how to set up your employee settings",
          },
          {
            title: "department",
            desc: "learn how to set up your department settings",
          },
          {
            title: "designation",
            desc: "learn how to set up your designation",
          },
          {
            title: "branches",
            desc: "learn how to set up branches",
          },
          {
            title: "groups",
            desc: "learn how to set up group",
          },
        ],
      },
      {
        title: "User Access Control Settings",
        description: "Company - Holiday - Projects",
        category: null,
      },
      {
        title: "Automation Settings",
        description: "Company - Holiday - Projects",
        category: null,
      },
      {
        title: "Policies Settings",
        description: "Company - Holiday - Projects",
        category: null,
      },
      {
        title: "Self Service Settings",
        description: "Company - Holiday - Projects",
        category: [
          {
            title: "Onboarding Settings",
            desc: "Learn how to set up your onboarding settings",
          },
          {
            title: "Conference Room Booking Settings",
            desc: "Learn how to set up your conference room booking settings",
          },
          {
            title: "Document Settings",
            desc: "Learn how to set up your conference room booking settings",
          },
          {
            title: "Health Access Settings",
            desc: "Learn how to set up your health access settings",
          },
          {
            title: "Leave Settings",
            desc: "Learn how to set up your leave settings",
          },
          {
            title: "Loan Settings",
            desc: "Learn how to set up your loan settings",
          },
          {
            title: "Payslip Settings",
            desc: "Learn how to set up your payslip settings",
          },
          {
            title: "Vehicle booking settings",
            desc: "Learn how to set up your vehicle booking settings",
          },
          {
            title: "Requisition Settings",
            desc: "Learn how to set up your requisition settings",
          },
        ],
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
        title: "How to add single employee",
        description: "Learn how to set up your employee",
        subcategories: "Organization Settings",
        nestedCategory: "employee",
      },
      {
        title: "How to invite multiple employees",
        description: "Learn how to set up your employee",
        subcategories: "Organization Settings",
        nestedCategory: "employee",
      },
      {
        title: "How to import an employee",
        description: "Learn how to set up your employee",
        subcategories: "Organization Settings",
        nestedCategory: "employee",
      },
      {
        title: "How to export employee data",
        description: "Learn how to set up your employee",
        subcategories: "Organization Settings",
        nestedCategory: "employee",
      },
      {
        title: "How to edit an employee details",
        description: "Learn how to set up your employee",
        subcategories: "Organization Settings",
        nestedCategory: "employee",
      },
      {
        title: "How to terminate an employee",
        description: "Learn how to set up your employee",
        subcategories: "Organization Settings",
        nestedCategory: "employee",
      },
      {
        title: "How to suspend an employee",
        description: "Learn how to set up your employee",
        subcategories: "Organization Settings",
        nestedCategory: "employee",
      },
      {
        title: "How to set employee on probation",
        description: "Learn how to set up your employee",
        subcategories: "Organization Settings",
        nestedCategory: "employee",
      },
      {
        title: "how to Configure Company settings",
        description: "Learn how to set up your Company Settings",
        subcategories: "General Settings",
        nestedCategory: "",
      },
      {
        title: "how to Add Holiday",
        description: "Learn how to set up Holiday settings",
        subcategories: "General Settings",
        nestedCategory: "",
      },
      {
        title: "how to delete Holiday ",
        description: "Learn how to set up Holiday settings",
        subcategories: "General Settings",
        nestedCategory: "",
      },
      {
        title: "how to add a projects",
        description: "Learn how to add projects",
        subcategories: "General Settings",
        nestedCategory: "",
      },
      {
        title: "how to view user (employee) projects",
        description: "Learn how to set up your Projects Settings",
        subcategories: "General Settings",
        nestedCategory: "",
      },
      {
        title: "how to add a department",
        description: "learn about how to create an account",
        subcategories: "Organization Settings",
        nestedCategory: "department",
      },
      {
        title: "How to bulk import departments",
        description: "learn about how to create an account",
        subcategories: "Organization Settings",
        nestedCategory: "department",
      },
      {
        title: "How to delete a department",
        description: "learn about how to create an account",
        subcategories: "Organization Settings",
        nestedCategory: "department",
      },
      {
        title: "How to edit department details",
        description: "learn about how to create an account",
        subcategories: "Organization Settings",
        nestedCategory: "department",
      },
      {
        title: "How to add job designation",
        description: "learn about how to set up your designation",
        subcategories: "Organization Settings",
        nestedCategory: "designation",
      },
      {
        title: "How to bulk import job designation",
        description: "learn about how to set up your designation",
        subcategories: "Organization Settings",
        nestedCategory: "designation",
      },
      {
        title: "How to delete a job designation",
        description: "learn about how to set up your designation",
        subcategories: "Organization Settings",
        nestedCategory: "designation",
      },
      {
        title: "How to edit job designation",
        description: "learn about how to set up your designation",
        subcategories: "Organization Settings",
        nestedCategory: "designation",
      },
      {
        title: "How to add a branch ",
        description: "Learn how to set up your branch",
        subcategories: "Organization Settings",
        nestedCategory: "branches",
      },
      {
        title: "How to edit job designation",
        description: "Learn how to set up your branch",
        subcategories: "Organization Settings",
        nestedCategory: "branches",
      },
      {
        title: "How to delete a branch",
        description: "Learn how to set up your branch",
        subcategories: "Organization Settings",
        nestedCategory: "branches",
      },
      {
        title: "How to edit branch details",
        description: "Learn how to set up your branch",
        subcategories: "Organization Settings",
        nestedCategory: "branches",
      },
      {
        title: "How to add a group",
        description: "Learn how to set up groups",
        subcategories: "Organization Settings",
        nestedCategory: "groups",
      },
      {
        title: "How to delete a group",
        description: "Learn how to set up groups",
        subcategories: "Organization Settings",
        nestedCategory: "groups",
      },
      {
        title: "How to edit a group",
        description: "Learn how to set up groups",
        subcategories: "Organization Settings",
        nestedCategory: "groups",
      },
      {
        title: "How to add a new member to a group",
        description: "Learn how to set up groups",
        subcategories: "Organization Settings",
        nestedCategory: "groups",
      },
      {
        title: "How to edit group member details",
        description: "Learn how to set up groups",
        subcategories: "Organization Settings",
        nestedCategory: "groups",
      },
      {
        title: "How to delete a group member",
        description: "Learn how to set up groups",
        subcategories: "Organization Settings",
        nestedCategory: "groups",
      },
      {
        title: "How to add a new role",
        description: "Learn how to set up your user access control settings",
        subcategories: "User Access Control Settings",
        nestedCategory: "",
      },
      {
        title: "How to set up permission for a role",
        description: "Learn how to set up your user access control settings",
        subcategories: "User Access Control settings",
        nestedCategory: "",
      },
      {
        title: "How to delete a custom role",
        description: "Learn how to set up your user access control settings",
        subcategories: "User Access Control settings",
        nestedCategory: "",
      },
      {
        title: "How to delegate role",
        description: "Learn how to set up your user access control settings",
        subcategories: "User Access Control settings",
        nestedCategory: "",
      },
      {
        title: "How to create basic workflow",
        description: "Learn how to set up your automation settings",
        subcategories: "Automation settings",
        nestedCategory: "",
      },
      {
        title: "How create advanced workflow",
        description: "Learn how to set up your automation settings",
        subcategories: "Automation settings",
        nestedCategory: "",
      },
      {
        title: "How to edit workflow",
        description: "Learn how to set up your automation settings",
        subcategories: "Automation settings",
        nestedCategory: "",
      },
      {
        title: "How to create probation policy",
        description: "Learn how to set up your automation settings",
        subcategories: "Policies settings",
        nestedCategory: "",
      },
      {
        title: "How to create resignation policy",
        description: "Learn how to set up your automation settings",
        subcategories: "Policies settings",
        nestedCategory: "",
      },
      {
        title: "How to configure onboarding settings",
        description: "Learn about how to set up your policy settings.",
        subcategories: "Self Service Settings",
        nestedCategory: "Onboarding settings",
      },
      {
        title: "How to configure conference room booking settings",
        description: "Learn about how to set up your policy settings.",
        subcategories: "Self Service Settings",
        nestedCategory: "Conference room booking settings",
      },
      {
        title: "How to configure loan settings",
        description: "Learn about how to set up your loan settings.",
        subcategories: "Self Service Settings",
        nestedCategory: "Loan Settings",
      },
      {
        title: "How to create payslip template",
        description: "Learn about how to set up your payslip settings.",
        subcategories: "Self Service Settings",
        nestedCategory: "Payslip Settings",
      },
      {
        title: "How to configure vehicle booking settings",
        description: "Learn about how to set up your vehicle booking settings.",
        subcategories: "Self Service Settings",
        nestedCategory: "Vehicle booking settings",
      },
    ],
  },
  {
    svg: clipBoard,
    title: "Get Started",
    description:
      "Help your user learn more about the basic of your product and how they can get started",
    status: "active",
    subcategories: null,
    articles: [],
  },
  {
    svg: briefCase,
    title: "Self-Service",
    description:
      "Help your user learn more about the basic of your product and how they can get started",
    status: "active",
    subcategories: null,
    articles: [],
  },
  {
    svg: file,
    title: "Payroll",
    description:
      "Help your user learn more about the basic of your product and how they can get started",
    status: "active",
    subcategories: null,
    articles: [],
  },
  {
    svg: alarmClock,
    title: "Time & Attendance",
    description:
      "Help your user learn more about the basic of your product and how they can get started",
    status: "active",
    subcategories: null,
    articles: [],
  },
  {
    svg: moneyBag,
    title: "Billing & Subscription",
    description:
      "Help your user learn more about the basic of your product and how they can get started",
    status: "active",
    subcategories: null,
    articles: [],
  },
  { status: "" },
  { status: "" },
  { status: "" },
  { status: "" },
];

export { categories, reviews };

// Category -- subcategory -- articles -- content
// category -- {name,title , description , article: [name, description, subcategories]}
// so the logic would be to map the articles and find the categories
// if subcategories is null , then route the article names to the articles
// if it exist pair all the
// article -- {name, content ,category, subcategory}
