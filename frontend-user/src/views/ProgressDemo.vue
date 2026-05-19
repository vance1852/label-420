<template>
  <div class="progress-demo">
    <div class="page-header">
      <h1>Progress 进度条</h1>
      <p>展示操作的当前进度。</p>
    </div>

    <h2 class="section-title">线形进度条</h2>
    <DemoBlock
      description="基础的线形进度条"
      :code="lineCode"
      lang="vue"
    >
      <div class="demo-col demo-col--gap">
        <sim-progress :percentage="0" />
        <sim-progress :percentage="25" />
        <sim-progress :percentage="50" />
        <sim-progress :percentage="75" />
        <sim-progress :percentage="100" />
      </div>
    </DemoBlock>

    <h2 class="section-title">不同状态</h2>
    <DemoBlock
      description="通过 status 属性设置状态，不同状态显示不同颜色和图标"
      :code="statusCode"
      lang="vue"
    >
      <div class="demo-col demo-col--gap">
        <sim-progress :percentage="30" status="success" />
        <sim-progress :percentage="60" status="warning" />
        <sim-progress :percentage="80" status="exception" />
      </div>
    </DemoBlock>

    <h2 class="section-title">自定义颜色</h2>
    <DemoBlock
      description="通过 color 属性自定义颜色，支持字符串或数组（渐变）"
      :code="colorCode"
      lang="vue"
    >
      <div class="demo-col demo-col--gap">
        <sim-progress :percentage="50" color="#e6a23c" />
        <sim-progress :percentage="70" color="#f56c6c" />
        <sim-progress :percentage="90" color="#67c23a" />
      </div>
    </DemoBlock>

    <h2 class="section-title">不同宽度</h2>
    <DemoBlock
      description="通过 stroke-width 属性设置进度条宽度"
      :code="strokeCode"
      lang="vue"
    >
      <div class="demo-col demo-col--gap">
        <sim-progress :percentage="50" :stroke-width="4" />
        <sim-progress :percentage="50" :stroke-width="6" />
        <sim-progress :percentage="50" :stroke-width="12" />
        <sim-progress :percentage="50" :stroke-width="16" />
      </div>
    </DemoBlock>

    <h2 class="section-title">不显示百分比</h2>
    <DemoBlock
      description="设置 show-text 为 false 可隐藏百分比文字"
      :code="hideTextCode"
      lang="vue"
    >
      <div class="demo-col demo-col--gap">
        <sim-progress :percentage="80" :show-text="false" />
      </div>
    </DemoBlock>

    <h2 class="section-title">圆形进度条</h2>
    <DemoBlock
      description="通过 type 属性设置为 circle 类型展示圆形进度条"
      :code="circleCode"
      lang="vue"
    >
      <div class="demo-row" style="justify-content: center; gap: 40px">
        <sim-progress :percentage="0" type="circle" />
        <sim-progress :percentage="25" type="circle" />
        <sim-progress :percentage="50" type="circle" />
        <sim-progress :percentage="75" type="circle" />
        <sim-progress :percentage="100" type="circle" />
      </div>
    </DemoBlock>

    <h2 class="section-title">圆形进度条状态</h2>
    <DemoBlock
      description="圆形进度条也支持不同状态"
      :code="circleStatusCode"
      lang="vue"
    >
      <div class="demo-row" style="justify-content: center; gap: 40px">
        <sim-progress :percentage="80" type="circle" status="success" />
        <sim-progress :percentage="60" type="circle" status="warning" />
        <sim-progress :percentage="40" type="circle" status="exception" />
      </div>
    </DemoBlock>

    <h2 class="section-title">动态进度</h2>
    <DemoBlock
      description="点击按钮动态改变进度值"
      :code="dynamicCode"
      lang="vue"
    >
      <div class="demo-col demo-col--gap">
        <sim-progress :percentage="dynamicPercent" />
        <div class="demo-row">
          <sim-button @click="dynamicPercent = Math.max(0, dynamicPercent - 10)">-10%</sim-button>
          <sim-button @click="dynamicPercent = Math.min(100, dynamicPercent + 10)">+10%</sim-button>
          <sim-button @click="dynamicPercent = 0">重置</sim-button>
        </div>
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
          <td>百分比，0-100</td>
          <td><span class="tag-type tag-type--number">number</span></td>
          <td><code>0</code></td>
        </tr>
        <tr>
          <td><code>type</code></td>
          <td>进度条类型</td>
          <td><span class="tag-type tag-type--string">line / circle</span></td>
          <td><code>line</code></td>
        </tr>
        <tr>
          <td><code>stroke-width</code></td>
          <td>进度条宽度（px）</td>
          <td><span class="tag-type tag-type--number">number</span></td>
          <td><code>6</code></td>
        </tr>
        <tr>
          <td><code>color</code></td>
          <td>进度条颜色，支持字符串或数组</td>
          <td><span class="tag-type tag-type--string">string / string[]</span></td>
          <td>主题色</td>
        </tr>
        <tr>
          <td><code>show-text</code></td>
          <td>是否显示百分比文字</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>status</code></td>
          <td>状态</td>
          <td><span class="tag-type tag-type--string">success / warning / exception</span></td>
          <td>—</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DemoBlock from "../components/DemoBlock.vue";

const dynamicPercent = ref(30);

const lineCode = `<template>
  <sim-progress :percentage="0" />
  <sim-progress :percentage="25" />
  <sim-progress :percentage="50" />
  <sim-progress :percentage="75" />
  <sim-progress :percentage="100" />
</template>`;

const statusCode = `<template>
  <sim-progress :percentage="30" status="success" />
  <sim-progress :percentage="60" status="warning" />
  <sim-progress :percentage="80" status="exception" />
</template>`;

const colorCode = `<template>
  <sim-progress :percentage="50" color="#e6a23c" />
  <sim-progress :percentage="70" color="#f56c6c" />
  <sim-progress :percentage="90" color="#67c23a" />
</template>`;

const strokeCode = `<template>
  <sim-progress :percentage="50" :stroke-width="4" />
  <sim-progress :percentage="50" :stroke-width="6" />
  <sim-progress :percentage="50" :stroke-width="12" />
  <sim-progress :percentage="50" :stroke-width="16" />
</template>`;

const hideTextCode = `<template>
  <sim-progress :percentage="80" :show-text="false" />
</template>`;

const circleCode = `<template>
  <sim-progress :percentage="25" type="circle" />
  <sim-progress :percentage="50" type="circle" />
  <sim-progress :percentage="75" type="circle" />
</template>`;

const circleStatusCode = `<template>
  <sim-progress :percentage="80" type="circle" status="success" />
  <sim-progress :percentage="60" type="circle" status="warning" />
  <sim-progress :percentage="40" type="circle" status="exception" />
</template>`;

const dynamicCode = `<template>
  <sim-progress :percentage="dynamicPercent" />
  <sim-button @click="dynamicPercent = Math.max(0, dynamicPercent - 10)">-10%</sim-button>
  <sim-button @click="dynamicPercent = Math.min(100, dynamicPercent + 10)">+10%</sim-button>
</template>`;
</script>

<style scoped>
.demo-col {
  display: flex;
  flex-direction: column;
}

.demo-col--gap {
  gap: 16px;
}
</style>
