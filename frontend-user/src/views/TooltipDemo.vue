<template>
  <div class="tooltip-demo">
    <div class="page-header">
      <h1>Tooltip 文字提示</h1>
      <p>鼠标悬停时在目标元素周围弹出提示文字。</p>
    </div>

    <h2 class="section-title">基础用法</h2>
    <DemoBlock
      description="最基础的提示，鼠标悬停即可显示"
      :code="basicCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-tooltip content="这是一段提示文字">
          <sim-button>悬停我</sim-button>
        </sim-tooltip>
        <sim-tooltip content="Hello World!">
          <span class="demo-inline-text">悬停文字</span>
        </sim-tooltip>
      </div>
    </DemoBlock>

    <h2 class="section-title">不同弹出方向</h2>
    <DemoBlock
      description="通过 placement 属性设置弹出方向，支持 top/bottom/left/right"
      :code="placementCode"
      lang="vue"
    >
      <div class="demo-row demo-placement-row">
        <sim-tooltip content="top 顶部提示" placement="top">
          <sim-button>上方</sim-button>
        </sim-tooltip>
        <sim-tooltip content="bottom 底部提示" placement="bottom">
          <sim-button>下方</sim-button>
        </sim-tooltip>
        <sim-tooltip content="left 左侧提示" placement="left">
          <sim-button>左侧</sim-button>
        </sim-tooltip>
        <sim-tooltip content="right 右侧提示" placement="right">
          <sim-button>右侧</sim-button>
        </sim-tooltip>
      </div>
    </DemoBlock>

    <h2 class="section-title">触发方式</h2>
    <DemoBlock
      description="通过 trigger 属性设置触发方式，支持 hover 和 click"
      :code="triggerCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-tooltip content="悬停触发" trigger="hover">
          <sim-button>Hover 触发</sim-button>
        </sim-tooltip>
        <sim-tooltip content="点击触发，再点空白处关闭" trigger="click">
          <sim-button>Click 触发</sim-button>
        </sim-tooltip>
      </div>
    </DemoBlock>

    <h2 class="section-title">禁用状态</h2>
    <DemoBlock
      description="设置 disabled 属性可禁用提示"
      :code="disabledCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-tooltip content="这条提示不会显示" disabled>
          <sim-button>禁用状态</sim-button>
        </sim-tooltip>
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
          <td><code>content</code></td>
          <td>提示内容</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td>—</td>
        </tr>
        <tr>
          <td><code>placement</code></td>
          <td>弹出方向</td>
          <td><span class="tag-type tag-type--string">top / bottom / left / right</span></td>
          <td><code>top</code></td>
        </tr>
        <tr>
          <td><code>trigger</code></td>
          <td>触发方式</td>
          <td><span class="tag-type tag-type--string">hover / click</span></td>
          <td><code>hover</code></td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td>是否禁用</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>false</code></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import DemoBlock from "../components/DemoBlock.vue";

const basicCode = `<template>
  <sim-tooltip content="这是一段提示文字">
    <sim-button>悬停我</sim-button>
  </sim-tooltip>
</template>`;

const placementCode = `<template>
  <sim-tooltip content="top 顶部提示" placement="top">
    <sim-button>上方</sim-button>
  </sim-tooltip>
  <sim-tooltip content="bottom 底部提示" placement="bottom">
    <sim-button>下方</sim-button>
  </sim-tooltip>
  <sim-tooltip content="left 左侧提示" placement="left">
    <sim-button>左侧</sim-button>
  </sim-tooltip>
  <sim-tooltip content="right 右侧提示" placement="right">
    <sim-button>右侧</sim-button>
  </sim-tooltip>
</template>`;

const triggerCode = `<template>
  <sim-tooltip content="悬停触发" trigger="hover">
    <sim-button>Hover 触发</sim-button>
  </sim-tooltip>
  <sim-tooltip content="点击触发" trigger="click">
    <sim-button>Click 触发</sim-button>
  </sim-tooltip>
</template>`;

const disabledCode = `<template>
  <sim-tooltip content="这条提示不会显示" disabled>
    <sim-button>禁用状态</sim-button>
  </sim-tooltip>
</template>`;
</script>

<style scoped>
.demo-inline-text {
  display: inline-block;
  padding: 8px 16px;
  color: var(--sim-primary);
  cursor: pointer;
}

.demo-placement-row {
  gap: 32px;
  padding: 24px;
}
</style>
