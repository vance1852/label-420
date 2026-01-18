<template>
  <div class="tag-demo">
    <div class="page-header">
      <h1>Tag 标签</h1>
      <p>用于标记和选择，常用于展示状态、分类等信息。</p>
    </div>

    <h2 class="section-title">基础用法</h2>
    <DemoBlock
      description="由 type 属性来选择标签的类型"
      :code="basicCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-tag>标签一</sim-tag>
        <sim-tag type="success">标签二</sim-tag>
        <sim-tag type="info">标签三</sim-tag>
        <sim-tag type="warning">标签四</sim-tag>
        <sim-tag type="danger">标签五</sim-tag>
      </div>
    </DemoBlock>

    <h2 class="section-title">可移除标签</h2>
    <DemoBlock
      description="设置 closable 属性可以定义一个可移除的标签"
      :code="closableCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-tag closable>标签一</sim-tag>
        <sim-tag type="success" closable>标签二</sim-tag>
        <sim-tag type="info" closable>标签三</sim-tag>
        <sim-tag type="warning" closable>标签四</sim-tag>
        <sim-tag type="danger" closable>标签五</sim-tag>
      </div>
    </DemoBlock>

    <h2 class="section-title">不同尺寸</h2>
    <DemoBlock
      description="使用 size 属性来设置标签的大小"
      :code="sizeCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-tag size="large">大型标签</sim-tag>
        <sim-tag>默认标签</sim-tag>
        <sim-tag size="small">小型标签</sim-tag>
      </div>
    </DemoBlock>

    <h2 class="section-title">主题</h2>
    <DemoBlock
      description="通过 effect 属性来改变主题"
      :code="themeCode"
      lang="vue"
    >
      <p style="margin-bottom: 12px; font-size: 14px; color: #909399">Dark</p>
      <div class="demo-row">
        <sim-tag effect="dark">标签一</sim-tag>
        <sim-tag type="success" effect="dark">标签二</sim-tag>
        <sim-tag type="info" effect="dark">标签三</sim-tag>
        <sim-tag type="warning" effect="dark">标签四</sim-tag>
        <sim-tag type="danger" effect="dark">标签五</sim-tag>
      </div>
      <p style="margin: 16px 0 12px; font-size: 14px; color: #909399">Light</p>
      <div class="demo-row">
        <sim-tag effect="light">标签一</sim-tag>
        <sim-tag type="success" effect="light">标签二</sim-tag>
        <sim-tag type="info" effect="light">标签三</sim-tag>
        <sim-tag type="warning" effect="light">标签四</sim-tag>
        <sim-tag type="danger" effect="light">标签五</sim-tag>
      </div>
      <p style="margin: 16px 0 12px; font-size: 14px; color: #909399">Plain</p>
      <div class="demo-row">
        <sim-tag effect="plain">标签一</sim-tag>
        <sim-tag type="success" effect="plain">标签二</sim-tag>
        <sim-tag type="info" effect="plain">标签三</sim-tag>
        <sim-tag type="warning" effect="plain">标签四</sim-tag>
        <sim-tag type="danger" effect="plain">标签五</sim-tag>
      </div>
    </DemoBlock>

    <h2 class="section-title">圆形标签</h2>
    <DemoBlock
      description="设置 round 属性可以使标签变为圆形"
      :code="roundCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-tag round>标签一</sim-tag>
        <sim-tag type="success" round>标签二</sim-tag>
        <sim-tag type="info" round>标签三</sim-tag>
        <sim-tag type="warning" round>标签四</sim-tag>
        <sim-tag type="danger" round>标签五</sim-tag>
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
          <td>类型</td>
          <td>
            <span class="tag-type tag-type--string"
              >primary / success / warning / danger / info</span
            >
          </td>
          <td><code>primary</code></td>
        </tr>
        <tr>
          <td><code>closable</code></td>
          <td>是否可关闭</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>size</code></td>
          <td>尺寸</td>
          <td>
            <span class="tag-type tag-type--string"
              >large / default / small</span
            >
          </td>
          <td><code>default</code></td>
        </tr>
        <tr>
          <td><code>effect</code></td>
          <td>主题</td>
          <td>
            <span class="tag-type tag-type--string">dark / light / plain</span>
          </td>
          <td><code>light</code></td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td>是否圆形</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>false</code></td>
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
          <td><code>close</code></td>
          <td>关闭时触发</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import DemoBlock from "../components/DemoBlock.vue";

const basicCode = `<template>
  <sim-tag>标签一</sim-tag>
  <sim-tag type="success">标签二</sim-tag>
  <sim-tag type="info">标签三</sim-tag>
  <sim-tag type="warning">标签四</sim-tag>
  <sim-tag type="danger">标签五</sim-tag>
</template>`;

const closableCode = `<template>
  <sim-tag closable>标签一</sim-tag>
  <sim-tag type="success" closable>标签二</sim-tag>
  <sim-tag type="info" closable>标签三</sim-tag>
  <sim-tag type="warning" closable>标签四</sim-tag>
  <sim-tag type="danger" closable>标签五</sim-tag>
</template>`;

const sizeCode = `<template>
  <sim-tag size="large">大型标签</sim-tag>
  <sim-tag>默认标签</sim-tag>
  <sim-tag size="small">小型标签</sim-tag>
</template>`;

const themeCode = `<template>
  <!-- Dark 主题 -->
  <sim-tag effect="dark">标签一</sim-tag>
  <sim-tag type="success" effect="dark">标签二</sim-tag>
  
  <!-- Light 主题 -->
  <sim-tag effect="light">标签一</sim-tag>
  <sim-tag type="success" effect="light">标签二</sim-tag>
  
  <!-- Plain 主题 -->
  <sim-tag effect="plain">标签一</sim-tag>
  <sim-tag type="success" effect="plain">标签二</sim-tag>
</template>`;

const roundCode = `<template>
  <sim-tag round>标签一</sim-tag>
  <sim-tag type="success" round>标签二</sim-tag>
  <sim-tag type="info" round>标签三</sim-tag>
</template>`;
</script>
