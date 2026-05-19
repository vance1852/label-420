<template>
  <div
    class="sim-switch"
    :class="[
      `sim-switch--${size}`,
      {
        'is-active': modelValue,
        'is-disabled': disabled,
      },
    ]"
    @click="handleToggle"
  >
    <span
      v-if="inactiveText"
      class="sim-switch__label sim-switch__label--left"
      :class="{ 'is-active': !modelValue }"
    >
      {{ inactiveText }}
    </span>
    <span
      class="sim-switch__core"
      :style="coreStyle"
    >
      <span class="sim-switch__action" :style="actionStyle"></span>
    </span>
    <span
      v-if="activeText"
      class="sim-switch__label sim-switch__label--right"
      :class="{ 'is-active': modelValue }"
    >
      {{ activeText }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import type { SwitchProps } from "./types";

export default defineComponent({
  name: "SimSwitch",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: "",
    },
    inactiveColor: {
      type: String,
      default: "",
    },
    activeText: {
      type: String,
      default: "",
    },
    inactiveText: {
      type: String,
      default: "",
    },
    size: {
      type: String as () => SwitchProps["size"],
      default: "default",
    },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const activeColor = computed(() => props.activeColor || "var(--sim-primary)");
    const inactiveColor = computed(() => props.inactiveColor || "#dcdfe6");

    const coreStyle = computed(() => ({
      backgroundColor: props.modelValue ? activeColor.value : inactiveColor.value,
    }));

    const actionStyle = computed(() => ({}));

    const handleToggle = () => {
      if (props.disabled) return;
      const newVal = !props.modelValue;
      emit("update:modelValue", newVal);
      emit("change", newVal);
    };

    return {
      coreStyle,
      actionStyle,
      handleToggle,
    };
  },
});
</script>

<style scoped>
.sim-switch {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  color: var(--sim-text-regular);
}

.sim-switch.is-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.sim-switch__label {
  transition: var(--sim-transition);
  font-size: 14px;
  color: var(--sim-text-secondary);
}

.sim-switch__label.is-active {
  color: var(--sim-text-primary);
}

.sim-switch__core {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background-color: #dcdfe6;
  transition: background-color 0.3s ease;
  vertical-align: middle;
}

.sim-switch__action {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.3s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

.sim-switch.is-active .sim-switch__action {
  transform: translateX(20px);
}

.sim-switch--small .sim-switch__core {
  width: 32px;
  height: 16px;
  border-radius: 8px;
}

.sim-switch--small .sim-switch__action {
  width: 12px;
  height: 12px;
}

.sim-switch--small.is-active .sim-switch__action {
  transform: translateX(16px);
}

.sim-switch--small .sim-switch__label {
  font-size: 12px;
}

.sim-switch--large .sim-switch__core {
  width: 52px;
  height: 26px;
  border-radius: 13px;
}

.sim-switch--large .sim-switch__action {
  width: 22px;
  height: 22px;
}

.sim-switch--large.is-active .sim-switch__action {
  transform: translateX(26px);
}

.sim-switch--large .sim-switch__label {
  font-size: 16px;
}
</style>
