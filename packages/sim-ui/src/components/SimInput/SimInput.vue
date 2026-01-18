<template>
  <div
    class="sim-input"
    :class="[
      `sim-input--${size}`,
      {
        'is-disabled': disabled,
        'is-focus': isFocused,
      },
    ]"
  >
    <input
      ref="inputRef"
      class="sim-input__inner"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span
      v-if="clearable && modelValue"
      class="sim-input__clear"
      @click="handleClear"
    >
      ×
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { InputProps } from "./types";

export default defineComponent({
  name: "SimInput",
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String as () => InputProps["type"],
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as () => InputProps["size"],
      default: "default",
    },
  },
  emits: ["update:modelValue", "input", "focus", "blur", "clear"],
  setup(_props, { emit }) {
    const inputRef = ref<HTMLInputElement | null>(null);
    const isFocused = ref(false);

    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      emit("update:modelValue", target.value);
      emit("input", target.value);
    };

    const handleFocus = (e: FocusEvent) => {
      isFocused.value = true;
      emit("focus", e);
    };

    const handleBlur = (e: FocusEvent) => {
      isFocused.value = false;
      emit("blur", e);
    };

    const handleClear = () => {
      emit("update:modelValue", "");
      emit("clear");
      inputRef.value?.focus();
    };

    return {
      inputRef,
      isFocused,
      handleInput,
      handleFocus,
      handleBlur,
      handleClear,
    };
  },
});
</script>

<style scoped>
.sim-input {
  position: relative;
  display: inline-flex;
  width: 100%;
  max-width: 300px;
}

.sim-input__inner {
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--sim-text-primary);
  background-color: #fff;
  border: 1px solid var(--sim-border-color);
  border-radius: var(--sim-border-radius);
  outline: none;
  transition: var(--sim-transition);
}

.sim-input__inner::placeholder {
  color: var(--sim-text-secondary);
}

.sim-input__inner:hover:not(:disabled) {
  border-color: var(--sim-primary-light);
}

.sim-input.is-focus .sim-input__inner {
  border-color: var(--sim-primary);
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
}

.sim-input.is-disabled .sim-input__inner {
  background-color: #f5f7fa;
  color: var(--sim-text-secondary);
  cursor: not-allowed;
}

.sim-input--large .sim-input__inner {
  padding: 14px 16px;
  font-size: 16px;
}

.sim-input--small .sim-input__inner {
  padding: 6px 10px;
  font-size: 12px;
}

.sim-input__clear {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: var(--sim-text-secondary);
  background-color: #c0c4cc;
  border-radius: 50%;
  cursor: pointer;
  transition: var(--sim-transition);
}

.sim-input__clear:hover {
  background-color: var(--sim-info);
  color: #fff;
}
</style>
