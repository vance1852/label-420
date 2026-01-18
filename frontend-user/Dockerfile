# 构建阶段
FROM --platform=$BUILDPLATFORM node:20-alpine AS builder

WORKDIR /app

# 复制组件库源码
COPY packages/sim-ui ./packages/sim-ui

# 复制文档站点
COPY frontend-user/package.json frontend-user/tsconfig.json frontend-user/vite.config.ts frontend-user/index.html ./frontend-user/
COPY frontend-user/src ./frontend-user/src
COPY frontend-user/public ./frontend-user/public

# 进入文档站点目录安装依赖
WORKDIR /app/frontend-user

# 修改 package.json 移除 workspace 依赖
RUN sed -i 's/"sim-ui": "workspace:\*"/"vue": "^3.4.27"/g' package.json

# 安装依赖
RUN npm install

# 修改 vite.config.ts 中的 alias 路径
RUN sed -i 's|"../packages/sim-ui|"/app/packages/sim-ui|g' vite.config.ts

# 构建
RUN npm run build

# 生产阶段
FROM nginx:alpine

# 复制构建产物
COPY --from=builder /app/frontend-user/dist /usr/share/nginx/html

# 复制 nginx 配置
COPY frontend-user/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
