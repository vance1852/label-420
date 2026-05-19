<template>
  <div
    class="sim-tooltip"
    :class="{ 'is-disabled': disabled }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click.stop="handleClick"
    ref="tooltipRef"
  >
    <div class="sim-tooltip__trigger">
      <slot />
    </div>
    <transition name="sim-tooltip-fade">
      <div
        v-show="visible && !disabled"
        class="sim-tooltip__popper"
        :class="[`sim-tooltip--${placement}`]"
        ref="popperRef"
      >
        <span class="sim-tooltip__content">{{ content }}</span>
        <span class="sim-tooltip__arrow"></span>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted } from "vue";
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
    const visible = ref(false);
    const tooltipRef = ref<HTMLElement>();
    const popperRef = ref<HTMLElement>();

    let hideTimer: ReturnType<typeof setTimeout> | null = null;

    const show = () => {
      if (props.disabled) return;
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
      visible.value = true;
    };

    const hide = () => {
      hideTimer = setTimeout(() => {
        visible.value = false;
      }, 150);
    };

    const handleMouseEnter = () => {
      if (props.trigger === "hover") show();
    };

    const handleMouseLeave = () => {
      if (props.trigger === "hover") hide();
    };

    const handleClick = () => {
      if (props.trigger === "click") {
        visible.value ? hide() : show();
      }
    };

    const onDocumentClick = (e: MouseEvent) => {
      if (
        props.trigger === "click" &&
        tooltipRef.value &&
        !tooltipRef.value.contains(e.target as Node)
      ) {
        hide();
      }
    };

    document.addEventListener("click", onDocumentClick);

    onUnmounted(() => {
      document.removeEventListener("click", onDocumentClick);
      if (hideTimer) clearTimeout(hideTimer);
    });

    return {
      visible,
      tooltipRef,
      popperRef,
      handleMouseEnter,
      handleMouseLeave,
      handleClick,
    };
  },
});
</script>

<style scoped>
.sim-tooltip {
  position: relative;
  display: inline-block;
}

.sim-tooltip.is-disabled {
  cursor: not-allowed;
}

.sim-tooltip__trigger {
  display: inline-block;
}

.sim-tooltip__popper {
  position: absolute;
  z-index: 2000;
  padding: 8px 12px;
  font-size: 13px;
  line-height: 1.4;
  color: #fff;
  background-color: #303133;
  border-radius: var(--sim-border-radius);
  white-space: nowrap;
  pointer-events: none;
}

.sim-tooltip__arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px;
}

.sim-tooltip--top {
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
}

.sim-tooltip--top .sim-tooltip__arrow {
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  border-color: #303133 transparent transparent transparent;
}

.sim-tooltip--bottom {
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
}

.sim-tooltip--bottom .sim-tooltip__arrow {
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  border-color: transparent transparent #303133 transparent;
}

.sim-tooltip--left {
  right: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
}

.sim-tooltip--left .sim-tooltip__arrow {
  right: -12px;
  top: 50%;
  transform: translateY(-50%);
  border-color: transparent transparent transparent #303133;
}

.sim-tooltip--right {
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
}

.sim-tooltip--right .sim-tooltip__arrow {
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  border-color: transparent #303133 transparent transparent;
}

.sim-tooltip-fade-enter-active,
.sim-tooltip-fade-leave-active {
  transition: opacity 0.25s ease;
}

.sim-tooltip-fade-enter-from,
.sim-tooltip-fade-leave-to {
  opacity: 0;
}
</style>
