# YDJ_APP


> 伊的家app，基于Vue + MySQL + Mint-ui + js 

**项目工具**

| Option         | Tools                                   |
| -------------- | --------------------------------------- |
| 开发环境       | nodejs                                   |
| UI框架         | Mint-ui、animate.css、iconfont、         |
| JavaScript框架 | Vue.js                                   |
| 开发工具       | VSCode                                   |
| 前端构建工具   | webpack                                  |
| 包管理工具     | npm                                      |

**目录**

```
\根目录
├── README.md					项目说明文档
├── gulpfile.js					自动化构建任务
├── package.json				Node.js模块描述文件
├── package-lock.json			模块版本锁定文件
├── webpack.config.js			webpack配置文件
├── .gitignore					忽略文件目录
├── doc							文档资料
│	├──	screenshots					屏幕截图
│   └── iconfont					阿里巴巴矢量图标库文件
└── src							源文件
    ├── assets						资源
    │   ├── iconfont				字体图标库
    │   └── img						图片
    ├── components					模块
    │   ├── Home.vue					首页模块
    │   │   ├── HomeBanner.vue				首页轮播图模块
    │   │   ├── HomeCate.vue				首页分类模块
    │   │   ├── HomeLike.vue				首页猜你喜欢模块
    │   │   ├── HomePromotion.vue			首页抢购模块
    │   │   ├── HomeTitle.vue				首页小标题模块
    │   │   └── HomeCommend.vue				首页小七推荐模块
    │   ├── List.vue					列表页模块
    │   ├── Cart.vue					购物车页模块
    │   │   └── CartItem.vue				购物车单元模块
    │   ├── Category.vue				分类页模块
    │   │   └── CategoryList.vue			分类列表模块
    │   ├── Contact.vue					客服聊天页模块
    │   ├── Detail.vue					详情页模块
    │   ├── Master.vue					茶师茶页模块
    │   ├── Mine.vue					我的模块
    │   ├── Login.vue					登录页模块
    │   ├── Reg.vue						注册页模块
    │   └── BottomBar.vue				底部导航栏模块
    ├── router						路由
    ├── js							js文件夹
    ├── mock						json文件
    ├── plugins						插件
    ├── store						Vuex仓库
    ├── sass						sass文件
    ├── App.vue						项目入口组件
    ├── index.js					项目入口js
    └── template.html				项目入口文件
```