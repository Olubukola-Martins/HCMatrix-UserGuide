// import { SubCategories } from "../sections";
import {
  wavingHand,
  gear,
  file,
  clipBoard,
  moneyBag,
  briefCase,
  alarmClock,
} from "../assets/user/categories";

import { pensive, relieved, smiling } from "../assets/common/review";

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

const article = [
  {
    category: "sign up and sign in",
    subcategory: "",
    leastSubcategory: "",
    articleTitle: "When we want the lord",
    articleDescription: "This is the bending",
    content: `<p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA7EAAAFiCAYAAAAgFl/xAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAIi4SURBVHhe7d0JoA1l/wfwr/fNLV7K0r/QQlkKKUtJklS0qbRYWrRKpYU3LQotVPIWibRIUimlpBLRIhISIiEhRQvRa0u9dF36z29mnnuemfPMOTP3nnPvObfvp37mmWeZ7ZzL+d1ZTqlt2379C0REREXgr7+i/5OTbEyidn+baV6v2rNnj1v6yy477U7IvFPn9IvFbuzevccKme5GXl6ePS/1u3btsut++OEnu++DDz7sLj89KlSoYE9lnUVhz70PYM857bBX06PdmvT66quvrGP5A8455xy3JmbYsGFo1aoVXn31VVxyySWeftWqVcPUqVOxdetWtGzZ0q5L5sMPP8Sff/5pr7NFixb5484880w88sgj+M9//oPrr78eK1asQNeuXe22VPjnP/9pT2Vb0+nwww+392/Lli1uTXTLli3D9OnTcfPNN7s1XnLcu3fvjqZNm+LAAw+06zZs2IB58+bhrrvusudNhg8fjlNOOQX169d3a6IpW7asPZV1FZa8j+S90KVLF7cmmlGjRqFNmzY49NBDcdBBB+HJJ59E48aNsWPHDrv9iCOOsKdR7bPPPth7773x+++/uzWZYeHChVizZg0uvPBCt6bgRo4cidatW+Owww7DkCFDcMYZZ6BevXpu69+H7Pv555+PW265BZMmTXJrw5kwYQIaNWqERYsW2a9Jv379cN9997mt2e0f7pSIiIgoaw0cONBO/C644ALs3LnTrXWsW7fOTkYlyR8wYIBbGyOJqZ98EJfEo06dOnYio6hkWNYjy5sxY4bbQn5y3CVZPfXUU+2EVELKiRLYTFS5cmW3FJ2MVQnrzz//bCcjQ4cOxS+//IJnn33Wri9JvvjiCztpkmQplW699da/ZQIrBg0aZL+HbrvtNrcmPElcJYGV10QS2pKSwAqeiSUioiLjPxMaRrIxidr9baZ5vUrOljp4JjaMTDoTKy677DL06tXLLvv7yVnB1157zT5GcoZu+fLldn3dunXts4QjRoywz5IpalmSEL/44ouetpdfftlOboWcZUylknQmtqAy6UysnNk/8cQT7TOMmzZtcmvDkQRWzrrOnj3b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es/E7t6dZ9fFzrqqM7OxeTkz++OPP9n9Bw9+3F0PERERFRTPxBIREREREVHWYBJLREREREREWYNJLBEREREREWUNJrFERJRyct9oQUUda+rvr4ufdwsWvS2orJjaE/UztREREVHhMIklIiIiIiKirMEkloiIiIiIiLIGk1giIiIiIiLKGkxiiYiIiIiIKGswiSUioqyQqock6YvxLjNW1utjD2myJ7ZYnXfq0Mv+NiIiIiosJrFERERERESUNZjEEhERERERUdZgEktERERERERZg0ksERERERERZQ0msURElLVMD03y1+nzYZ6x5O3vlE11Vsn5U+vj7x/rS0RERKnCJJaIiIiIiIiyBpNYIiIiIiIiyhpMYomIiIiIiChrMIklIiIiIiKirMEkloiIMkaqH4SUaHnetvgHMYUZq7qYxgVNiYiIqHCYxBIREREREVHWYBJLREREREREWYNJLBEREREREWUNJrFERJTxTPeThq1T9CZvv8TLUeWgqU7qvBGrJyIiotRgEktERERERERZg0ksERERERERZQ0msURERERERJQ1mMQSERERERFR1mASS0REJVKYhynpfVTZXGdPkvSJPchJMfUnIiKiwmESS0RERERERFmDSSwRERERERFlDSaxRERERERElDWYxBIREREREVHWYBJLREQZzfRQpLB1it4UdXmJlxvfx19n6kNEREQFxySWiIiIiIiIsgaTWCIiIiIiIsoaTGKJiIiIiIgoazCJJSIiIiIioqzBJJaIiDJCuh58pC9WX4dpfYkewuRvM0/NbURERJQ6TGKJiIiIiIgoazCJJSIiIiIioqzBJJaIiIiIiIiyBpNYIiLKev57T6Pci5ro/lV/W6xP8BglfgwRERGlApNYIiIiIiIiyhpMYomIiIiIiChrMIklIiIiIiKirMEkloiIiIiIiLIGk1giIspYpociFfRBSfq4WDl4+bGpPTHUx0/9dYreRkRERIXDJJaIiIiIiIiyBpNYIiIiIiIiyhpMYomIiIiIiChrMIklIiIiIiKirMEkloiIslqiByaZmkz9VZ1/qgS1m/rH18XaiIiIqPCYxBIREREREVHWYBJLREREREREWYNJLBEREREREWUNJrFERERERESUNZjEEhFRsdMfjFRYpmWZl+/UJVp3omWpptj8X56ymqoyERERpQaTWCIiIiIi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JSIiIiIioqzBJJaIiIiIiIiyBpNYIiL6W1APXTI/fClWF9wvvo9wyt6+qi6+HxERERUWk1giIiIiIiLKGkxiiYiIiIiIKGswiSUiIiIiIqKswSSWiIgKJeq9npl0b2iybfG36/NSNs3rdYqpjoiIiAqGSSwRERERERFlDSaxRERERERElDWYxBIREREREVHWYBJLREREREREWYNJLBERlRjJHqCk2pM9fCmoLJLNC1VnaiMiIqLCYRJLREREREREWYNJLBEREREREWUNJrFERERERESUNZjEEhERERERUdZgEktERBkp0QOUvGW3oIm1O9NED1gKXq65LEzzKvxUnamNiIiIomMSS0RERERERFmDSSwRERERERFlDSaxRERERERElDWYxBIREREREVHWYBJLRERFJpMebqRvS5jtkj56N2c+fpxUqTZTOxERERUOk1giIiIiIiLKGkxiiYiIiIiIKGswiSUiIiIiIqKswSSWiIiIiIiIsgaTWCIiyghF9RCkZOvRm00PZ4qfN/dTVH1QOxEREUXDJJaIiIiIiIiyBpNYIiIiIiIiyhpMYomIiIiIiChrMIklIqKspd9mWpB7UvW6oLLDO29aVqlSpex6FURERJQeTGKJiIiIiIgoazCJJSIiIiIioqxRatu2X3nNU0i7d+dhz57dvEyMiEgT5e/ERH39bfHzbsESa4tV6v1VWaZ62TuNteth1Vp/1++xyrCnTtlpU/O7d+92pzK/256X8q5du+z5vDynfdcu59+NjRv/a7c/88xIe91ERERUcDwTG4J8cNm160/rA0ie+wGHiIiIiIiIigOT2BDy8nKZvBIRFaOC/BWc6r+3Tcvz18nDnRTVJtNUbwsREdHfGZPYJHj2lYiIiIiIKHMwiU1C7mUiIiIiIiKizMAkNgmehSUiIiIiIsocTGKJiIiIiIgoazCJJSKirJLsCpkwV9DoXbz9Y2XTcsLUycOd9Ac8Cf88ERERFRyTWCIiIiIiIsoaTGKJiIiIiIgoazCJJSIiIiIioqzBJJaIiIiIiIiyBpNYIiLKOGEezqQL2z9MP72Pqb/UJarXg4iIiFKPSSwRERERERFlDSaxRERERERElDWYxBIREREREVHWYBJLREQllrov1XR/ql4X9v7VUqVKuSVnjD4fRPqFXT4RERElxySWiIiIiIiIsgaTWCIiIiIi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" width="516" height="193"></p><p>i am testing something</p><p>and i see another thins&nbsp;</p><p><br></p>`,
  },
];

export { categories, reviews, article };

// Category -- subcategory -- articles -- content
// category -- {name,title , description , article: [name, description, subcategories]}
// so the logic would be to map the articles and find the categories
// if subcategories is null , then route the article names to the articles
// if it exist pair all the
// article -- {name, content ,category, subcategory}
