# supermall是一个小商城项目
## 主要实现功能：商品展示、购物车、我的、分类、商品详情页等
## 项目中的图片和数据均请求本地Json文件
### 项目目录介绍
#### assets/存放CSS文件、img文件
#### components/common/存放可复用组件，不仅本项目可用，其它项目也可以使用
#### components/content/存放本项目相关组件
#### network/对数据请求进行封装，request.js使用axios对端口、拦截器进行配置
#### network/category.js detail.js home.js分别对不同组件内的数据请求进行封装
#### router/index.js 配置路由
#### store/index.js 配置vuex  actions.js getters.js mutations.js等文件是将vuex的相关属性进行抽离
#### views/各大组件保存位置

# 安装项目依赖
  npm install

# 运行项目
  npm run serve
