<template>
  <div
    class="sim-progress"
    :class="[
      'sim-progress--' + type,
      status ? 'sim-progress--' + status : '',
    ]"
  >
    <template v-if="type === 'line'">
      <div class="sim-progress__line" :style="lineContainerStyle">
        <div class="sim-progress__inner" :style="lineInnerStyle">
          <span v-if="showText && !hasStatus && !isInsideText" class="sim-progress__text" :style="textStyle">
            <slot name="default">{{ displayPercentage }}%</slot>
          </span>
        </div>
        <span v-if="showText && isInsideText && !hasStatus" class="sim-progress__text sim-progress__text--inside" :style="insideTextStyle">
          <slot name="default">{{ displayPercentage }}%</slot>
        </span>
      </div>
      <span v-if="showText && !isInsideText && !hasStatus" class="sim-progress__text sim-progress__text--inline" :style="statusTextStyle">
        <slot name="default">{{ displayPercentage }}%</slot>
      </span>
      <span v-if="hasStatus" class="sim-progress__status-wrap" :style="statusWrapStyle">
        <span class="sim-progress__status-icon">{{ statusIcon }}</span>
        <span class="sim-progress__status-text">{{ statusText }}</span>
      </span>
    </template>
    <template v-else>
      <div class="sim-progress__circle">
        <svg class="sim-progress__svg" :style="svgSizeStyle" viewBox="0 0 100 100">
          <defs>
            <linearGradient :id="gradientId" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop v-for="(c, i) in gradientStops" :key="i" :offset="(i * (100 / (gradientStops.length - 1))) + '%'" :stop-color="c" />
            </linearGradient>
          </defs>
          <circle class="sim-progress__track" cx="50" cy="50" r="45" fill="none" :stroke-width="normalizedStrokeWidth" />
          <circle
            class="sim-progress__bar"
            cx="50"
            cy="50"
            r="45"
            fill="none"
            :stroke-width="normalizedStrokeWidth"
            :style="circleBarStyle"
            :stroke-dasharray="dashArray"
            :stroke-dashoffset="dashOffset"
            stroke-linecap="round"
          />
        </svg>
        <span v-if="showText" class="sim-progress__text sim-progress__text--circle" :style="circleTextStyle">
          <template v-if="hasStatus">
            <span class="sim-progress__status-icon">{{ statusIcon }}</span>
          </template>
          <template v-else>
            <slot name="default">{{ displayPercentage }}%</slot>
          </template>
        </span>
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
    const displayPercentage = computed(() => {
      let p = props.percentage;
      if (p < 0) p = 0;
      if (p > 100) p = 100;
      return Math.round(p);
    });

    const hasStatus = computed(() => !!props.status);

    const statusText = computed(() => {
      switch (props.status) {
        case "success":
          return "成功";
        case "exception":
          return "异常";
        case "warning":
          return "警告";
        default:
          return "";
      }
    });

    const statusIcon = computed(() => {
      switch (props.status) {
        case "success":
          return "✓";
        case "exception":
          return "✕";
        case "warning":
          return "!";
        default:
          return "";
      }
    });

    const statusColor = computed(() => {
      switch (props.status) {
        case "success":
          return "var(--sim-success)";
        case "exception":
          return "var(--sim-danger)";
        case "warning":
          return "var(--sim-warning)";
        default:
          return "var(--sim-primary)";
      }
    });

    const isInsideText = computed(() => props.type === "line" && props.strokeWidth >= 16);

    const colorArray = computed(() => {
      if (Array.isArray(props.color) && props.color.length > 0) {
        return props.color;
      }
      return [];
    });

    const gradientId = computed(() => "sim-progress-gradient-" + displayPercentage.value);

    const gradientStops = computed(() => colorArray.value);

    const lineInnerStyle = computed(() => {
      const p = displayPercentage.value;
      const styles: Record<string, string> = {
        width: p + "%",
        height: props.strokeWidth + "px",
      };
      if (hasStatus.value) {
        styles.backgroundColor = statusColor.value;
      } else if (typeof props.color === "string" && props.color) {
        styles.backgroundColor = props.color;
      } else if (colorArray.value.length > 0) {
        const stops = colorArray.value.map((c, i) => c + " " + (i * (100 / (colorArray.value.length - 1))) + "%").join(", ");
        styles.backgroundImage = "linear-gradient(90deg, " + stops + ")";
      } else {
        styles.backgroundColor = "var(--sim-primary)";
      }
      return styles;
    });

    const lineContainerStyle = computed(() => ({
      height: props.strokeWidth + "px",
    }));

    const textStyle = computed(() => {
      const styles: Record<string, string> = {};
      if (hasStatus.value) {
        styles.color = "#fff";
      }
      return styles;
    });

    const insideTextStyle = computed(() => ({
      left: displayPercentage.value + "%",
      transform: "translateX(-50%)",
      color: "#fff",
    }));

    const statusTextStyle = computed(() => {
      const styles: Record<string, string> = {};
      if (hasStatus.value) {
        styles.color = statusColor.value;
      }
      return styles;
    });

    const statusWrapStyle = computed(() => {
      const styles: Record<string, string> = {
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        fontSize: "14px",
      };
      if (hasStatus.value) {
        styles.color = statusColor.value;
      }
      return styles;
    });

    const svgSizeStyle = computed(() => ({
      width: props.strokeWidth * 16 + "px",
      height: props.strokeWidth * 16 + "px",
    }));

    const normalizedStrokeWidth = computed(() => {
      const w = props.strokeWidth;
      const maxW = 10;
      return Math.min(w, maxW);
    });

    const circleBarStyle = computed(() => {
      const styles: Record<string, string> = {};
      if (hasStatus.value) {
        styles.stroke = statusColor.value;
      } else if (typeof props.color === "string" && props.color) {
        styles.stroke = props.color;
      } else if (colorArray.value.length > 0) {
        styles.stroke = "url(#" + gradientId.value + ")";
      } else {
        styles.stroke = "var(--sim-primary)";
      }
      return styles;
    });

    const dashArray = computed(() => 283);
    const dashOffset = computed(() => {
      const p = displayPercentage.value;
      return 283 - (p / 100) * 283;
    });

    const circleTextStyle = computed(() => {
      const styles: Record<string, string> = {};
      if (hasStatus.value) {
        styles.color = statusColor.value;
      }
      return styles;
    });

    return {
      displayPercentage,
      hasStatus,
      statusText,
      statusIcon,
      isInsideText,
      colorArray,
      gradientId,
      gradientStops,
      lineInnerStyle,
      lineContainerStyle,
      textStyle,
      insideTextStyle,
      statusTextStyle,
      statusWrapStyle,
      svgSizeStyle,
      normalizedStrokeWidth,
      circleBarStyle,
      dashArray,
      dashOffset,
      circleTextStyle,
    };
  },
});
</script>

<style scoped>
.sim-progress {
  width: 100%;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
}

.sim-progress--line {
  gap: 8px;
}

.sim-progress--circle {
  flex-direction: column;
  align-items: center;
}

.sim-progress__line {
  position: relative;
  width: 100%;
  background-color: #ebeef5;
  border-radius: 100px;
  overflow: hidden;
  box-sizing: border-box;
}

.sim-progress__inner {
  position: relative;
  transition: width 0.3s ease;
  border-radius: 100px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.sim-progress__text {
  font-size: 14px;
  color: var(--sim-text-regular);
  line-height: 1;
  white-space: nowrap;
}

.sim-progress__text--inside {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: #fff;
  font-weight: 500;
}

.sim-progress__text--inline {
  flex-shrink: 0;
  min-width: 40px;
  text-align: center;
  font-size: 14px;
}

.sim-progress__text--circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 2px;
}

.sim-progress__circle {
  position: relative;
  display: inline-block;
}

.sim-progress__svg {
  transform: rotate(-90deg);
  display: block;
}

.sim-progress__track {
  stroke: #ebeef5;
}

.sim-progress__bar {
  transition: stroke-dashoffset 0.3s ease;
}

.sim-progress__status-wrap {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
}

.sim-progress__status-icon {
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
}

.sim-progress__status-text {
  font-size: 14px;
  color: var(--sim-text-regular);
}
</style>
