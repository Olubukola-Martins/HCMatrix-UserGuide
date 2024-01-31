import {
  wavingHand,
  gear,
  file,
  clipBoard,
  moneyBag,
  briefCase,
  alarmClock,
} from "../assets/categories";

// const categoryData = {
//   svg: wavingHand,
//   title: "Root Category",
//   description: "Top-level category",
//   categories: [
//     {
//       svg: wavingHand,
//       title: "Sign up and sign in",
//       description:
//         "Help your user learn more about the basic of your product and how they can get started",
//       articlesNo: 7,
//       articles: [
//         {
//           title: "How to create an account",
//           description: "learn about how to create an account",
//         },
//         {
//           title: "How to create an account",
//           description: "learn about how to create an account",
//         },
//         {
//           title: "How to create an account",
//           description: "learn about how to create an account",
//         },
//       ],
//       status: "active",
//     },
//     {
//       title: "Sub Category 1",
//       description: "First-level subcategory",
//       articlesNo: 3,
//       subCategories: [
//         {
//           title: "Sub Sub Category 1.1",
//           description: "Second-level sub-subcategory",
//           articlesNo: 2,
//           articles: [
//             {
//               title: "Article 1.1.1",
//               description: "Description for Article 1.1.1",
//             },
//             {
//               title: "Article 1.1.2",
//               description: "Description for Article 1.1.2",
//             },
//           ],
//           subSubCategories: [
//             {
//               title: "Sub Sub Sub Category 1.1.1",
//               description: "Third-level sub-sub-subcategory",
//               articlesNo: 2,
//               articles: [
//                 {
//                   title: "Article 1.1.1.1",
//                   description: "Description for Article 1.1.1.1",
//                 },
//                 {
//                   title: "Article 1.1.1.2",
//                   description: "Description for Article 1.1.1.2",
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       title: "Sub Category 2",
//       description: "Another first-level subcategory",
//       articlesNo: 2,
//       articles: [
//         {
//           title: "Article 2.1",
//           description: "Description for Article 2.1",
//         },
//         {
//           title: "Article 2.2",
//           description: "Description for Article 2.2",
//         },
//       ],
//     },
//   ],
//   status: "active",
// };

const categoryData = [
  // {
  //   svg: wavingHand,
  //   pageTitle: "Sign up and sign in",
  //   pageDescription:
  //     "Help your user learn more about the basic of your product and how they can get started",
  //   articleNo: 3,
  //   categories: [
  //     {
  //       categoryName: "Sign up and sign in",
  //       categoryDescription: "Learn about how to create an account",
  //       subCategories: [
  //         {
  //           subCategoryName: "How to Configure Company settings",
  //           subCategoryDescription: "Learn how to set up your Company Settings",
  //           article: [],
  //         },
  //       ],
  //     },
  //   ],
  //   articles: [
  //     {
  //       title: "How to create an account",
  //       description: "learn about how to create an account",
  //     },
  //     {
  //       title: "How to create an account",
  //       description: "learn about how to create an account",
  //     },
  //     {
  //       title: "How to create an account",
  //       description: "learn about how to create an account",
  //     },
  //   ],
  //   status: "active",
  // },
  {
    svg: gear,
    pageTitle: "Settings",
    pageDescription:
      "Help your user learn more about the basic of your product and how they can get started",
    articleNo: 10,
    categories: [
      {
        categoryName: "General Settings",
        categoryDescription: "Company - Holiday - Projects",
        subCategories: [
          {
            subCategoryName: "How to Configure Company settings",
            subCategoryDescription: "Learn how to set up your Company Settings",
            article: [
              {
                articleTitle: "How to configure company settings?",
                articleDescription:
                  "Learn about how to set up the company settings.",
                articleContent: {
                  intro:
                    "This guide will walk you through the quick and easy steps, so you can start benefiting from all that HCMATRIX has to offer. Let’s get started",
                  miniHeader: "To configure company settings",
                  steps: [
                    {
                      type: "text",
                      content: [
                        "Click on the ⚙️ settings icon from the dashboard, you will be provided with a screen that contains a list of settings You will be provided with the screen shown below 👇",
                      ],
                    },
                    { type: "image", content: ["url"] },
                    {
                      type: "text",
                      content: [
                        "Click on Basic settings in the screen above, you will be provided with a dropdown, search for company under General.",
                      ],
                    },
                    { type: "image", content: ["url", "url"] },
                    {
                      type: "text",
                      content: [
                        "Click on the “company”, you will be provided with a field input where you will need to input the necessary information about your company.",
                        "Click on the “upload” icon, to upload your company logo.",
                        "Click on the “Save” button to save your company logo",
                      ],
                    },
                    { type: "image", content: ["url", "url"] },
                    {
                      type: "text",
                      content: [
                        "Fill in the necessary information for the company’s information.",
                        "Click on the “Save” button to save your company information.",
                      ],
                    },
                    { type: "image", content: ["url", "url", "url"] },
                    {
                      type: "text",
                      content: [
                        "Fill in the necessary information for the company’s information.",
                        "Click on the “Save” button to save your company information.",
                      ],
                    },
                    { type: "image", content: ["url", "url", "url"] },
                    {
                      type: "note",
                      content: [
                        "Note: If you get an error message like the screen shown below, that means you have uploaded the wrong document file format/type. The acceptable file format/type to upload for the company’s document are pdf and word Format.",
                      ],
                    },
                    { type: "image", content: ["url"] },
                    {
                      type: "note",
                      content: [
                        "Note: once you have uploaded the necessary details you will get a “successful” notification message, shown below.",
                      ],
                    },
                    { type: "image", content: ["url"] },
                  ],
                },
              },
            ],
          },
        ],
      },
    ],
    status: "active",
  },
];

export { categoryData };
