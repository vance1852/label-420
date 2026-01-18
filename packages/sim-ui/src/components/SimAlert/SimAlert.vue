<template>
  <transition name="sim-alert-fade">
    <div
      v-if="visible"
      class="sim-alert"
      :class="[`sim-alert--${type}`, { 'is-center': center }]"
    >
      <span v-if="showIcon" class="sim-alert__icon">
        <template v-if="type === 'success'">✓</template>
        <template v-else-if="type === 'warning'">!</template>
        <template v-else-if="type === 'error'">×</template>
        <template v-else>i</template>
      </span>
      <div class="sim-alert__content">
        <span v-if="title" class="sim-alert__title">{{ title }}</span>
        <p v-if="description || $slots.default" class="sim-alert__description">
          <slot>{{ description }}</slot>
        </p>
      </div>
      <span v-if="closable" class="sim-alert__close" @click="handleClose"
        >×</span
      >
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { AlertProps } from "./types";

export default defineComponent({
  name: "SimAlert",
  props: {
    title: {
      type: String,
      default: "",
    },
    type: {
      type: String as () => AlertProps["type"],
      default: "info",
    },
    description: {
      type: String,
      default: "",
    },
    closable: {
      type: Boolean,
      default: true,
    },
    center: {
      type: Boolean,
      default: false,
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close"],
  setup(_props, { emit }) {
    const visible = ref(true);

    const handleClose = () => {
      visible.value = false;
      emit("close");
    };

    return {
      visible,
      handleClose,
    };
  },
});
</script>

<style scoped>
.sim-alert {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 12px 16px;
  border-radius: var(--sim-border-radius);
  margin-bottom: 16px;
}

.sim-alert--success {
  background-color: #f0f9eb;
  color: var(--sim-success);
}

.sim-alert--warning {
  background-color: #fdf6ec;
  color: var(--sim-warning);
}

.sim-alert--info {
  background-color: #f4f4f5;
  color: var(--sim-info);
}

.sim-alert--error {
  background-color: #fef0f0;
  color: var(--sim-danger);
}

.sim-alert.is-center {
  justify-content: center;
  text-align: center;
}

.sim-alert__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  font-size: 14px;
  font-weight: bold;
}

.sim-alert__content {
  flex: 1;
}

.sim-alert__title {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}

.sim-alert__description {
  margin: 4px 0 0;
  font-size: 13px;
  line-height: 1.5;
  opacity: 0.9;
}

.sim-alert__close {
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: 16px;
  cursor: pointer;
  opacity: 0.6;
  transition: var(--sim-transition);
}

.sim-alert__close:hover {
  opacity: 1;
}

.sim-alert-fade-enter-active,
.sim-alert-fade-leave-active {
  transition: opacity 0.3s ease;
}

.sim-alert-fade-enter-from,
.sim-alert-fade-leave-to {
  opacity: 0;
}
</style>
