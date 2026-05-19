<template>
  <div class="sim-tooltip" ref="tooltipRef">
    <div
      class="sim-tooltip__trigger"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import type { TooltipProps } from "./types";

export default defineComponent({
  name: "SimTooltip",
  props: {
    content: {
      type: String,
      required: true,
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
    const tooltipRef = ref<HTMLElement | null>(null);
    const visible = ref(false);
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    let popperEl: HTMLElement | null = null;

    const createPopper = () => {
      if (popperEl) return;
      popperEl = document.createElement("div");
      popperEl.className = `sim-tooltip__popper sim-tooltip__popper--${props.placement}`;
      popperEl.style.position = "fixed";
      popperEl.style.zIndex = "9999";
      popperEl.style.padding = "8px 12px";
      popperEl.style.fontSize = "12px";
      popperEl.style.lineHeight = "1.5";
      popperEl.style.color = "#fff";
      popperEl.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
      popperEl.style.borderRadius = "4px";
      popperEl.style.whiteSpace = "nowrap";
      popperEl.style.pointerEvents = "none";
      popperEl.style.opacity = "0";
      popperEl.style.transition = "opacity 0.2s ease";

      const arrow = document.createElement("div");
      arrow.className = "sim-tooltip__arrow";
      arrow.style.position = "absolute";
      arrow.style.width = "0";
      arrow.style.height = "0";
      arrow.style.border = "6px solid transparent";

      const content = document.createElement("div");
      content.className = "sim-tooltip__content";
      content.textContent = props.content;

      popperEl.appendChild(arrow);
      popperEl.appendChild(content);

      document.body.appendChild(popperEl);
    };

    const updatePosition = () => {
      if (!tooltipRef.value || !popperEl) return;
      const triggerEl = tooltipRef.value.querySelector(".sim-tooltip__trigger");
      if (!triggerEl) return;

      const triggerRect = triggerEl.getBoundingClientRect();
      const popperRect = popperEl.getBoundingClientRect();
      const gap = 8;

      let top = 0;
      let left = 0;

      switch (props.placement) {
        case "top":
          top = triggerRect.top - popperRect.height - gap;
          left = triggerRect.left + (triggerRect.width - popperRect.width) / 2;
          break;
        case "bottom":
          top = triggerRect.bottom + gap;
          left = triggerRect.left + (triggerRect.width - popperRect.width) / 2;
          break;
        case "left":
          top = triggerRect.top + (triggerRect.height - popperRect.height) / 2;
          left = triggerRect.left - popperRect.width - gap;
          break;
        case "right":
          top = triggerRect.top + (triggerRect.height - popperRect.height) / 2;
          left = triggerRect.right + gap;
          break;
      }

      popperEl.style.top = `${top}px`;
      popperEl.style.left = `${left}px`;

      const arrow = popperEl.querySelector(".sim-tooltip__arrow") as HTMLElement;
      if (arrow) {
        arrow.style.position = "absolute";
        arrow.style.width = "0";
        arrow.style.height = "0";
        arrow.style.border = "6px solid transparent";
        switch (props.placement) {
          case "top":
            arrow.style.bottom = "-12px";
            arrow.style.left = "50%";
            arrow.style.transform = "translateX(-50%)";
            arrow.style.borderTopColor = "rgba(0, 0, 0, 0.75)";
            break;
          case "bottom":
            arrow.style.top = "-12px";
            arrow.style.left = "50%";
            arrow.style.transform = "translateX(-50%)";
            arrow.style.borderBottomColor = "rgba(0, 0, 0, 0.75)";
            break;
          case "left":
            arrow.style.right = "-12px";
            arrow.style.top = "50%";
            arrow.style.transform = "translateY(-50%)";
            arrow.style.borderLeftColor = "rgba(0, 0, 0, 0.75)";
            break;
          case "right":
            arrow.style.left = "-12px";
            arrow.style.top = "50%";
            arrow.style.transform = "translateY(-50%)";
            arrow.style.borderRightColor = "rgba(0, 0, 0, 0.75)";
            break;
        }
      }
    };

    const show = () => {
      if (props.disabled) return;
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
      createPopper();
      visible.value = true;
      setTimeout(() => {
        updatePosition();
        if (popperEl) {
          popperEl.style.opacity = "1";
        }
      }, 0);
    };

    const hide = () => {
      if (props.trigger === "click") return;
      hideTimer = setTimeout(() => {
        visible.value = false;
        if (popperEl) {
          popperEl.style.opacity = "0";
          setTimeout(() => {
            if (popperEl && document.body.contains(popperEl)) {
              document.body.removeChild(popperEl);
            }
            popperEl = null;
          }, 200);
        }
      }, 100);
    };

    const handleMouseEnter = () => {
      if (props.trigger === "hover") {
        show();
      }
    };

    const handleMouseLeave = () => {
      if (props.trigger === "hover") {
        hide();
      }
    };

    const handleClick = (_e: Event) => {
      if (props.trigger === "click") {
        if (visible.value) {
          visible.value = false;
          if (popperEl) {
            popperEl.style.opacity = "0";
            setTimeout(() => {
              if (popperEl && document.body.contains(popperEl)) {
                document.body.removeChild(popperEl);
              }
              popperEl = null;
            }, 200);
          }
        } else {
          show();
        }
      }
    };

    const handleDocumentClick = (e: Event) => {
      if (
        props.trigger === "click" &&
        tooltipRef.value &&
        !tooltipRef.value.contains(e.target as Node)
      ) {
        visible.value = false;
        if (popperEl) {
          popperEl.style.opacity = "0";
          setTimeout(() => {
            if (popperEl && document.body.contains(popperEl)) {
              document.body.removeChild(popperEl);
            }
            popperEl = null;
          }, 200);
        }
      }
    };

    onMounted(() => {
      document.addEventListener("click", handleDocumentClick);
    });

    onUnmounted(() => {
      document.removeEventListener("click", handleDocumentClick);
      if (hideTimer) {
        clearTimeout(hideTimer);
      }
      if (popperEl && document.body.contains(popperEl)) {
        document.body.removeChild(popperEl);
      }
    });

    return {
      tooltipRef,
      visible,
      handleMouseEnter,
      handleMouseLeave,
      handleClick,
    };
  },
});
</script>

<style scoped>
.sim-tooltip {
  display: inline-block;
}

.sim-tooltip__trigger {
  display: inline-block;
  cursor: inherit;
}
</style>
