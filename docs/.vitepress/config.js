module.exports = {
  lang: "en-AU",
  title: "zDataTable",
  description: "Just playing around",

  themeConfig: {
    // repo: "zafaralam/zafaralam.github.io",
    docsDir: "docs",
    lastUpdated: "Last Updated",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Guide",
        link: "/guide/what-is-zdatatable",
        activeMatch: "^/guide/",
      },
      { text: "Api Reference" },
      { text: "Release Notes" },
      { text: "Privacy Policy", link: "/privacy-policy" },
    ],
    sidebar: {
      "/guide/": getGuideSidebar(),
      "/": getGuideSidebar(),
    },
  },
};

function getGuideSidebar() {
  return [
    {
      text: "Introduction",
      children: [
        {
          text: "What is zDataTable?",
          link: "/guide/what-is-zdatatable",
        },
        {
          text: "Get Started",
          link: "/guide/get-started",
        },
      ],
    },
  ];
}
