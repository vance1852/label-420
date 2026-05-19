<template>
  <div class="switch-demo">
    <div class="page-header">
      <h1>Switch 开关</h1>
      <p>滑动开关组件，用于切换布尔值状态。</p>
    </div>

    <h2 class="section-title">基础用法</h2>
    <DemoBlock
      description="使用 v-model 绑定布尔值，点击切换状态"
      :code="basicCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-switch v-model="value1" />
        <span class="demo-label">{{ value1 ? '开启' : '关闭' }}</span>
      </div>
    </DemoBlock>

    <h2 class="section-title">自定义颜色</h2>
    <DemoBlock
      description="使用 activeColor 和 inactiveColor 自定义开关颜色"
      :code="colorCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-switch v-model="value2" active-color="#67c23a" inactive-color="#ff4949" />
        <sim-switch v-model="value3" active-color="#13ce66" />
      </div>
    </DemoBlock>

    <h2 class="section-title">文字描述</h2>
    <DemoBlock
      description="使用 activeText 和 inactiveText 设置开关的文字描述"
      :code="textCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-switch v-model="value4" active-text="开" inactive-text="关" />
      </div>
    </DemoBlock>

    <h2 class="section-title">不同尺寸</h2>
    <DemoBlock
      description="使用 size 属性设置开关尺寸，支持 default/small/large"
      :code="sizeCode"
      lang="vue"
    >
      <div class="demo-row" style="align-items: center">
        <sim-switch v-model="value5" size="small" />
        <sim-switch v-model="value5" />
        <sim-switch v-model="value5" size="large" />
      </div>
    </DemoBlock>

    <h2 class="section-title">禁用状态</h2>
    <DemoBlock
      description="使用 disabled 属性禁用开关"
      :code="disabledCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-switch v-model="value6" disabled />
        <sim-switch :model-value="true" disabled />
      </div>
    </DemoBlock>

    <h2 class="section-title">API</h2>
    <h3 style="font-size: 16px; margin: 16px 0 12px">属性</h3>
    <table class="api-table">
      <thead>
        <tr>
          <th>属性名</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>modelValue</code></td>
          <td>当前值，支持 v-model</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td>是否禁用</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>activeColor</code></td>
          <td>开启时的颜色</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td><code>主题色</code></td>
        </tr>
        <tr>
          <td><code>inactiveColor</code></td>
          <td>关闭时的颜色</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td><code>#dcdfe6</code></td>
        </tr>
        <tr>
          <td><code>activeText</code></td>
          <td>开启文字</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td><code>''</code></td>
        </tr>
        <tr>
          <td><code>inactiveText</code></td>
          <td>关闭文字</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td><code>''</code></td>
        </tr>
        <tr>
          <td><code>size</code></td>
          <td>大小</td>
          <td><span class="tag-type tag-type--string">'default' | 'small' | 'large'</span></td>
          <td><code>default</code></td>
        </tr>
      </tbody>
    </table>

    <h3 style="font-size: 16px; margin: 16px 0 12px">事件</h3>
    <table class="api-table">
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>change</code></td>
          <td>开关状态变化时触发</td>
          <td><code>(value: boolean)</code></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DemoBlock from "../components/DemoBlock.vue";

const value1 = ref(true);
const value2 = ref(true);
const value3 = ref(false);
const value4 = ref(true);
const value5 = ref(true);
const value6 = ref(false);

const basicCode = `<template>
  <sim-switch v-model="value" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref(true)
<\/script>`;

const colorCode = `<template>
  <sim-switch v-model="value" active-color="#67c23a" inactive-color="#ff4949" />
</template>`;

const textCode = `<template>
  <sim-switch v-model="value" active-text="开" inactive-text="关" />
</template>`;

const sizeCode = `<template>
  <sim-switch v-model="value" size="small" />
  <sim-switch v-model="value" />
  <sim-switch v-model="value" size="large" />
</template>`;

const disabledCode = `<template>
  <sim-switch v-model="value" disabled />
  <sim-switch :model-value="true" disabled />
</template>`;
</script>

<style scoped>
.demo-label {
  font-size: 14px;
  color: var(--sim-text-regular);
  margin-left: 8px;
}
</style>
