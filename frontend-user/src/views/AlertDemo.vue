<template>
  <div class="alert-demo">
    <div class="page-header">
      <h1>Alert 警告</h1>
      <p>用于页面中展示重要的提示信息，适用于简短的警告提示。</p>
    </div>

    <h2 class="section-title">基础用法</h2>
    <DemoBlock
      description="Alert 组件提供四种类型，由 type 属性指定"
      :code="basicCode"
      lang="vue"
    >
      <sim-alert title="成功提示" type="success" :closable="false" />
      <sim-alert title="消息提示" type="info" :closable="false" />
      <sim-alert title="警告提示" type="warning" :closable="false" />
      <sim-alert title="错误提示" type="error" :closable="false" />
    </DemoBlock>

    <h2 class="section-title">带有描述</h2>
    <DemoBlock
      description="使用 description 属性来添加更详细的描述"
      :code="descCode"
      lang="vue"
    >
      <sim-alert
        title="成功提示"
        type="success"
        description="这是一段成功的描述信息，用于补充说明。"
        :closable="false"
      />
      <sim-alert
        title="警告提示"
        type="warning"
        description="这是一段警告的描述信息，请注意相关内容。"
        :closable="false"
      />
    </DemoBlock>

    <h2 class="section-title">带有图标</h2>
    <DemoBlock
      description="通过设置 show-icon 属性来显示图标"
      :code="iconCode"
      lang="vue"
    >
      <sim-alert title="成功提示" type="success" show-icon :closable="false" />
      <sim-alert title="消息提示" type="info" show-icon :closable="false" />
      <sim-alert title="警告提示" type="warning" show-icon :closable="false" />
      <sim-alert title="错误提示" type="error" show-icon :closable="false" />
    </DemoBlock>

    <h2 class="section-title">居中显示</h2>
    <DemoBlock
      description="使用 center 属性让文字水平居中"
      :code="centerCode"
      lang="vue"
    >
      <sim-alert
        title="居中的成功提示"
        type="success"
        center
        show-icon
        :closable="false"
      />
    </DemoBlock>

    <h2 class="section-title">可关闭</h2>
    <DemoBlock
      description="默认可关闭，设置 closable 为 false 可禁用关闭"
      :code="closableCode"
      lang="vue"
    >
      <sim-alert title="可关闭的提示（点击关闭按钮）" type="info" />
      <sim-alert title="不可关闭的提示" type="info" :closable="false" />
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
          <td><code>title</code></td>
          <td>标题</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td>—</td>
        </tr>
        <tr>
          <td><code>type</code></td>
          <td>类型</td>
          <td>
            <span class="tag-type tag-type--string"
              >success / warning / info / error</span
            >
          </td>
          <td><code>info</code></td>
        </tr>
        <tr>
          <td><code>description</code></td>
          <td>描述文字</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td>—</td>
        </tr>
        <tr>
          <td><code>closable</code></td>
          <td>是否可关闭</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>center</code></td>
          <td>文字是否居中</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>show-icon</code></td>
          <td>是否显示图标</td>
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
  <sim-alert title="成功提示" type="success" />
  <sim-alert title="消息提示" type="info" />
  <sim-alert title="警告提示" type="warning" />
  <sim-alert title="错误提示" type="error" />
</template>`;

const descCode = `<template>
  <sim-alert 
    title="成功提示" 
    type="success" 
    description="这是一段成功的描述信息，用于补充说明。"
  />
</template>`;

const iconCode = `<template>
  <sim-alert title="成功提示" type="success" show-icon />
  <sim-alert title="消息提示" type="info" show-icon />
  <sim-alert title="警告提示" type="warning" show-icon />
  <sim-alert title="错误提示" type="error" show-icon />
</template>`;

const centerCode = `<template>
  <sim-alert title="居中的成功提示" type="success" center show-icon />
</template>`;

const closableCode = `<template>
  <sim-alert title="可关闭的提示" type="info" />
  <sim-alert title="不可关闭的提示" type="info" :closable="false" />
</template>`;
</script>
