# Sim UI - Vue3 组件库

基于 pnpm + Vue3 实现的 UI 组件库，支持全量引入和按需引入。

## How to Run

```bash
# 安装依赖
pnpm install

# 开发模式（启动文档站点）
docker-compose up --build -d

# 或本地开发
cd frontend-user
pnpm install
pnpm dev
```

## Services

| 服务          | 端口 | 描述           |
| ------------- | ---- | -------------- |
| frontend-user | 8081 | 组件库文档站点 |

## 测试账号

本项目为 UI 组件库，无需登录账号。

## 题目内容

基于 pnpm + vue3 实现一个UI库，组件命名规则：Sim+功能，例如按钮SimButton，构建产出支持用户全量以及按需引入。

---

## 项目介绍

Sim UI 是一个轻量级的 Vue3 组件库，具有以下特点：

- 🚀 基于 Vue 3 + TypeScript 开发
- 📦 支持全量引入和按需引入（Tree Shaking）
- 🎨 简洁美观的设计风格
- 📝 完善的文档和示例
- 🔧 使用 Vite 构建，开发体验极佳

## 组件列表

| 组件      | 描述         |
| --------- | ------------ |
| SimButton | 按钮组件     |
| SimInput  | 输入框组件   |
| SimCard   | 卡片组件     |
| SimAlert  | 警告提示组件 |
| SimModal  | 模态框组件   |
| SimTag    | 标签组件     |

## 使用方式

### 全量引入

```typescript
import { createApp } from "vue";
import SimUI from "sim-ui";
import "sim-ui/dist/style.css";

const app = createApp(App);
app.use(SimUI);
app.mount("#app");
```

### 按需引入

```typescript
import { SimButton, SimInput } from "sim-ui";
import "sim-ui/dist/style.css";

// 在组件中使用
export default {
  components: {
    SimButton,
    SimInput,
  },
};
```

## 目录结构

```
label-00420/
├── frontend-user/          # 组件库文档站点
│   ├── src/
│   │   ├── components/     # 示例组件
│   │   └── views/          # 页面
│   └── Dockerfile
├── packages/
│   └── sim-ui/             # 组件库源码
│       ├── src/
│       │   ├── components/ # 组件源码
│       │   ├── styles/     # 样式文件
│       │   └── index.ts    # 入口文件
│       └── package.json
├── docker-compose.yml
├── pnpm-workspace.yaml
└── package.json
```
