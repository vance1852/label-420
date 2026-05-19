<template>
  <div class="switch-demo">
    <div class="page-header">
      <h1>Switch 开关</h1>
      <p>滑动开关，用于切换布尔值状态。</p>
    </div>

    <h2 class="section-title">基础用法</h2>
    <DemoBlock
      description="基础的开关切换，支持 v-model 双向绑定"
      :code="basicCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-switch v-model="basicValue" />
        <span class="demo-value">当前值：{{ basicValue }}</span>
      </div>
    </DemoBlock>

    <h2 class="section-title">禁用状态</h2>
    <DemoBlock
      description="设置 disabled 属性可禁用开关"
      :code="disabledCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-switch :model-value="true" disabled />
        <sim-switch :model-value="false" disabled />
      </div>
    </DemoBlock>

    <h2 class="section-title">不同尺寸</h2>
    <DemoBlock
      description="通过 size 属性设置开关大小，支持 small/default/large"
      :code="sizeCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-switch size="small" />
        <sim-switch />
        <sim-switch size="large" />
      </div>
    </DemoBlock>

    <h2 class="section-title">自定义颜色</h2>
    <DemoBlock
      description="通过 active-color 和 inactive-color 自定义颜色"
      :code="colorCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-switch v-model="colorValue" active-color="#67c23a" inactive-color="#f56c6c" />
        <span class="demo-value">当前值：{{ colorValue }}</span>
      </div>
    </DemoBlock>

    <h2 class="section-title">开关文字</h2>
    <DemoBlock
      description="设置 active-text 和 inactive-text 显示文字"
      :code="textCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-switch v-model="textValue" active-text="开" inactive-text="关" size="large" />
        <sim-switch v-model="textValue2" active-text="ON" inactive-text="OFF" />
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
          <td><code>model-value</code></td>
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
          <td><code>active-color</code></td>
          <td>开启时的颜色</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td>主题色</td>
        </tr>
        <tr>
          <td><code>inactive-color</code></td>
          <td>关闭时的颜色</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td><code>#dcdfe6</code></td>
        </tr>
        <tr>
          <td><code>active-text</code></td>
          <td>开启文字</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td>—</td>
        </tr>
        <tr>
          <td><code>inactive-text</code></td>
          <td>关闭文字</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td>—</td>
        </tr>
        <tr>
          <td><code>size</code></td>
          <td>尺寸</td>
          <td><span class="tag-type tag-type--string">default / small / large</span></td>
          <td><code>default</code></td>
        </tr>
      </tbody>
    </table>

    <h3 style="font-size: 16px; margin: 24px 0 12px">事件</h3>
    <table class="api-table">
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>回调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>update:modelValue</code></td>
          <td>值变化时触发</td>
          <td>newValue: boolean</td>
        </tr>
        <tr>
          <td><code>change</code></td>
          <td>切换时触发</td>
          <td>newValue: boolean</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DemoBlock from "../components/DemoBlock.vue";

const basicValue = ref(false);
const colorValue = ref(true);
const textValue = ref(false);
const textValue2 = ref(true);

const basicCode = `<template>
  <sim-switch v-model="value" />
</template>`;

const disabledCode = `<template>
  <sim-switch :model-value="true" disabled />
  <sim-switch :model-value="false" disabled />
</template>`;

const sizeCode = `<template>
  <sim-switch size="small" />
  <sim-switch />
  <sim-switch size="large" />
</template>`;

const colorCode = `<template>
  <sim-switch v-model="value" active-color="#67c23a" inactive-color="#f56c6c" />
</template>`;

const textCode = `<template>
  <sim-switch v-model="value" active-text="开" inactive-text="关" size="large" />
</template>`;
</script>

<style scoped>
.demo-value {
  font-size: 14px;
  color: var(--sim-text-regular);
}
</style>
