<template>
  <span
    ref="wrapperRef"
    class="sim-tooltip__wrapper"
    :class="{ 'is-disabled': disabled }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <slot />
    <span
      v-if="visible && !disabled"
      class="sim-tooltip"
      :class="'sim-tooltip--' + placement"
      :style="positionStyle"
    >
      <span class="sim-tooltip__content">{{ content }}</span>
      <span class="sim-tooltip__arrow" />
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onBeforeUnmount } from "vue";
import type { TooltipProps } from "./types";

export default defineComponent({
  name: "SimTooltip",
  props: {
    content: {
      type: String,
      default: "",
    },
    placement: {
      type: String as () => TooltipProps["placement"],
      default: "top",
    },
    trigger: {
      type: String as () => TooltipProps["trigger"],
      default: "hover",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const wrapperRef = ref<HTMLElement | null>(null);
    const visible = ref(false);

    const positionStyle = computed(() => {
      const offset = 12;
      const styles: Record<string, string> = {};
      switch (props.placement) {
        case "top":
          styles.bottom = "calc(100% + " + offset + "px)";
          styles.left = "50%";
          styles.transform = "translateX(-50%)";
          break;
        case "bottom":
          styles.top = "calc(100% + " + offset + "px)";
          styles.left = "50%";
          styles.transform = "translateX(-50%)";
          break;
        case "left":
          styles.right = "calc(100% + " + offset + "px)";
          styles.top = "50%";
          styles.transform = "translateY(-50%)";
          break;
        case "right":
          styles.left = "calc(100% + " + offset + "px)";
          styles.top = "50%";
          styles.transform = "translateY(-50%)";
          break;
      }
      return styles;
    });

    const show = () => {
      visible.value = true;
    };

    const hide = () => {
      visible.value = false;
    };

    const handleMouseEnter = () => {
      if (props.trigger === "hover" && !props.disabled) {
        show();
      }
    };

    const handleMouseLeave = () => {
      if (props.trigger === "hover") {
        hide();
      }
    };

    const handleClick = () => {
      if (props.trigger === "click" && !props.disabled) {
        visible.value ? hide() : show();
      }
    };

    const handleDocumentClick = (e: MouseEvent) => {
      if (
        props.trigger === "click" &&
        visible.value &&
        wrapperRef.value &&
        !wrapperRef.value.contains(e.target as Node)
      ) {
        hide();
      }
    };

    if (typeof document !== "undefined") {
      document.addEventListener("click", handleDocumentClick);
    }

    onBeforeUnmount(() => {
      if (typeof document !== "undefined") {
        document.removeEventListener("click", handleDocumentClick);
      }
    });

    return {
      wrapperRef,
      visible,
      positionStyle,
      handleMouseEnter,
      handleMouseLeave,
      handleClick,
    };
  },
});
</script>

<style scoped>
.sim-tooltip__wrapper {
  position: relative;
  display: inline-block;
}

.sim-tooltip__wrapper.is-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.sim-tooltip {
  position: absolute;
  z-index: 1000;
  padding: 6px 10px;
  background-color: var(--sim-text-primary);
  color: #fff;
  font-size: 12px;
  line-height: 1.4;
  border-radius: var(--sim-border-radius);
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  pointer-events: none;
  animation: simTooltipFade 0.2s ease;
}

@keyframes simTooltipFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.sim-tooltip__content {
  display: inline-block;
}

.sim-tooltip__arrow {
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: var(--sim-text-primary);
}

.sim-tooltip--top .sim-tooltip__arrow {
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-radius: 2px;
}

.sim-tooltip--bottom .sim-tooltip__arrow {
  top: -4px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-radius: 2px;
}

.sim-tooltip--left .sim-tooltip__arrow {
  right: -4px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  border-radius: 2px;
}

.sim-tooltip--right .sim-tooltip__arrow {
  left: -4px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  border-radius: 2px;
}
</style>
