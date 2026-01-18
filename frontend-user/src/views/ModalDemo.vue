<template>
  <div class="modal-demo">
    <div class="page-header">
      <h1>Modal 模态框</h1>
      <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
    </div>

    <h2 class="section-title">基础用法</h2>
    <DemoBlock
      description="需要设置 v-model 属性来控制模态框的显示与隐藏"
      :code="basicCode"
      lang="vue"
    >
      <sim-button type="primary" @click="visible1 = true"
        >打开模态框</sim-button
      >
      <sim-modal v-model="visible1" title="基础模态框">
        <p>这是一段内容，这是一段内容，这是一段内容。</p>
        <template #footer>
          <sim-button @click="visible1 = false">取消</sim-button>
          <sim-button type="primary" @click="visible1 = false">确定</sim-button>
        </template>
      </sim-modal>
    </DemoBlock>

    <h2 class="section-title">自定义宽度</h2>
    <DemoBlock
      description="通过 width 属性设置模态框的宽度"
      :code="widthCode"
      lang="vue"
    >
      <div class="demo-row">
        <sim-button @click="visible2 = true">宽度 300px</sim-button>
        <sim-button @click="visible3 = true">宽度 800px</sim-button>
      </div>
      <sim-modal v-model="visible2" title="窄模态框" width="300px">
        <p>这是一个较窄的模态框。</p>
      </sim-modal>
      <sim-modal v-model="visible3" title="宽模态框" width="800px">
        <p>这是一个较宽的模态框，适合展示更多内容。</p>
      </sim-modal>
    </DemoBlock>

    <h2 class="section-title">禁止点击遮罩关闭</h2>
    <DemoBlock
      description="设置 close-on-click-modal 为 false 可禁止点击遮罩关闭"
      :code="maskCode"
      lang="vue"
    >
      <sim-button type="warning" @click="visible4 = true"
        >点击遮罩不关闭</sim-button
      >
      <sim-modal
        v-model="visible4"
        title="禁止点击遮罩关闭"
        :close-on-click-modal="false"
      >
        <p>点击遮罩层不会关闭此模态框，只能点击关闭按钮。</p>
        <template #footer>
          <sim-button type="primary" @click="visible4 = false"
            >我知道了</sim-button
          >
        </template>
      </sim-modal>
    </DemoBlock>

    <h2 class="section-title">嵌套表单</h2>
    <DemoBlock
      description="模态框中可以嵌套表单等复杂内容"
      :code="formCode"
      lang="vue"
    >
      <sim-button type="success" @click="visible5 = true">打开表单</sim-button>
      <sim-modal v-model="visible5" title="用户信息">
        <div style="display: flex; flex-direction: column; gap: 16px">
          <div>
            <label
              style="
                display: block;
                margin-bottom: 8px;
                font-size: 14px;
                color: #606266;
              "
              >用户名</label
            >
            <sim-input v-model="form.username" placeholder="请输入用户名" />
          </div>
          <div>
            <label
              style="
                display: block;
                margin-bottom: 8px;
                font-size: 14px;
                color: #606266;
              "
              >密码</label
            >
            <sim-input
              v-model="form.password"
              type="password"
              placeholder="请输入密码"
            />
          </div>
        </div>
        <template #footer>
          <sim-button @click="visible5 = false">取消</sim-button>
          <sim-button type="primary" @click="handleSubmit">提交</sim-button>
        </template>
      </sim-modal>
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
          <td>是否显示</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>false</code></td>
        </tr>
        <tr>
          <td><code>title</code></td>
          <td>标题</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td>—</td>
        </tr>
        <tr>
          <td><code>width</code></td>
          <td>宽度</td>
          <td><span class="tag-type tag-type--string">string</span></td>
          <td><code>500px</code></td>
        </tr>
        <tr>
          <td><code>show-close</code></td>
          <td>是否显示关闭按钮</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>close-on-click-modal</code></td>
          <td>点击遮罩是否关闭</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>true</code></td>
        </tr>
        <tr>
          <td><code>close-on-press-escape</code></td>
          <td>按 ESC 是否关闭</td>
          <td><span class="tag-type tag-type--boolean">boolean</span></td>
          <td><code>true</code></td>
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
          <td>模态框内容</td>
        </tr>
        <tr>
          <td><code>footer</code></td>
          <td>底部按钮区域</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import DemoBlock from "../components/DemoBlock.vue";

const visible1 = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
const visible4 = ref(false);
const visible5 = ref(false);

const form = reactive({
  username: "",
  password: "",
});

const handleSubmit = () => {
  alert(`用户名: ${form.username}`);
  visible5.value = false;
};

const basicCode = `<template>
  <sim-button type="primary" @click="visible = true">打开模态框</sim-button>
  
  <sim-modal v-model="visible" title="基础模态框">
    <p>这是一段内容，这是一段内容，这是一段内容。</p>
    <template #footer>
      <sim-button @click="visible = false">取消</sim-button>
      <sim-button type="primary" @click="visible = false">确定</sim-button>
    </template>
  </sim-modal>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
<\/script>`;

const widthCode = `<template>
  <sim-button @click="visible = true">宽度 300px</sim-button>
  <sim-modal v-model="visible" title="窄模态框" width="300px">
    <p>这是一个较窄的模态框。</p>
  </sim-modal>
</template>`;

const maskCode = `<template>
  <sim-button @click="visible = true">点击遮罩不关闭</sim-button>
  <sim-modal 
    v-model="visible" 
    title="禁止点击遮罩关闭" 
    :close-on-click-modal="false"
  >
    <p>点击遮罩层不会关闭此模态框。</p>
  </sim-modal>
</template>`;

const formCode = `<template>
  <sim-button @click="visible = true">打开表单</sim-button>
  <sim-modal v-model="visible" title="用户信息">
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div>
        <label>用户名</label>
        <sim-input v-model="form.username" placeholder="请输入用户名" />
      </div>
      <div>
        <label>密码</label>
        <sim-input v-model="form.password" type="password" />
      </div>
    </div>
    <template #footer>
      <sim-button @click="visible = false">取消</sim-button>
      <sim-button type="primary" @click="handleSubmit">提交</sim-button>
    </template>
  </sim-modal>
</template>`;
</script>
