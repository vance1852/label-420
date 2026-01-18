<template>
  <div class="code-block">
    <div class="code-block__header">
      <span class="code-block__lang">{{ lang }}</span>
      <button class="code-block__copy" @click="copyCode" :class="{ copied }">
        <span v-if="copied">✓ 已复制</span>
        <span v-else>复制代码</span>
      </button>
    </div>
    <pre
      class="code-block__pre"
    ><code class="code-block__code" v-html="highlightedCode"></code></pre>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = defineProps<{
  code: string;
  lang?: string;
}>();

const copied = ref(false);

const copyCode = async () => {
  await navigator.clipboard.writeText(props.code);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
};

// 简单的语法高亮
const highlightedCode = computed(() => {
  let code = props.code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // 关键字
  const keywords = [
    "import",
    "export",
    "from",
    "const",
    "let",
    "var",
    "function",
    "return",
    "if",
    "else",
    "default",
    "type",
    "interface",
    "as",
  ];
  keywords.forEach((kw) => {
    code = code.replace(
      new RegExp(`\\b(${kw})\\b`, "g"),
      '<span class="token keyword">$1</span>',
    );
  });

  // 字符串
  code = code.replace(
    /(["'`])([^"'`]*)\1/g,
    '<span class="token string">$1$2$1</span>',
  );

  // 注释
  code = code.replace(/(\/\/.*$)/gm, '<span class="token comment">$1</span>');

  // 函数调用
  code = code.replace(
    /\b([a-zA-Z_]\w*)\s*\(/g,
    '<span class="token function">$1</span>(',
  );

  return code;
});
</script>

<style scoped>
.code-block {
  border-radius: 8px;
  overflow: hidden;
  background: #1e1e1e;
  margin: 0;
}

.code-block__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: #2d2d2d;
  border-bottom: 1px solid #3d3d3d;
}

.code-block__lang {
  font-size: 12px;
  color: #858585;
  text-transform: uppercase;
}

.code-block__copy {
  padding: 4px 12px;
  font-size: 12px;
  color: #858585;
  background: transparent;
  border: 1px solid #4d4d4d;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.code-block__copy:hover {
  color: #fff;
  border-color: #666;
}

.code-block__copy.copied {
  color: #67c23a;
  border-color: #67c23a;
}

.code-block__pre {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.6;
}

.code-block__code {
  font-family: "Fira Code", "Monaco", "Menlo", "Consolas", monospace;
  color: #d4d4d4;
}

:deep(.token.keyword) {
  color: #569cd6;
}

:deep(.token.string) {
  color: #ce9178;
}

:deep(.token.comment) {
  color: #6a9955;
}

:deep(.token.function) {
  color: #dcdcaa;
}

@media (max-width: 768px) {
  .code-block__header {
    padding: 6px 12px;
  }

  .code-block__lang {
    font-size: 11px;
  }

  .code-block__copy {
    padding: 4px 8px;
    font-size: 11px;
  }

  .code-block__pre {
    padding: 12px;
    font-size: 12px;
  }
}
</style>
