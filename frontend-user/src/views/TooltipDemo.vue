<template>
  <div class="tooltip-demo">
    <div class="page-header">
      <h1>Tooltip 文字提示</h1>
      <p>鼠标悬停或点击时，在目标元素周围弹出提示文字。</p>
    </div>

    <h2 class="section-title">基础用法</h2>
    <DemoBlock
      description="鼠标悬停时显示提示文字"
      :code="basicCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-tooltip content="这是一段提示文字">
          <sim-button type="primary">鼠标悬停</sim-button>
        </sim-tooltip>
      </div>
    </DemoBlock>

    <h2 class="section-title">不同弹出方向</h2>
    <DemoBlock
      description="使用 placement 属性设置弹出方向"
      :code="placementCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-tooltip content="Top 提示" placement="top">
          <sim-button>Top</sim-button>
        </sim-tooltip>
        <sim-tooltip content="Bottom 提示" placement="bottom">
          <sim-button>Bottom</sim-button>
        </sim-tooltip>
        <sim-tooltip content="Left 提示" placement="left">
          <sim-button>Left</sim-button>
        </sim-tooltip>
        <sim-tooltip content="Right 提示" placement="right">
          <sim-button>Right</sim-button>
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
        <sim-tooltip content="Hover 触发" trigger="hover">
          <sim-button type="primary">Hover 触发</sim-button>
        </sim-tooltip>
        <sim-tooltip content="Click 触发" trigger="click">
          <sim-button type="success">Click 触发</sim-button>
        </sim-tooltip>
      </div>
    </DemoBlock>

    <h2 class="section-title">禁用状态</h2>
    <DemoBlock
      description="设置 disabled 属性禁用提示"
      :code="disabledCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-tooltip content="不会显示" disabled>
          <sim-button type="danger" disabled>禁用提示</sim-button>
        </sim-tooltip>
        <sim-tooltip content="正常显示">
          <sim-button>正常提示</sim-button>
        </sim-tooltip>
      </div>
    </DemoBlock>

    <h2 class="section-title">配合其他组件使用</h2>
    <DemoBlock
      description="Tooltip 可以包裹任意元素"
      :code="otherCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-tooltip content="点击删除">
          <sim-tag type="danger" round>删除</sim-tag>
        </sim-tooltip>
        <sim-tooltip content="用户名输入">
          <sim-input placeholder="请输入用户名" style="width: 200px" />
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
          <td>-</td>
        </tr>
        <tr>
          <td><code>placement</code></td>
          <td>弹出方向：top/bottom/left/right</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td><code>top</code></td>
        </tr>
        <tr>
          <td><code>trigger</code></td>
          <td>触发方式：hover/click</td>
          <td><span class="tag-type tag-type--string">string</span></td>
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
    <sim-button type="primary">鼠标悬停</sim-button>
  </sim-tooltip>
</template>`;

const placementCode = `<template>
  <sim-tooltip content="Top 提示" placement="top">
    <sim-button>Top</sim-button>
  </sim-tooltip>
  <sim-tooltip content="Bottom 提示" placement="bottom">
    <sim-button>Bottom</sim-button>
  </sim-tooltip>
  <sim-tooltip content="Left 提示" placement="left">
    <sim-button>Left</sim-button>
  </sim-tooltip>
  <sim-tooltip content="Right 提示" placement="right">
    <sim-button>Right</sim-button>
  </sim-tooltip>
</template>`;

const triggerCode = `<template>
  <sim-tooltip content="Hover 触发" trigger="hover">
    <sim-button type="primary">Hover 触发</sim-button>
  </sim-tooltip>
  <sim-tooltip content="Click 触发" trigger="click">
    <sim-button type="success">Click 触发</sim-button>
  </sim-tooltip>
</template>`;

const disabledCode = `<template>
  <sim-tooltip content="不会显示" disabled>
    <sim-button type="danger" disabled>禁用提示</sim-button>
  </sim-tooltip>
  <sim-tooltip content="正常显示">
    <sim-button>正常提示</sim-button>
  </sim-tooltip>
</template>`;

const otherCode = `<template>
  <sim-tooltip content="点击删除">
    <sim-tag type="danger" round>删除</sim-tag>
  </sim-tooltip>
  <sim-tooltip content="用户名输入">
    <sim-input placeholder="请输入用户名" style="width: 200px" />
  </sim-tooltip>
</template>`;
</script>

<style scoped>
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
</style>
