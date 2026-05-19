<template>
  <div
    class="sim-progress"
    :class="[
      `sim-progress--${type}`,
      {
        'is-success': status === 'success',
        'is-warning': status === 'warning',
        'is-exception': status === 'exception',
      },
    ]"
  >
    <template v-if="type === 'line'">
      <div class="sim-progress__outer">
        <div
          class="sim-progress__inner"
          :style="{
            height: `${strokeWidth}px`,
            borderRadius: `${strokeWidth / 2}px`,
          }"
        >
          <div
            class="sim-progress__bar"
            :style="{
              ...barStyle,
              borderRadius: `${strokeWidth / 2}px`,
            }"
          ></div>
        </div>
      </div>
      <div v-if="showText" class="sim-progress__text">
        <template v-if="status === 'success'">
          <svg class="sim-progress__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </template>
        <template v-else-if="status === 'exception'">
          <svg class="sim-progress__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </template>
        <template v-else>
          {{ percentage }}%
        </template>
      </div>
    </template>
    <template v-else>
      <div class="sim-progress__circle">
        <svg viewBox="0 0 100 100" :style="{ width: `${strokeWidth * 20}px`, height: `${strokeWidth * 20}px` }">
          <circle
            class="sim-progress__circle-bg"
            cx="50"
            cy="50"
            r="45"
            fill="none"
            :stroke-width="strokeWidth"
          />
          <circle
            class="sim-progress__circle-bar"
            cx="50"
            cy="50"
            r="45"
            fill="none"
            :stroke-width="strokeWidth"
            :stroke-dasharray="circleDasharray"
            :stroke-dashoffset="circleDashoffset"
            :stroke="circleColor"
            stroke-linecap="round"
          />
        </svg>
        <div v-if="showText" class="sim-progress__text sim-progress__text--circle">
          <template v-if="status === 'success'">
            <svg class="sim-progress__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </template>
          <template v-else-if="status === 'exception'">
            <svg class="sim-progress__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </template>
          <template v-else>
            {{ percentage }}%
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import type { ProgressProps } from "./types";

export default defineComponent({
  name: "SimProgress",
  props: {
    percentage: {
      type: Number,
      required: true,
      validator: (value: number) => value >= 0 && value <= 100,
    },
    type: {
      type: String as () => ProgressProps["type"],
      default: "line",
    },
    strokeWidth: {
      type: Number,
      default: 6,
    },
    color: {
      type: [String, Array] as unknown as () => ProgressProps["color"],
      default: "",
    },
    showText: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String as () => ProgressProps["status"],
      default: "",
    },
  },
  setup(props) {
    const safePercentage = computed(() => {
      return Math.max(0, Math.min(100, props.percentage));
    });

    const getStatusColor = () => {
      switch (props.status) {
        case "success":
          return "var(--sim-success)";
        case "warning":
          return "var(--sim-warning)";
        case "exception":
          return "var(--sim-danger)";
        default:
          return props.color || "var(--sim-primary)";
      }
    };

    const barStyle = computed(() => {
      const baseColor = getStatusColor();
      const background = Array.isArray(baseColor)
        ? `linear-gradient(to right, ${baseColor.join(", ")})`
        : baseColor;
      return {
        width: `${safePercentage.value}%`,
        background,
      };
    });

    const circleColor = computed(() => {
      const baseColor = getStatusColor();
      return Array.isArray(baseColor) ? baseColor[0] : baseColor;
    });

    const circleDasharray = computed(() => {
      const circumference = 2 * Math.PI * 45;
      return `${(safePercentage.value / 100) * circumference} ${circumference}`;
    });

    const circleDashoffset = computed(() => {
      const circumference = 2 * Math.PI * 45;
      return circumference * 0.25;
    });

    return {
      barStyle,
      circleColor,
      circleDasharray,
      circleDashoffset,
    };
  },
});
</script>

<style scoped>
.sim-progress {
  position: relative;
  display: flex;
  align-items: center;
  line-height: 1;
}

.sim-progress--line {
  width: 100%;
}

.sim-progress__outer {
  flex: 1;
  display: flex;
  align-items: center;
}

.sim-progress__inner {
  width: 100%;
  background-color: #ebeef5;
  overflow: hidden;
}

.sim-progress__bar {
  height: 100%;
  background-color: var(--sim-primary);
  transition: width 0.6s ease;
}

.sim-progress.is-success .sim-progress__bar {
  background-color: var(--sim-success);
}

.sim-progress.is-warning .sim-progress__bar {
  background-color: var(--sim-warning);
}

.sim-progress.is-exception .sim-progress__bar {
  background-color: var(--sim-danger);
}

.sim-progress__text {
  min-width: 40px;
  margin-left: 10px;
  font-size: 12px;
  color: var(--sim-text-regular);
  line-height: 1;
  text-align: left;
  display: flex;
  align-items: center;
}

.sim-progress.is-success .sim-progress__text {
  color: var(--sim-success);
}

.sim-progress.is-warning .sim-progress__text {
  color: var(--sim-warning);
}

.sim-progress.is-exception .sim-progress__text {
  color: var(--sim-danger);
}

.sim-progress__icon {
  width: 14px;
  height: 14px;
}

.sim-progress--circle {
  display: inline-flex;
}

.sim-progress__circle {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.sim-progress__circle-bg {
  stroke: #ebeef5;
}

.sim-progress__circle-bar {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  transition: stroke-dasharray 0.6s ease;
}

.sim-progress.is-success .sim-progress__circle-bar {
  stroke: var(--sim-success);
}

.sim-progress.is-warning .sim-progress__circle-bar {
  stroke: var(--sim-warning);
}

.sim-progress.is-exception .sim-progress__circle-bar {
  stroke: var(--sim-danger);
}

.sim-progress__text--circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  text-align: center;
  justify-content: center;
  font-size: 14px;
}

.sim-progress__text--circle .sim-progress__icon {
  width: 24px;
  height: 24px;
}
</style>
