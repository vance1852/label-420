<template>
  <div class="tooltip-demo">
    <div class="page-header">
      <h1>Tooltip 文字提示</h1>
      <p>鼠标悬停或点击时在目标元素周围弹出一段提示文字。</p>
    </div>

    <h2 class="section-title">基础用法</h2>
    <DemoBlock
      description="使用 content 属性来设置提示内容，默认在顶部显示"
      :code="basicCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-tooltip content="这是一段提示文字">
          <sim-button>鼠标悬停查看</sim-button>
        </sim-tooltip>
      </div>
    </DemoBlock>

    <h2 class="section-title">弹出方向</h2>
    <DemoBlock
      description="使用 placement 属性设置弹出方向，支持 top/bottom/left/right"
      :code="placementCode"
      lang="vue"
    >
      <div class="demo-row placement-row">
        <sim-tooltip content="顶部提示" placement="top">
          <sim-button>上方</sim-button>
        </sim-tooltip>
        <sim-tooltip content="底部提示" placement="bottom">
          <sim-button>下方</sim-button>
        </sim-tooltip>
        <sim-tooltip content="左侧提示" placement="left">
          <sim-button>左侧</sim-button>
        </sim-tooltip>
        <sim-tooltip content="右侧提示" placement="right">
          <sim-button>右侧</sim-button>
        </sim-tooltip>
      </div>
    </DemoBlock>

    <h2 class="section-title">触发方式</h2>
    <DemoBlock
      description="使用 trigger 属性设置触发方式，支持 hover 和 click"
      :code="triggerCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-tooltip content="悬停触发" trigger="hover">
          <sim-button>Hover 触发</sim-button>
        </sim-tooltip>
        <sim-tooltip content="点击触发" trigger="click">
          <sim-button>Click 触发</sim-button>
        </sim-tooltip>
      </div>
    </DemoBlock>

    <h2 class="section-title">禁用状态</h2>
    <DemoBlock
      description="使用 disabled 属性禁用提示"
      :code="disabledCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-tooltip content="这段不会显示" disabled>
          <sim-button>禁用的提示</sim-button>
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
          <td><code>''</code></td>
        </tr>
        <tr>
          <td><code>placement</code></td>
          <td>弹出方向</td>
          <td><span class="tag-type tag-type--string">'top' | 'bottom' | 'left' | 'right'</span></td>
          <td><code>top</code></td>
        </tr>
        <tr>
          <td><code>trigger</code></td>
          <td>触发方式</td>
          <td><span class="tag-type tag-type--string">'hover' | 'click'</span></td>
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
    <sim-button>鼠标悬停查看</sim-button>
  </sim-tooltip>
</template>`;

const placementCode = `<template>
  <sim-tooltip content="顶部提示" placement="top">
    <sim-button>上方</sim-button>
  </sim-tooltip>
  <sim-tooltip content="底部提示" placement="bottom">
    <sim-button>下方</sim-button>
  </sim-tooltip>
  <sim-tooltip content="左侧提示" placement="left">
    <sim-button>左侧</sim-button>
  </sim-tooltip>
  <sim-tooltip content="右侧提示" placement="right">
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
  <sim-tooltip content="这段不会显示" disabled>
    <sim-button>禁用的提示</sim-button>
  </sim-tooltip>
</template>`;
</script>

<style scoped>
.placement-row {
  gap: 24px;
}
</style>
