module.exports = {
  base: "/astroboy/",
  title: "Astroboy",
  description:
    "Astroboy（阿童木）is a Nodejs SFB(Separation of Front and Back ends) framework, built on koa2.",
  head: [
    ["link", { rel: "icon", href: `https://img.yzcdn.cn/v2/image/yz_fc.ico` }]
  ],
  plugins: ["@vuepress/back-to-top"],
  themeConfig: {
    nav: [
      {
        text: "Github",
        link: "https://github.com/astroboy-lab/astroboy"
      }
    ],
    sidebarDepth: 0,
    sidebar: [
      {
        title: "新手指南",
        collapsable: false,
        children: [
          ["/新手指南/astroboy-cli", "astroboy-cli"],
          ["/新手指南/Astroboy 和 Koa", "Astroboy 和 Koa"]
        ]
      },
      {
        title: "框架设计",
        collapsable: false,
        children: [
          ["/设计思想/框架分层", "框架分层"],
          ["/设计思想/插件化", "插件化"],
          ["/设计思想/约定优于配置", "约定优于配置"]
        ]
      },
      {
        title: "基础功能",
        collapsable: false,
        children: [
          ["/基础功能/目录结构", "目录结构"],
          ["/基础功能/配置", "配置"],
          ["/基础功能/Router", "Router"],
          ["/基础功能/Controller", "Controller"],
          ["/基础功能/Service", "Service"],
          ["/基础功能/中间件", "中间件"],
          ["/基础功能/插件", "插件"],
          ["/基础功能/内置对象", "内置对象"]
        ]
      },
      {
        title: "进阶",
        collapsable: false,
        children: [["/进阶/运行时配置输出", "运行时配置输出"]]
      }
    ]
  }
};
