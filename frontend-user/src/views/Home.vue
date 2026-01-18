<template>
  <div class="home">
    <div class="hero">
      <div class="hero-badge">Vue 3 + TypeScript</div>
      <h1 class="hero-title">Sim UI</h1>
      <p class="hero-desc">
        一个简洁、优雅的 Vue 3 组件库，支持全量引入和按需引入
      </p>
      <div class="hero-actions">
        <sim-button
          type="primary"
          size="large"
          @click="$router.push('/button')"
        >
          开始使用 →
        </sim-button>
      </div>
    </div>

    <div class="features">
      <div
        class="feature-card"
        v-for="feature in features"
        :key="feature.title"
      >
        <div class="feature-icon">{{ feature.icon }}</div>
        <h3 class="feature-title">{{ feature.title }}</h3>
        <p class="feature-desc">{{ feature.desc }}</p>
      </div>
    </div>

    <h2 class="section-title">快速开始</h2>

    <div class="install-section">
      <h3 class="install-title">安装</h3>
      <CodeBlock code="npm install sim-ui" lang="bash" />
    </div>

    <div class="install-section">
      <h3 class="install-title">全量引入</h3>
      <p class="install-desc">
        如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。
      </p>
      <CodeBlock :code="fullImportCode" lang="typescript" />
    </div>

    <div class="install-section">
      <h3 class="install-title">按需引入</h3>
      <p class="install-desc">
        按需引入可以有效减少打包体积，推荐在生产环境使用。
      </p>
      <CodeBlock :code="partialImportCode" lang="typescript" />
    </div>

    <h2 class="section-title">组件总览</h2>
    <div class="component-grid">
      <router-link
        v-for="comp in components"
        :key="comp.name"
        :to="comp.path"
        class="component-card"
      >
        <div class="component-icon">{{ comp.icon }}</div>
        <div class="component-info">
          <h4>{{ comp.name }}</h4>
          <p>{{ comp.desc }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import CodeBlock from "../components/CodeBlock.vue";

const features = [
  {
    icon: "🚀",
    title: "Vue 3",
    desc: "基于 Vue 3 Composition API，享受最新特性",
  },
  { icon: "📦", title: "Tree Shaking", desc: "支持按需引入，有效减少打包体积" },
  { icon: "🎨", title: "优雅设计", desc: "简洁美观的设计风格，开箱即用" },
  {
    icon: "📝",
    title: "TypeScript",
    desc: "使用 TypeScript 编写，提供完整类型定义",
  },
];

const components = [
  { name: "Button 按钮", desc: "常用的操作按钮", icon: "🔘", path: "/button" },
  {
    name: "Input 输入框",
    desc: "基础表单输入组件",
    icon: "📝",
    path: "/input",
  },
  { name: "Card 卡片", desc: "信息聚合容器", icon: "🃏", path: "/card" },
  { name: "Alert 警告", desc: "重要提示信息", icon: "⚠️", path: "/alert" },
  { name: "Modal 模态框", desc: "对话框组件", icon: "💬", path: "/modal" },
  { name: "Tag 标签", desc: "标记和分类", icon: "🏷️", path: "/tag" },
];

const fullImportCode = `import { createApp } from 'vue'
import SimUI from 'sim-ui'
import 'sim-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(SimUI)
app.mount('#app')`;

const partialImportCode = `import { SimButton, SimInput } from 'sim-ui'
import 'sim-ui/dist/style.css'

// 在组件中直接使用
<template>
  <sim-button type="primary">按钮</sim-button>
  <sim-input v-model="value" placeholder="请输入" />
</template>`;
</script>

<style scoped>
.home {
  max-width: 100%;
}

.hero {
  text-align: center;
  padding: 60px 0 80px;
  background: linear-gradient(180deg, #fff 0%, var(--sim-bg-color) 100%);
  margin: -40px -40px 40px;
  border-radius: 0 0 24px 24px;
}

.hero-badge {
  display: inline-block;
  padding: 6px 16px;
  font-size: 13px;
  font-weight: 500;
  color: var(--sim-primary);
  background: var(--sim-primary-light);
  border-radius: 20px;
  margin-bottom: 20px;
}

.hero-title {
  font-size: 56px;
  font-weight: 700;
  background: linear-gradient(135deg, #409eff 0%, #66b1ff 50%, #a0cfff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
}

.hero-desc {
  font-size: 18px;
  color: var(--sim-text-secondary);
  margin-bottom: 32px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 48px;
}

.feature-card {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--sim-border-color);
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

.feature-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--sim-text-primary);
  margin-bottom: 8px;
}

.feature-desc {
  font-size: 13px;
  color: var(--sim-text-secondary);
  line-height: 1.5;
}

.install-section {
  margin-bottom: 32px;
}

.install-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--sim-text-primary);
  margin-bottom: 12px;
}

.install-desc {
  font-size: 14px;
  color: var(--sim-text-secondary);
  margin-bottom: 12px;
}

.component-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.component-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: #fff;
  border: 1px solid var(--sim-border-color);
  border-radius: 12px;
  transition: all 0.3s;
}

.component-card:hover {
  border-color: var(--sim-primary);
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.15);
}

.component-icon {
  font-size: 28px;
}

.component-info h4 {
  font-size: 15px;
  font-weight: 600;
  color: var(--sim-text-primary);
  margin-bottom: 4px;
}

.component-info p {
  font-size: 13px;
  color: var(--sim-text-secondary);
}

@media (max-width: 900px) {
  .features {
    grid-template-columns: repeat(2, 1fr);
  }
  .component-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 40px 16px 60px;
    margin: -24px -16px 32px;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-desc {
    font-size: 15px;
    padding: 0 16px;
  }

  .features {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .feature-card {
    padding: 16px;
  }

  .feature-icon {
    font-size: 24px;
  }

  .feature-title {
    font-size: 14px;
  }

  .feature-desc {
    font-size: 12px;
  }

  .component-grid {
    grid-template-columns: 1fr;
  }

  .component-card {
    padding: 16px;
  }
}

@media (max-width: 480px) {
  .features {
    grid-template-columns: 1fr;
  }
}
</style>
