<template>
  <div class="progress-demo">
    <div class="page-header">
      <h1>Progress 进度条</h1>
      <p>展示操作的当前进度，支持线形和圆形两种样式。</p>
    </div>

    <h2 class="section-title">线形进度条</h2>
    <DemoBlock
      description="基础的线形进度条"
      :code="lineCode"
      lang="vue"
    >
      <div class="progress-list">
        <sim-progress :percentage="0" />
        <sim-progress :percentage="30" />
        <sim-progress :percentage="60" />
        <sim-progress :percentage="100" />
      </div>
    </DemoBlock>

    <h2 class="section-title">不同状态</h2>
    <DemoBlock
      description="使用 status 属性设置进度状态"
      :code="statusCode"
      lang="vue"
    >
      <div class="progress-list">
        <sim-progress :percentage="100" status="success" />
        <sim-progress :percentage="60" status="warning" />
        <sim-progress :percentage="40" status="exception" />
      </div>
    </DemoBlock>

    <h2 class="section-title">自定义颜色</h2>
    <DemoBlock
      description="使用 color 属性自定义进度条颜色，支持数组实现渐变"
      :code="colorCode"
      lang="vue"
    >
      <div class="progress-list">
        <sim-progress :percentage="60" color="#67c23a" />
        <sim-progress :percentage="60" :color="['#409eff', '#67c23a']" />
        <sim-progress :percentage="60" :color="['#f56c6c', '#e6a23c', '#67c23a']" />
      </div>
    </DemoBlock>

    <h2 class="section-title">自定义宽度</h2>
    <DemoBlock
      description="使用 strokeWidth 属性设置进度条宽度"
      :code="widthCode"
      lang="vue"
    >
      <div class="progress-list">
        <sim-progress :percentage="60" :stroke-width="4" />
        <sim-progress :percentage="60" :stroke-width="8" />
        <sim-progress :percentage="60" :stroke-width="12" />
      </div>
    </DemoBlock>

    <h2 class="section-title">不显示文字</h2>
    <DemoBlock
      description="设置 showText 为 false 隐藏百分比文字"
      :code="noTextCode"
      lang="vue"
    >
      <div class="progress-list">
        <sim-progress :percentage="60" :show-text="false" />
      </div>
    </DemoBlock>

    <h2 class="section-title">圆形进度条</h2>
    <DemoBlock
      description="设置 type 为 circle 使用圆形进度条"
      :code="circleCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-progress type="circle" :percentage="0" :stroke-width="8" />
        <sim-progress type="circle" :percentage="30" :stroke-width="8" />
        <sim-progress type="circle" :percentage="60" :stroke-width="8" />
        <sim-progress type="circle" :percentage="100" :stroke-width="8" />
      </div>
    </DemoBlock>

    <h2 class="section-title">圆形进度条不同状态</h2>
    <DemoBlock
      description="圆形进度条同样支持 status 属性"
      :code="circleStatusCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-progress type="circle" :percentage="100" status="success" :stroke-width="8" />
        <sim-progress type="circle" :percentage="60" status="warning" :stroke-width="8" />
        <sim-progress type="circle" :percentage="40" status="exception" :stroke-width="8" />
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
          <td><code>percentage</code></td>
          <td>百分比（0-100）</td>
          <td><span class="tag-type tag-type--number">number</span></td>
          <td>-</td>
        </tr>
        <tr>
          <td><code>type</code></td>
          <td>类型：line/circle</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td><code>line</code></td>
        </tr>
        <tr>
          <td><code>strokeWidth</code></td>
          <td>进度条宽度（px）</td>
          <td><span class="tag-type tag-type--number">number</span></td>
          <td><code>6</code></td>
        </tr>
        <tr>
          <td><code>color</code></td>
          <td>进度条颜色，支持字符串或数组实现渐变</td>
          <td><span class="tag-type tag-type--string">string | string[]</span></td>
          <td><code>--sim-primary</code></td>
        </tr>
        <tr>
          <td><code>showText</code></td>
          <td>是否显示百分比文字</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>status</code></td>
          <td>当前进度状态：success/warning/exception</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import DemoBlock from "../components/DemoBlock.vue";

const lineCode = `<template>
  <sim-progress :percentage="0" />
  <sim-progress :percentage="30" />
  <sim-progress :percentage="60" />
  <sim-progress :percentage="100" />
</template>`;

const statusCode = `<template>
  <sim-progress :percentage="100" status="success" />
  <sim-progress :percentage="60" status="warning" />
  <sim-progress :percentage="40" status="exception" />
</template>`;

const colorCode = `<template>
  <sim-progress :percentage="60" color="#67c23a" />
  <sim-progress :percentage="60" :color="['#409eff', '#67c23a']" />
  <sim-progress :percentage="60" :color="['#f56c6c', '#e6a23c', '#67c23a']" />
</template>`;

const widthCode = `<template>
  <sim-progress :percentage="60" :stroke-width="4" />
  <sim-progress :percentage="60" :stroke-width="8" />
  <sim-progress :percentage="60" :stroke-width="12" />
</template>`;

const noTextCode = `<template>
  <sim-progress :percentage="60" :show-text="false" />
</template>`;

const circleCode = `<template>
  <sim-progress type="circle" :percentage="0" :stroke-width="8" />
  <sim-progress type="circle" :percentage="30" :stroke-width="8" />
  <sim-progress type="circle" :percentage="60" :stroke-width="8" />
  <sim-progress type="circle" :percentage="100" :stroke-width="8" />
</template>`;

const circleStatusCode = `<template>
  <sim-progress type="circle" :percentage="100" status="success" :stroke-width="8" />
  <sim-progress type="circle" :percentage="60" status="warning" :stroke-width="8" />
  <sim-progress type="circle" :percentage="40" status="exception" :stroke-width="8" />
</template>`;
</script>

<style scoped>
.progress-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
}
</style>
