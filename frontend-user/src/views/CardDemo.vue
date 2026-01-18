<template>
  <div class="card-demo">
    <div class="page-header">
      <h1>Card 卡片</h1>
      <p>将信息聚合在卡片容器中展示，常用于后台概览页面。</p>
    </div>

    <h2 class="section-title">基础用法</h2>
    <DemoBlock
      description="包含标题、内容的基础卡片"
      :code="basicCode"
      lang="vue"
    >
      <sim-card header="卡片标题" style="width: 400px">
        <p>卡片内容区域</p>
        <p>可以放置任意内容</p>
      </sim-card>
    </DemoBlock>

    <h2 class="section-title">简单卡片</h2>
    <DemoBlock description="卡片可以只有内容区域" :code="simpleCode" lang="vue">
      <sim-card style="width: 400px">
        <p>没有标题的简单卡片</p>
        <p>适合展示简单内容</p>
      </sim-card>
    </DemoBlock>

    <h2 class="section-title">阴影效果</h2>
    <DemoBlock
      description="通过 shadow 属性设置卡片阴影出现的时机"
      :code="shadowCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-card shadow="always" style="width: 260px">
          <template #header>总是显示阴影</template>
          <code>shadow="always"</code>
        </sim-card>
        <sim-card shadow="hover" style="width: 260px">
          <template #header>悬停显示阴影</template>
          <code>shadow="hover"</code>
        </sim-card>
        <sim-card shadow="never" style="width: 260px">
          <template #header>从不显示阴影</template>
          <code>shadow="never"</code>
        </sim-card>
      </div>
    </DemoBlock>

    <h2 class="section-title">自定义头部</h2>
    <DemoBlock
      description="通过 header 插槽自定义卡片头部"
      :code="customCode"
      lang="vue"
    >
      <sim-card style="width: 400px">
        <template #header>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <span>自定义头部</span>
            <sim-button type="primary" size="small">操作</sim-button>
          </div>
        </template>
        <p>卡片内容</p>
      </sim-card>
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
          <td><code>header</code></td>
          <td>卡片标题</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td>—</td>
        </tr>
        <tr>
          <td><code>shadow</code></td>
          <td>阴影显示时机</td>
          <td>
            <span class="tag-type tag-type--string"
              >always / hover / never</span
            >
          </td>
          <td><code>always</code></td>
        </tr>
        <tr>
          <td><code>bodyStyle</code></td>
          <td>body 的样式</td>
          <td><span class="tag-type tag-type--string">object</span></td>
          <td>—</td>
        </tr>
      </tbody>
    </table>

    <h3 style="font-size: 16px; margin: 24px 0 12px">插槽</h3>
    <table class="api-table">
      <thead>
        <tr>
          <th>插槽名</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>default</code></td>
          <td>卡片内容</td>
        </tr>
        <tr>
          <td><code>header</code></td>
          <td>卡片头部内容</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import DemoBlock from "../components/DemoBlock.vue";

const basicCode = `<template>
  <sim-card header="卡片标题">
    <p>卡片内容区域</p>
    <p>可以放置任意内容</p>
  </sim-card>
</template>`;

const simpleCode = `<template>
  <sim-card>
    <p>没有标题的简单卡片</p>
    <p>适合展示简单内容</p>
  </sim-card>
</template>`;

const shadowCode = `<template>
  <sim-card shadow="always">总是显示阴影</sim-card>
  <sim-card shadow="hover">悬停显示阴影</sim-card>
  <sim-card shadow="never">从不显示阴影</sim-card>
</template>`;

const customCode = `<template>
  <sim-card>
    <template #header>
      <div style="display: flex; justify-content: space-between;">
        <span>自定义头部</span>
        <sim-button type="primary" size="small">操作</sim-button>
      </div>
    </template>
    <p>卡片内容</p>
  </sim-card>
</template>`;
</script>
