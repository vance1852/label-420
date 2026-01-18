<template>
  <div class="button-demo">
    <div class="page-header">
      <h1>Button 按钮</h1>
      <p>常用的操作按钮，支持多种类型、尺寸和状态。</p>
    </div>

    <h2 class="section-title">基础用法</h2>
    <DemoBlock
      description="使用 type 属性来定义按钮的样式"
      :code="basicCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-button>默认按钮</sim-button>
        <sim-button type="primary">主要按钮</sim-button>
        <sim-button type="success">成功按钮</sim-button>
        <sim-button type="warning">警告按钮</sim-button>
        <sim-button type="danger">危险按钮</sim-button>
        <sim-button type="info">信息按钮</sim-button>
      </div>
    </DemoBlock>

    <h2 class="section-title">朴素按钮</h2>
    <DemoBlock
      description="设置 plain 属性可以显示朴素按钮"
      :code="plainCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-button plain>朴素按钮</sim-button>
        <sim-button type="primary" plain>主要按钮</sim-button>
        <sim-button type="success" plain>成功按钮</sim-button>
        <sim-button type="warning" plain>警告按钮</sim-button>
        <sim-button type="danger" plain>危险按钮</sim-button>
      </div>
    </DemoBlock>

    <h2 class="section-title">圆角按钮</h2>
    <DemoBlock
      description="设置 round 属性可以显示圆角按钮"
      :code="roundCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-button round>圆角按钮</sim-button>
        <sim-button type="primary" round>主要按钮</sim-button>
        <sim-button type="success" round>成功按钮</sim-button>
        <sim-button type="warning" round>警告按钮</sim-button>
        <sim-button type="danger" round>危险按钮</sim-button>
      </div>
    </DemoBlock>

    <h2 class="section-title">不同尺寸</h2>
    <DemoBlock
      description="使用 size 属性来定义按钮的尺寸"
      :code="sizeCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-button type="primary" size="large">大型按钮</sim-button>
        <sim-button type="primary">默认按钮</sim-button>
        <sim-button type="primary" size="small">小型按钮</sim-button>
      </div>
    </DemoBlock>

    <h2 class="section-title">禁用状态</h2>
    <DemoBlock
      description="使用 disabled 属性来定义按钮是否禁用"
      :code="disabledCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-button disabled>禁用按钮</sim-button>
        <sim-button type="primary" disabled>主要按钮</sim-button>
        <sim-button type="success" disabled>成功按钮</sim-button>
      </div>
    </DemoBlock>

    <h2 class="section-title">加载状态</h2>
    <DemoBlock
      description="设置 loading 属性可以显示加载状态"
      :code="loadingCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-button type="primary" loading>加载中</sim-button>
        <sim-button type="success" :loading="loading" @click="handleClick">
          {{ loading ? "加载中" : "点击加载" }}
        </sim-button>
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
          <td><code>type</code></td>
          <td>按钮类型</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td><code>default</code></td>
        </tr>
        <tr>
          <td><code>size</code></td>
          <td>按钮尺寸</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td><code>default</code></td>
        </tr>
        <tr>
          <td><code>plain</code></td>
          <td>是否为朴素按钮</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td>是否为圆角按钮</td>
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
          <td><code>loading</code></td>
          <td>是否加载中</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>false</code></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DemoBlock from "../components/DemoBlock.vue";

const loading = ref(false);

const handleClick = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const basicCode = `<template>
  <sim-button>默认按钮</sim-button>
  <sim-button type="primary">主要按钮</sim-button>
  <sim-button type="success">成功按钮</sim-button>
  <sim-button type="warning">警告按钮</sim-button>
  <sim-button type="danger">危险按钮</sim-button>
  <sim-button type="info">信息按钮</sim-button>
</template>`;

const plainCode = `<template>
  <sim-button plain>朴素按钮</sim-button>
  <sim-button type="primary" plain>主要按钮</sim-button>
  <sim-button type="success" plain>成功按钮</sim-button>
  <sim-button type="warning" plain>警告按钮</sim-button>
  <sim-button type="danger" plain>危险按钮</sim-button>
</template>`;

const roundCode = `<template>
  <sim-button round>圆角按钮</sim-button>
  <sim-button type="primary" round>主要按钮</sim-button>
  <sim-button type="success" round>成功按钮</sim-button>
</template>`;

const sizeCode = `<template>
  <sim-button type="primary" size="large">大型按钮</sim-button>
  <sim-button type="primary">默认按钮</sim-button>
  <sim-button type="primary" size="small">小型按钮</sim-button>
</template>`;

const disabledCode = `<template>
  <sim-button disabled>禁用按钮</sim-button>
  <sim-button type="primary" disabled>主要按钮</sim-button>
</template>`;

const loadingCode = `<template>
  <sim-button type="primary" loading>加载中</sim-button>
  <sim-button type="success" :loading="loading" @click="handleClick">
    {{ loading ? '加载中' : '点击加载' }}
  </sim-button>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)

const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
<\/script>`;
</script>
