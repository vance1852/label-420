<template>
  <div class="sim-card" :class="[`sim-card--shadow-${shadow}`]">
    <div v-if="header || $slots.header" class="sim-card__header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="sim-card__body" :style="bodyStyle">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { CardProps } from "./types";

export default defineComponent({
  name: "SimCard",
  props: {
    header: {
      type: String,
      default: "",
    },
    shadow: {
      type: String as () => CardProps["shadow"],
      default: "always",
    },
    bodyStyle: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>

<style scoped>
.sim-card {
  background-color: #fff;
  border: 1px solid var(--sim-border-color);
  border-radius: var(--sim-border-radius);
  overflow: hidden;
  transition: var(--sim-transition);
}

.sim-card--shadow-always {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.sim-card--shadow-hover:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.sim-card--shadow-never {
  box-shadow: none;
}

.sim-card__header {
  padding: 18px 20px;
  border-bottom: 1px solid var(--sim-border-color);
  font-size: 16px;
  font-weight: 500;
  color: var(--sim-text-primary);
}

.sim-card__body {
  padding: 20px;
}
</style>
