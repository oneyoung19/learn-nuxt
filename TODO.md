## 业务待做

- [x] `Footer` 链接
- [x] `swiper` 引入
- [ ] ***`Confirm` 组件封装 （确认下使用 `JSX`）***
- [ ] `Header` 底部透明，滑动变色
- [ ] *`Header` tab切换*
- [ ] 大咖人物滚动优化
- [x] 页面滚动动画
- [ ] `Home` 首页动画
- [ ] 开屏动画
- [ ] `svg` 绘图
- [x] 页面流程添加 `Dialog` 弹窗
- [x] 替换有白边间隔的图片
- [ ] *页面刷新时 保持数据持久化*
- [ ] *项目启动页*
- [x] `typed.js`
- [ ] 引入 `Poppins, Poppins` 字体
- [ ] 各个页面上的按钮点击
- [x] 开户流程联调
- [x] `cookie` 提示
- [x] `TDK` 使用 `useHead`
- [x] 添加大咖之声人物 沿用老官网 `src/common/js/enum.js`
- [x] 下拉框加国家和搜索
- [x] 替换 `favicon`
- [x] `404` 页面
- [ ] 大屏下的 `swiper` 滚动样式是否兼容
- [ ] 检索项目中的所有 `TODO` 项

## 构建待做

- [ ] `SSR vs SSG`
- [ ] 项目构建 `PM2` 托管
- [ ] 旧站打包不再打包 `zh-CN`，只打包 `zh-Hant` 和 `en`
- [ ] `nginx` 托管旧站，反向代理到新站。且 `/` 首页目录重定向到 `/zh-cn`
- [ ] 语言切换时，跳转旧站
- [ ] `yarn generate` 生成的 `200.html` 作用是什么

## 项目规范待做

- [ ] 引入格式化
- [ ] `element-ui` 组件大写命名，（所有组件均要大写命名）

## 待处理

- `aos` 在 `tab` 切换时表现异常，**动画不正常显示**。即使将 [`v-show` 换成 `v-if`](https://github.com/michalsnik/aos/issues/169) 也有表现正常与不正常的 `tab`。关于 `tab` 的众多 [issues](https://github.com/michalsnik/aos/issues?q=tab)。

- `aos` 对于 `svg` 元素，在初始化时，就会添加上 `aos-animate` 类，以造成 `svg` 动画失效。**可以搜索该项目中的 `icon-arrow-circle` 类名以查看具体代码**。

- `@formkit/auto-animate` 注入的 `v-auto-animate` 设置 `v-show` 不起作用，设置 `v-if` 有点浪费性能，有没有优化空间。
  
