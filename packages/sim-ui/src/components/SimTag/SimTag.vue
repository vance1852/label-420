<template>
  <span
    v-if="visible"
    class="sim-tag"
    :class="[
      `sim-tag--${type}`,
      `sim-tag--${size}`,
      `sim-tag--${effect}`,
      { 'is-round': round },
    ]"
  >
    <slot />
    <span v-if="closable" class="sim-tag__close" @click="handleClose">×</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { TagProps } from "./types";

export default defineComponent({
  name: "SimTag",
  props: {
    type: {
      type: String as () => TagProps["type"],
      default: "primary",
    },
    closable: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as () => TagProps["size"],
      default: "default",
    },
    effect: {
      type: String as () => TagProps["effect"],
      default: "light",
    },
    round: {
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
.sim-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
  height: 24px;
  font-size: 12px;
  border-radius: var(--sim-border-radius);
  white-space: nowrap;
  transition: var(--sim-transition);
}

.sim-tag--large {
  height: 32px;
  padding: 0 12px;
  font-size: 14px;
}

.sim-tag--small {
  height: 20px;
  padding: 0 6px;
  font-size: 11px;
}

.sim-tag.is-round {
  border-radius: 12px;
}

/* Light effect */
.sim-tag--primary.sim-tag--light {
  background-color: #ecf5ff;
  color: var(--sim-primary);
  border: 1px solid #d9ecff;
}

.sim-tag--success.sim-tag--light {
  background-color: #f0f9eb;
  color: var(--sim-success);
  border: 1px solid #e1f3d8;
}

.sim-tag--warning.sim-tag--light {
  background-color: #fdf6ec;
  color: var(--sim-warning);
  border: 1px solid #faecd8;
}

.sim-tag--danger.sim-tag--light {
  background-color: #fef0f0;
  color: var(--sim-danger);
  border: 1px solid #fde2e2;
}

.sim-tag--info.sim-tag--light {
  background-color: #f4f4f5;
  color: var(--sim-info);
  border: 1px solid #e9e9eb;
}

/* Dark effect */
.sim-tag--primary.sim-tag--dark {
  background-color: var(--sim-primary);
  color: #fff;
  border: 1px solid var(--sim-primary);
}

.sim-tag--success.sim-tag--dark {
  background-color: var(--sim-success);
  color: #fff;
  border: 1px solid var(--sim-success);
}

.sim-tag--warning.sim-tag--dark {
  background-color: var(--sim-warning);
  color: #fff;
  border: 1px solid var(--sim-warning);
}

.sim-tag--danger.sim-tag--dark {
  background-color: var(--sim-danger);
  color: #fff;
  border: 1px solid var(--sim-danger);
}

.sim-tag--info.sim-tag--dark {
  background-color: var(--sim-info);
  color: #fff;
  border: 1px solid var(--sim-info);
}

/* Plain effect */
.sim-tag--primary.sim-tag--plain {
  background-color: transparent;
  color: var(--sim-primary);
  border: 1px solid var(--sim-primary);
}

.sim-tag--success.sim-tag--plain {
  background-color: transparent;
  color: var(--sim-success);
  border: 1px solid var(--sim-success);
}

.sim-tag--warning.sim-tag--plain {
  background-color: transparent;
  color: var(--sim-warning);
  border: 1px solid var(--sim-warning);
}

.sim-tag--danger.sim-tag--plain {
  background-color: transparent;
  color: var(--sim-danger);
  border: 1px solid var(--sim-danger);
}

.sim-tag--info.sim-tag--plain {
  background-color: transparent;
  color: var(--sim-info);
  border: 1px solid var(--sim-info);
}

.sim-tag__close {
  font-size: 14px;
  cursor: pointer;
  opacity: 0.7;
  transition: var(--sim-transition);
}

.sim-tag__close:hover {
  opacity: 1;
}
</style>
