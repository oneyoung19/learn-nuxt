## 业务待做

- [x] `Footer` 链接
- [ ] `swiper`
- [ ] `Confirm` 组件封装 （确认下使用 `JSX`）
- [ ] `Header` 底部透明，滑动变色
- [ ] `Header` tab切换
- [ ] 添加大咖之声人物
- [ ] 页面滚动动画
- [ ] `Home` 首页动画
- [ ] 页面流程添加 `Dialog` 弹窗
- [ ] 开户流程联调
- [ ] 替换有白边间隔的图片
- [ ] 页面刷新时 保持数据持久化
- [ ] `typed.js`

## 构建待做

- [ ] 项目构建 `PM2` 托管
- [ ] 旧站打包不再打包 `zh-CN`，只打包 `zh-Hant` 和 `en`
- [ ] `nginx` 托管旧站，反向代理到新站。且 `/` 首页目录重定向到 `/zh-cn`
- [ ] 语言切换时，跳转旧站

## 项目规范待做

- [ ] 引入格式化
- [ ] `element-ui` 组件大写命名，（所有组件均要大写命名）

## 待处理

- `aos` 在 `tab` 切换时表现异常，**动画不正常显示**。即使将 [`v-show` 换成 `v-if`](https://github.com/michalsnik/aos/issues/169) 也有表现正常与不正常的 `tab`。关于 `tab` 的众多 [issues](https://github.com/michalsnik/aos/issues?q=tab)。

- `@formkit/auto-animate` 注入的 `v-auto-animate` 设置 `v-show` 不起作用，设置 `v-if` 有点浪费性能，有没有优化空间。
  
