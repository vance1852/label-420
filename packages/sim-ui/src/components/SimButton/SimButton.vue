<template>
  <button
    class="sim-button"
    :class="[
      `sim-button--${type}`,
      `sim-button--${size}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
        'is-loading': loading,
      },
    ]"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <span v-if="loading" class="sim-button__loading">
      <svg class="sim-button__loading-icon" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-dasharray="31.4 31.4"
        />
      </svg>
    </span>
    <span class="sim-button__content">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { ButtonProps } from "./types";

export default defineComponent({
  name: "SimButton",
  props: {
    type: {
      type: String as () => ButtonProps["type"],
      default: "default",
    },
    size: {
      type: String as () => ButtonProps["size"],
      default: "default",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const handleClick = (e: MouseEvent) => {
      if (!props.disabled && !props.loading) {
        emit("click", e);
      }
    };
    return { handleClick };
  },
});
</script>

<style scoped>
.sim-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  border: 1px solid var(--sim-border-color);
  border-radius: var(--sim-border-radius);
  background-color: #fff;
  color: var(--sim-text-regular);
  cursor: pointer;
  transition: var(--sim-transition);
  outline: none;
  user-select: none;
}

.sim-button:hover:not(.is-disabled) {
  color: var(--sim-primary);
  border-color: var(--sim-primary-light);
  background-color: #ecf5ff;
}

.sim-button--primary {
  background-color: var(--sim-primary);
  border-color: var(--sim-primary);
  color: #fff;
}
.sim-button--primary:hover:not(.is-disabled) {
  background-color: var(--sim-primary-light);
  border-color: var(--sim-primary-light);
  color: #fff;
}

.sim-button--success {
  background-color: var(--sim-success);
  border-color: var(--sim-success);
  color: #fff;
}
.sim-button--success:hover:not(.is-disabled) {
  background-color: #85ce61;
  border-color: #85ce61;
  color: #fff;
}

.sim-button--warning {
  background-color: var(--sim-warning);
  border-color: var(--sim-warning);
  color: #fff;
}
.sim-button--warning:hover:not(.is-disabled) {
  background-color: #ebb563;
  border-color: #ebb563;
  color: #fff;
}

.sim-button--danger {
  background-color: var(--sim-danger);
  border-color: var(--sim-danger);
  color: #fff;
}
.sim-button--danger:hover:not(.is-disabled) {
  background-color: #f78989;
  border-color: #f78989;
  color: #fff;
}

.sim-button--info {
  background-color: var(--sim-info);
  border-color: var(--sim-info);
  color: #fff;
}
.sim-button--info:hover:not(.is-disabled) {
  background-color: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}

.sim-button--large {
  padding: 14px 24px;
  font-size: 16px;
}

.sim-button--small {
  padding: 6px 12px;
  font-size: 12px;
}

.sim-button.is-plain {
  background-color: transparent;
}
.sim-button--primary.is-plain {
  color: var(--sim-primary);
  background-color: #ecf5ff;
}
.sim-button--success.is-plain {
  color: var(--sim-success);
  background-color: #f0f9eb;
}
.sim-button--warning.is-plain {
  color: var(--sim-warning);
  background-color: #fdf6ec;
}
.sim-button--danger.is-plain {
  color: var(--sim-danger);
  background-color: #fef0f0;
}
.sim-button--info.is-plain {
  color: var(--sim-info);
  background-color: #f4f4f5;
}

.sim-button.is-round {
  border-radius: 20px;
}

.sim-button.is-circle {
  border-radius: 50%;
  padding: 10px;
}

.sim-button.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.sim-button.is-loading {
  cursor: wait;
}

.sim-button__loading-icon {
  width: 14px;
  height: 14px;
  animation: sim-loading-rotate 1s linear infinite;
}

@keyframes sim-loading-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
