<template>
  <button
    class="sim-switch"
    :class="['sim-switch--' + size, { 'is-checked': modelValue, 'is-disabled': disabled }]"
    :style="switchStyle"
    :disabled="disabled"
    type="button"
    role="switch"
    :aria-checked="modelValue"
    @click="handleToggle"
  >
    <span class="sim-switch__core" :style="coreStyle">
      <span v-if="activeText" class="sim-switch__text sim-switch__text--on">{{ activeText }}</span>
      <span v-if="inactiveText" class="sim-switch__text sim-switch__text--off">{{ inactiveText }}</span>
      <span class="sim-switch__action" :style="actionStyle" />
    </span>
  </button>
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
    const switchStyle = computed(() => {
      const styles: Record<string, string> = {};
      if (props.modelValue && props.activeColor) {
        styles.backgroundColor = props.activeColor;
      } else if (!props.modelValue && props.inactiveColor) {
        styles.backgroundColor = props.inactiveColor;
      }
      return styles;
    });

    const coreStyle = computed(() => {
      const styles: Record<string, string> = {};
      if (props.activeText || props.inactiveText) {
        styles.padding = "0 8px";
      }
      return styles;
    });

    const actionStyle = computed(() => {
      const styles: Record<string, string> = {};
      let knobSize = 20;
      if (props.size === "small") knobSize = 14;
      if (props.size === "large") knobSize = 26;
      const moveDistance = knobSize + 4;
      if (props.modelValue) {
        styles.transform = "translateX(" + moveDistance + "px)";
      } else {
        styles.transform = "translateX(0)";
      }
      return styles;
    });

    const handleToggle = () => {
      if (props.disabled) return;
      const newValue = !props.modelValue;
      emit("update:modelValue", newValue);
      emit("change", newValue);
    };

    return {
      switchStyle,
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
  padding: 0;
  margin: 0;
  line-height: 1;
  position: relative;
  vertical-align: middle;
  background-color: #dcdfe6;
  border: 0;
  cursor: pointer;
  border-radius: 12px;
  box-sizing: border-box;
  transition: background-color 0.3s;
  user-select: none;
  height: 24px;
  min-width: 44px;
}

.sim-switch--small {
  height: 18px;
  min-width: 32px;
}

.sim-switch--large {
  height: 32px;
  min-width: 58px;
}

.sim-switch.is-checked {
  background-color: var(--sim-primary);
}

.sim-switch.is-disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.sim-switch__core {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 2px;
  box-sizing: border-box;
}

.sim-switch__text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
  pointer-events: none;
  transition: opacity 0.25s;
  line-height: 1;
}

.sim-switch--small .sim-switch__text {
  font-size: 10px;
}

.sim-switch--large .sim-switch__text {
  font-size: 14px;
}

.sim-switch__text--on {
  left: 8px;
  opacity: 0;
}

.sim-switch__text--off {
  right: 8px;
  opacity: 1;
}

.sim-switch.is-checked .sim-switch__text--on {
  opacity: 1;
}

.sim-switch.is-checked .sim-switch__text--off {
  opacity: 0;
}

.sim-switch__action {
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.sim-switch--small .sim-switch__action {
  width: 14px;
  height: 14px;
}

.sim-switch--large .sim-switch__action {
  width: 26px;
  height: 26px;
}

.sim-switch:focus {
  outline: none;
}

.sim-switch:focus-visible {
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.3);
}
</style>
