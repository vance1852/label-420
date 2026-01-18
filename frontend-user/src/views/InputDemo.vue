<template>
  <div class="input-demo">
    <div class="page-header">
      <h1>Input 输入框</h1>
      <p>通过鼠标或键盘输入字符，是最基础的表单域组件。</p>
    </div>

    <h2 class="section-title">基础用法</h2>
    <DemoBlock description="基础的输入框用法" :code="basicCode" lang="vue">
      <div class="demo-row">
        <sim-input v-model="input1" placeholder="请输入内容" />
      </div>
      <div class="demo-tip">输入值: {{ input1 || "(空)" }}</div>
    </DemoBlock>

    <h2 class="section-title">禁用状态</h2>
    <DemoBlock
      description="通过 disabled 属性指定是否禁用"
      :code="disabledCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-input v-model="input2" disabled placeholder="禁用状态" />
      </div>
    </DemoBlock>

    <h2 class="section-title">可清空</h2>
    <DemoBlock
      description="使用 clearable 属性可以得到一个可清空的输入框"
      :code="clearableCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-input v-model="input3" clearable placeholder="可清空输入框" />
      </div>
    </DemoBlock>

    <h2 class="section-title">密码框</h2>
    <DemoBlock
      description="使用 type='password' 可以得到一个密码输入框"
      :code="passwordCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-input v-model="input4" type="password" placeholder="请输入密码" />
      </div>
    </DemoBlock>

    <h2 class="section-title">不同尺寸</h2>
    <DemoBlock
      description="使用 size 属性改变输入框大小"
      :code="sizeCode"
      lang="vue"
    >
      <div
        style="
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 300px;
        "
      >
        <sim-input v-model="input5" size="large" placeholder="大型输入框" />
        <sim-input v-model="input6" placeholder="默认输入框" />
        <sim-input v-model="input7" size="small" placeholder="小型输入框" />
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
          <td><code>modelValue / v-model</code></td>
          <td>绑定值</td>
          <td>
            <span class="tag-type tag-type--string">string / number</span>
          </td>
          <td>—</td>
        </tr>
        <tr>
          <td><code>type</code></td>
          <td>类型</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td><code>text</code></td>
        </tr>
        <tr>
          <td><code>placeholder</code></td>
          <td>占位文本</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td>—</td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td>是否禁用</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>clearable</code></td>
          <td>是否可清空</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>size</code></td>
          <td>输入框尺寸</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td><code>default</code></td>
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
          <td><code>input</code></td>
          <td>输入值改变时触发</td>
          <td><code>(value: string)</code></td>
        </tr>
        <tr>
          <td><code>focus</code></td>
          <td>获得焦点时触发</td>
          <td><code>(event: FocusEvent)</code></td>
        </tr>
        <tr>
          <td><code>blur</code></td>
          <td>失去焦点时触发</td>
          <td><code>(event: FocusEvent)</code></td>
        </tr>
        <tr>
          <td><code>clear</code></td>
          <td>点击清空按钮时触发</td>
          <td>—</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DemoBlock from "../components/DemoBlock.vue";

const input1 = ref("");
const input2 = ref("禁用内容");
const input3 = ref("可清空内容");
const input4 = ref("");
const input5 = ref("");
const input6 = ref("");
const input7 = ref("");

const basicCode = `<template>
  <sim-input v-model="value" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
<\/script>`;

const disabledCode = `<template>
  <sim-input v-model="value" disabled placeholder="禁用状态" />
</template>`;

const clearableCode = `<template>
  <sim-input v-model="value" clearable placeholder="可清空输入框" />
</template>`;

const passwordCode = `<template>
  <sim-input v-model="password" type="password" placeholder="请输入密码" />
</template>`;

const sizeCode = `<template>
  <sim-input size="large" placeholder="大型输入框" />
  <sim-input placeholder="默认输入框" />
  <sim-input size="small" placeholder="小型输入框" />
</template>`;
</script>
