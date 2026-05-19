<template>
  <div class="progress-demo">
    <div class="page-header">
      <h1>Progress 进度条</h1>
      <p>展示操作的当前进度。</p>
    </div>

    <h2 class="section-title">线形进度条</h2>
    <DemoBlock
      description="使用 percentage 属性设置进度百分比"
      :code="lineCode"
      lang="vue"
    >
      <div class="demo-col">
        <sim-progress :percentage="0" />
        <sim-progress :percentage="30" />
        <sim-progress :percentage="70" />
        <sim-progress :percentage="100" />
      </div>
    </DemoBlock>

    <h2 class="section-title">自定义颜色</h2>
    <DemoBlock
      description="使用 color 属性自定义进度条颜色，支持字符串或渐变数组"
      :code="colorCode"
      lang="vue"
    >
      <div class="demo-col">
        <sim-progress :percentage="60" color="#67c23a" />
        <sim-progress
          :percentage="80"
          :color="['#f56c6c', '#e6a23c', '#67c23a']"
        />
      </div>
    </DemoBlock>

    <h2 class="section-title">不同状态</h2>
    <DemoBlock
      description="使用 status 属性设置进度条状态，不同状态显示不同颜色和图标"
      :code="statusCode"
      lang="vue"
    >
      <div class="demo-col">
        <sim-progress :percentage="100" status="success" />
        <sim-progress :percentage="70" status="warning" />
        <sim-progress :percentage="50" status="exception" />
      </div>
    </DemoBlock>

    <h2 class="section-title">自定义宽度</h2>
    <DemoBlock
      description="使用 stroke-width 属性设置进度条宽度"
      :code="strokeCode"
      lang="vue"
    >
      <div class="demo-col">
        <sim-progress :percentage="50" :stroke-width="12" />
        <sim-progress :percentage="70" :stroke-width="18" />
      </div>
    </DemoBlock>

    <h2 class="section-title">不显示文字</h2>
    <DemoBlock
      description="设置 show-text 为 false 不显示百分比文字"
      :code="hideTextCode"
      lang="vue"
    >
      <div class="demo-col">
        <sim-progress :percentage="50" :show-text="false" />
      </div>
    </DemoBlock>

    <h2 class="section-title">圆形进度条</h2>
    <DemoBlock
      description="设置 type 为 circle 使用圆形进度条"
      :code="circleCode"
      lang="vue"
    >
      <div class="demo-row" style="gap: 40px">
        <sim-progress type="circle" :percentage="0" />
        <sim-progress type="circle" :percentage="30" />
        <sim-progress type="circle" :percentage="70" />
        <sim-progress type="circle" :percentage="100" status="success" />
      </div>
    </DemoBlock>

    <h2 class="section-title">圆形进度条状态</h2>
    <DemoBlock
      description="圆形进度条也支持 status 属性"
      :code="circleStatusCode"
      lang="vue"
    >
      <div class="demo-row" style="gap: 40px">
        <sim-progress type="circle" :percentage="100" status="success" />
        <sim-progress type="circle" :percentage="70" status="warning" />
        <sim-progress type="circle" :percentage="50" status="exception" />
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
          <td><span class="tag-type tag-type--string">number</span></td>
          <td><code>0</code></td>
        </tr>
        <tr>
          <td><code>type</code></td>
          <td>类型</td>
          <td><span class="tag-type tag-type--string">'line' | 'circle'</span></td>
          <td><code>line</code></td>
        </tr>
        <tr>
          <td><code>strokeWidth</code></td>
          <td>进度条宽度（px）</td>
          <td><span class="tag-type tag-type--string">number</span></td>
          <td><code>6</code></td>
        </tr>
        <tr>
          <td><code>color</code></td>
          <td>进度条颜色，支持字符串或字符串数组（自动渐变）</td>
          <td><span class="tag-type tag-type--string">string | string[]</span></td>
          <td><code>主题色</code></td>
        </tr>
        <tr>
          <td><code>showText</code></td>
          <td>是否显示百分比文字</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>status</code></td>
          <td>状态</td>
          <td><span class="tag-type tag-type--string">'' | 'success' | 'warning' | 'exception'</span></td>
          <td><code>''</code></td>
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
  <sim-progress :percentage="70" />
  <sim-progress :percentage="100" />
</template>`;

const colorCode = `<template>
  <sim-progress :percentage="60" color="#67c23a" />
  <sim-progress
    :percentage="80"
    :color="['#f56c6c', '#e6a23c', '#67c23a']"
  />
</template>`;

const statusCode = `<template>
  <sim-progress :percentage="100" status="success" />
  <sim-progress :percentage="70" status="warning" />
  <sim-progress :percentage="50" status="exception" />
</template>`;

const strokeCode = `<template>
  <sim-progress :percentage="50" :stroke-width="12" />
  <sim-progress :percentage="70" :stroke-width="18" />
</template>`;

const hideTextCode = `<template>
  <sim-progress :percentage="50" :show-text="false" />
</template>`;

const circleCode = `<template>
  <sim-progress type="circle" :percentage="0" />
  <sim-progress type="circle" :percentage="30" />
  <sim-progress type="circle" :percentage="70" />
  <sim-progress type="circle" :percentage="100" status="success" />
</template>`;

const circleStatusCode = `<template>
  <sim-progress type="circle" :percentage="100" status="success" />
  <sim-progress type="circle" :percentage="70" status="warning" />
  <sim-progress type="circle" :percentage="50" status="exception" />
</template>`;
</script>

<style scoped>
.demo-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
