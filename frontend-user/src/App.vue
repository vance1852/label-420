<template>
  <div class="app">
    <!-- 移动端头部 -->
    <header class="mobile-header">
      <button class="menu-btn" @click="sidebarOpen = !sidebarOpen">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="mobile-logo">
        <div class="logo-icon">S</div>
        <span>Sim UI</span>
      </div>
    </header>

    <!-- 遮罩层 -->
    <div
      class="sidebar-overlay"
      :class="{ active: sidebarOpen }"
      @click="sidebarOpen = false"
    ></div>

    <aside class="sidebar" :class="{ open: sidebarOpen }">
      <div class="logo">
        <div class="logo-icon">S</div>
        <div class="logo-text">
          <h1>Sim UI</h1>
          <span>Vue3 组件库</span>
        </div>
      </div>
      <nav class="nav">
        <router-link to="/" class="nav-item" @click="sidebarOpen = false">
          <span class="nav-icon">🏠</span>
          首页
        </router-link>
        <div class="nav-group">
          <div class="nav-group-title">基础组件</div>
          <router-link
            to="/button"
            class="nav-item"
            @click="sidebarOpen = false"
          >
            <span class="nav-icon">🔘</span>
            Button 按钮
          </router-link>
          <router-link
            to="/input"
            class="nav-item"
            @click="sidebarOpen = false"
          >
            <span class="nav-icon">📝</span>
            Input 输入框
          </router-link>
          <router-link to="/tag" class="nav-item" @click="sidebarOpen = false">
            <span class="nav-icon">🏷️</span>
            Tag 标签
          </router-link>
        </div>
        <div class="nav-group">
          <div class="nav-group-title">数据展示</div>
          <router-link to="/card" class="nav-item" @click="sidebarOpen = false">
            <span class="nav-icon">🃏</span>
            Card 卡片
          </router-link>
          <router-link
            to="/alert"
            class="nav-item"
            @click="sidebarOpen = false"
          >
            <span class="nav-icon">⚠️</span>
            Alert 警告
          </router-link>
        </div>
        <div class="nav-group">
          <div class="nav-group-title">反馈组件</div>
          <router-link
            to="/modal"
            class="nav-item"
            @click="sidebarOpen = false"
          >
            <span class="nav-icon">💬</span>
            Modal 模态框
          </router-link>
        </div>
      </nav>
      <div class="sidebar-footer">
        <span>v1.0.0</span>
      </div>
    </aside>
    <main class="main">
      <div class="main-content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const sidebarOpen = ref(false);
</script>

<style scoped>
.app {
  display: flex;
  min-height: 100vh;
}

/* 移动端头部 */
.mobile-header {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: #fff;
  border-bottom: 1px solid var(--sim-border-color);
  padding: 0 16px;
  align-items: center;
  gap: 12px;
  z-index: 200;
}

.menu-btn {
  width: 32px;
  height: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.menu-btn span {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--sim-text-primary);
  border-radius: 1px;
  transition: all 0.3s;
}

.mobile-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.mobile-logo .logo-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #409eff 0%, #66b1ff 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
}

.mobile-logo span {
  font-size: 16px;
  font-weight: 600;
  color: var(--sim-text-primary);
}

/* 遮罩层 */
.sidebar-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 150;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s,
    visibility 0.3s;
  pointer-events: none;
}

.sidebar-overlay.active {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.sidebar {
  width: 280px;
  background: #fff;
  border-right: 1px solid var(--sim-border-color);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 200;
  transition: transform 0.3s ease;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 24px;
  border-bottom: 1px solid var(--sim-border-color);
}

.logo-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #409eff 0%, #66b1ff 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
}

.logo-text h1 {
  font-size: 18px;
  color: var(--sim-text-primary);
  margin-bottom: 2px;
}

.logo-text span {
  font-size: 12px;
  color: var(--sim-text-secondary);
}

.nav {
  flex: 1;
  padding: 16px 0;
  overflow-y: auto;
}

.nav-group {
  margin-bottom: 8px;
}

.nav-group-title {
  padding: 12px 24px 8px;
  font-size: 12px;
  font-weight: 600;
  color: var(--sim-text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 24px;
  font-size: 14px;
  color: var(--sim-text-regular);
  transition: all 0.2s;
  border-left: 3px solid transparent;
}

.nav-icon {
  font-size: 16px;
}

.nav-item:hover {
  color: var(--sim-primary);
  background-color: var(--sim-primary-light);
}

.nav-item.router-link-active {
  color: var(--sim-primary);
  background-color: var(--sim-primary-light);
  border-left-color: var(--sim-primary);
  font-weight: 500;
}

.sidebar-footer {
  padding: 16px 24px;
  border-top: 1px solid var(--sim-border-color);
  font-size: 12px;
  color: var(--sim-text-secondary);
}

.main {
  flex: 1;
  margin-left: 280px;
  min-height: 100vh;
  background: var(--sim-bg-color);
}

.main-content {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px;
}

/* 平板响应式 */
@media (max-width: 1024px) {
  .sidebar {
    width: 240px;
  }

  .main {
    margin-left: 240px;
  }

  .main-content {
    padding: 32px 24px;
  }
}

/* 移动端响应式 */
@media (max-width: 768px) {
  .mobile-header {
    display: flex;
  }

  .sidebar-overlay {
    display: block;
  }

  .sidebar {
    transform: translateX(-100%);
    width: 280px;
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .main {
    margin-left: 0;
    padding-top: 56px;
  }

  .main-content {
    padding: 24px 16px;
  }
}
</style>
