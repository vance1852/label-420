<template>
  <div class="switch-demo">
    <div class="page-header">
      <h1>Switch 开关</h1>
      <p>用于切换布尔值状态的滑动开关组件。</p>
    </div>

    <h2 class="section-title">基础用法</h2>
    <DemoBlock
      description="使用 v-model 绑定布尔值"
      :code="basicCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-switch v-model="value1" />
        <span style="margin-left: 8px">{{ value1 ? "开启" : "关闭" }}</span>
      </div>
    </DemoBlock>

    <h2 class="section-title">不同尺寸</h2>
    <DemoBlock
      description="使用 size 属性设置开关尺寸"
      :code="sizeCode"
      lang="vue"
    >
      <div class="demo-row">
        <div class="demo-item">
          <sim-switch size="small" v-model="value2" />
          <span class="demo-label">small</span>
        </div>
        <div class="demo-item">
          <sim-switch v-model="value3" />
          <span class="demo-label">default</span>
        </div>
        <div class="demo-item">
          <sim-switch size="large" v-model="value4" />
          <span class="demo-label">large</span>
        </div>
      </div>
    </DemoBlock>

    <h2 class="section-title">自定义颜色</h2>
    <DemoBlock
      description="使用 activeColor 和 inactiveColor 自定义颜色"
      :code="colorCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-switch v-model="value5" activeColor="#67c23a" />
        <sim-switch v-model="value6" activeColor="#e6a23c" inactiveColor="#ff0000" />
        <sim-switch v-model="value7" activeColor="#13ce66" inactiveColor="#ff4949" />
      </div>
    </DemoBlock>

    <h2 class="section-title">文字描述</h2>
    <DemoBlock
      description="使用 activeText 和 inactiveText 显示开关状态文字"
      :code="textCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-switch
          v-model="value8"
          activeText="按月付费"
          inactiveText="按年付费"
        />
      </div>
    </DemoBlock>

    <h2 class="section-title">禁用状态</h2>
    <DemoBlock
      description="使用 disabled 属性禁用开关"
      :code="disabledCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-switch v-model="value9" disabled />
        <sim-switch v-model="value10" disabled />
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
          <td>绑定值（支持 v-model）</td>
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
          <td>开启时的背景颜色</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td><code>--sim-primary</code></td>
        </tr>
        <tr>
          <td><code>inactiveColor</code></td>
          <td>关闭时的背景颜色</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td><code>#dcdfe6</code></td>
        </tr>
        <tr>
          <td><code>activeText</code></td>
          <td>开启时的文字描述</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td>-</td>
        </tr>
        <tr>
          <td><code>inactiveText</code></td>
          <td>关闭时的文字描述</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td>-</td>
        </tr>
        <tr>
          <td><code>size</code></td>
          <td>开关尺寸：default/small/large</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td><code>default</code></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DemoBlock from "../components/DemoBlock.vue";

const value1 = ref(false);
const value2 = ref(true);
const value3 = ref(true);
const value4 = ref(true);
const value5 = ref(true);
const value6 = ref(true);
const value7 = ref(false);
const value8 = ref(false);
const value9 = ref(true);
const value10 = ref(false);

const basicCode = `<template>
  <sim-switch v-model="value" />
  <span>{{ value ? '开启' : '关闭' }}</span>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(false)
<\/script>`;

const sizeCode = `<template>
  <sim-switch size="small" v-model="value1" />
  <sim-switch v-model="value2" />
  <sim-switch size="large" v-model="value3" />
</template>`;

const colorCode = `<template>
  <sim-switch v-model="value" activeColor="#67c23a" />
  <sim-switch v-model="value" activeColor="#e6a23c" inactiveColor="#ff0000" />
</template>`;

const textCode = `<template>
  <sim-switch
    v-model="value"
    activeText="按月付费"
    inactiveText="按年付费"
  />
</template>`;

const disabledCode = `<template>
  <sim-switch v-model="value1" disabled />
  <sim-switch v-model="value2" disabled />
</template>`;
</script>

<style scoped>
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
}

.demo-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.demo-label {
  font-size: 14px;
  color: var(--sim-text-secondary);
}
</style>
