<template>
  <div class="demo-block">
    <div class="demo-block__preview">
      <slot />
    </div>
    <div class="demo-block__footer">
      <div class="demo-block__description" v-if="description">
        {{ description }}
      </div>
      <div class="demo-block__actions">
        <button class="demo-block__action" @click="toggleCode">
          <span class="demo-block__action-icon">{{
            showCode ? "▲" : "▼"
          }}</span>
          <span>{{ showCode ? "隐藏代码" : "查看代码" }}</span>
        </button>
      </div>
    </div>
    <transition name="slide">
      <div v-show="showCode" class="demo-block__code">
        <CodeBlock :code="code" :lang="lang" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "./CodeBlock.vue";

defineProps<{
  code: string;
  lang?: string;
  description?: string;
}>();

const showCode = ref(false);

const toggleCode = () => {
  showCode.value = !showCode.value;
};
</script>

<style scoped>
.demo-block {
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  margin-bottom: 24px;
  overflow: hidden;
  transition: all 0.3s;
}

.demo-block:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.demo-block__preview {
  padding: 24px;
  background: #fff;
}

.demo-block__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-top: 1px solid #e4e7ed;
  background: #fafafa;
}

.demo-block__description {
  font-size: 14px;
  color: #606266;
}

.demo-block__actions {
  display: flex;
  gap: 8px;
}

.demo-block__action {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 13px;
  color: #409eff;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 4px;
}

.demo-block__action:hover {
  background: #ecf5ff;
}

.demo-block__action-icon {
  font-size: 10px;
  transition: transform 0.3s;
}

.demo-block__code {
  border-top: 1px solid #e4e7ed;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  max-height: 1000px;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

@media (max-width: 768px) {
  .demo-block__preview {
    padding: 16px;
  }

  .demo-block__footer {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    padding: 12px;
  }

  .demo-block__description {
    font-size: 13px;
  }

  .demo-block__action {
    padding: 8px 12px;
    font-size: 12px;
  }
}
</style>
