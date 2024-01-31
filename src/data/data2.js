const subCategories = "dummy";

const categoryData = {
  svg: wavingHand,
  title: "Root Category",
  description: "Top-level category",
  categories: [
    {
      svg: subCategorySvg,
      title: "Sub Category 1",
      description: "First-level subcategory",
      articlesNo: 3,
      subCategories: [
        {
          svg: subSubCategorySvg,
          title: "Sub Sub Category 1.1",
          description: "Second-level sub-subcategory",
          articlesNo: 2,
          articles: [
            {
              title: "Article 1.1.1",
              description: "Description for Article 1.1.1",
            },
            {
              title: "Article 1.1.2",
              description: "Description for Article 1.1.2",
            },
          ],
          subSubCategories: [
            {
              svg: subSubSubCategorySvg,
              title: "Sub Sub Sub Category 1.1.1",
              description: "Third-level sub-sub-subcategory",
              articlesNo: 2,
              articles: [
                {
                  title: "Article 1.1.1.1",
                  description: "Description for Article 1.1.1.1",
                },
                {
                  title: "Article 1.1.1.2",
                  description: "Description for Article 1.1.1.2",
                },
              ],
            },
            // Add more sub-sub-subcategories as needed
          ],
        },
        // Add more sub-subcategories as needed
      ],
    },
    {
      svg: subCategorySvg,
      title: "Sub Category 2",
      description: "Another first-level subcategory",
      articlesNo: 2,
      articles: [
        {
          title: "Article 2.1",
          description: "Description for Article 2.1",
        },
        {
          title: "Article 2.2",
          description: "Description for Article 2.2",
        },
      ],
      // No subcategories for Sub Category 2
    },
    // Add more categories as needed
  ],
  status: "active",
};
