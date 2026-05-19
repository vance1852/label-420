<template>
  <div
    class="sim-switch"
    :class="[
      `sim-switch--${size}`,
      {
        'is-checked': checked,
        'is-disabled': disabled,
      },
    ]"
    @click="handleClick"
  >
    <span v-if="inactiveText && !checked" class="sim-switch__text sim-switch__text--inactive">
      {{ inactiveText }}
    </span>
    <span v-if="activeText && checked" class="sim-switch__text sim-switch__text--active">
      {{ activeText }}
    </span>
    <div class="sim-switch__core" :style="coreStyle">
      <div class="sim-switch__action"></div>
    </div>
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
    const checked = computed(() => props.modelValue);

    const coreStyle = computed(() => {
      if (checked.value && props.activeColor) {
        return { backgroundColor: props.activeColor };
      }
      if (!checked.value && props.inactiveColor) {
        return { backgroundColor: props.inactiveColor };
      }
      return {};
    });

    const handleClick = () => {
      if (props.disabled) return;
      const newValue = !props.modelValue;
      emit("update:modelValue", newValue);
      emit("change", newValue);
    };

    return {
      checked,
      coreStyle,
      handleClick,
    };
  },
});
</script>

<style scoped>
.sim-switch {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
}

.sim-switch.is-disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.sim-switch__core {
  position: relative;
  width: 40px;
  height: 20px;
  background-color: #dcdfe6;
  border-radius: 10px;
  transition: background-color 0.3s;
}

.sim-switch.is-checked .sim-switch__core {
  background-color: var(--sim-primary);
}

.sim-switch__action {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 50%;
  transition: transform 0.3s;
}

.sim-switch.is-checked .sim-switch__action {
  transform: translateX(20px);
}

.sim-switch__text {
  font-size: 14px;
  margin: 0 8px;
  transition: color 0.3s;
}

.sim-switch__text--active {
  color: var(--sim-primary);
}

.sim-switch__text--inactive {
  color: var(--sim-text-secondary);
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

.sim-switch--small.is-checked .sim-switch__action {
  transform: translateX(16px);
}

.sim-switch--small .sim-switch__text {
  font-size: 12px;
}

.sim-switch--large .sim-switch__core {
  width: 50px;
  height: 24px;
  border-radius: 12px;
}

.sim-switch--large .sim-switch__action {
  width: 20px;
  height: 20px;
}

.sim-switch--large.is-checked .sim-switch__action {
  transform: translateX(26px);
}

.sim-switch--large .sim-switch__text {
  font-size: 16px;
}
</style>
