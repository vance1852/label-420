<template>
  <div
    class="sim-progress"
    :class="[
      `sim-progress--${type}`,
      status ? `sim-progress--${status}` : '',
    ]"
  >
    <template v-if="type === 'line'">
      <div class="sim-progress__bar">
        <div
          class="sim-progress__outer"
          :style="{ height: strokeWidth + 'px' }"
        >
          <div
            class="sim-progress__inner"
            :style="lineBarStyle"
          >
          </div>
        </div>
      </div>
      <div v-if="showText" class="sim-progress__text">
        <template v-if="!status">
          <span>{{ percentage }}%</span>
        </template>
        <template v-else>
          <span v-if="status === 'success'" class="sim-progress__icon">✓</span>
          <span v-else-if="status === 'warning'" class="sim-progress__icon">!</span>
          <span v-else-if="status === 'exception'" class="sim-progress__icon">✕</span>
        </template>
      </div>
    </template>
    <template v-else>
      <div class="sim-progress__circle" :style="{ width: circleSize + 'px', height: circleSize + 'px' }">
        <svg viewBox="0 0 100 100">
          <path
            class="sim-progress__circle-track"
            :d="circlePath"
            fill="none"
            :stroke-width="relativeStrokeWidth"
            stroke="#e5e9f2"
          />
          <path
            class="sim-progress__circle-bar"
            :d="circlePath"
            fill="none"
            :stroke="currentColor"
            :stroke-width="relativeStrokeWidth"
            :stroke-dasharray="circleDashArray"
            :stroke-linecap="'round'"
            :style="{ strokeDashoffset: circleDashOffset }"
          />
        </svg>
        <div v-if="showText" class="sim-progress__circle-text">
          <template v-if="!status">
            <span>{{ percentage }}%</span>
          </template>
          <template v-else>
            <span v-if="status === 'success'" class="sim-progress__icon">✓</span>
            <span v-else-if="status === 'warning'" class="sim-progress__icon">!</span>
            <span v-else-if="status === 'exception'" class="sim-progress__icon">✕</span>
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
      default: 0,
      validator: (val: number) => val >= 0 && val <= 100,
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
      type: [String, Array] as () => ProgressProps["color"],
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
    const statusColorMap: Record<string, string> = {
      success: "var(--sim-success)",
      warning: "var(--sim-warning)",
      exception: "var(--sim-danger)",
    };

    const currentColor = computed(() => {
      if (props.status && statusColorMap[props.status]) {
        return statusColorMap[props.status];
      }
      if (typeof props.color === "string" && props.color) {
        return props.color;
      }
      return "var(--sim-primary)";
    });

    const lineBarStyle = computed(() => {
      const style: Record<string, string> = {
        width: `${Math.min(props.percentage, 100)}%`,
      };
      if (typeof props.color === "string" && props.color) {
        style.backgroundColor = props.color;
      } else if (Array.isArray(props.color) && props.color.length > 0) {
        const len = props.color.length;
        const stops = props.color
          .map((c, i) => `${c} ${(i / (len - 1)) * 100}%`)
          .join(", ");
        style.backgroundImage = `linear-gradient(to right, ${stops})`;
      } else if (props.status && statusColorMap[props.status]) {
        style.backgroundColor = statusColorMap[props.status];
      } else {
        style.backgroundColor = "var(--sim-primary)";
      }
      return style;
    });

    const circleSize = computed(() => 120);
    const relativeStrokeWidth = computed(() => {
      return ((props.strokeWidth / circleSize.value) * 100).toFixed(1);
    });

    const radius = computed(() => {
      return 50 - parseFloat(relativeStrokeWidth.value) / 2;
    });

    const circlePath = computed(() => {
      const r = radius.value;
      return `M 50 50 m 0 -${r} a ${r} ${r} 0 1 1 0 ${r * 2} a ${r} ${r} 0 1 1 0 -${r * 2}`;
    });

    const perimeter = computed(() => {
      return 2 * Math.PI * radius.value;
    });

    const circleDashArray = computed(() => {
      return `${perimeter.value.toFixed(2)}px, ${perimeter.value.toFixed(2)}px`;
    });

    const circleDashOffset = computed(() => {
      const offset = perimeter.value * (1 - Math.min(props.percentage, 100) / 100);
      return `${offset.toFixed(2)}px`;
    });

    return {
      currentColor,
      lineBarStyle,
      circleSize,
      relativeStrokeWidth,
      circlePath,
      circleDashArray,
      circleDashOffset,
    };
  },
});
</script>

<style scoped>
.sim-progress {
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 1;
}

.sim-progress--line {
  width: 100%;
  gap: 12px;
}

.sim-progress--circle {
  flex-direction: column;
  align-items: center;
}

.sim-progress__bar {
  flex: 1;
}

.sim-progress__outer {
  width: 100%;
  border-radius: 100px;
  background-color: #e5e9f2;
  overflow: hidden;
}

.sim-progress__inner {
  height: 100%;
  border-radius: 100px;
  transition: width 0.4s ease;
}

.sim-progress__text {
  flex-shrink: 0;
  min-width: 48px;
  text-align: right;
  font-size: 14px;
  color: var(--sim-text-regular);
}

.sim-progress__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
}

.sim-progress--success .sim-progress__icon {
  background-color: var(--sim-success);
}

.sim-progress--warning .sim-progress__icon {
  background-color: var(--sim-warning);
}

.sim-progress--exception .sim-progress__icon {
  background-color: var(--sim-danger);
}

.sim-progress__circle {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.sim-progress__circle svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.sim-progress__circle-track {
  stroke-linecap: round;
}

.sim-progress__circle-bar {
  transition: stroke-dashoffset 0.4s ease;
}

.sim-progress__circle-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  font-weight: 600;
  color: var(--sim-text-primary);
  text-align: center;
  line-height: 1;
}

.sim-progress--circle .sim-progress__icon {
  width: 22px;
  height: 22px;
  font-size: 13px;
}
</style>
