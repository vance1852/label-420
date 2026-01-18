<template>
  <teleport to="body">
    <transition name="sim-modal-fade">
      <div
        v-if="modelValue"
        class="sim-modal__overlay"
        @click.self="handleOverlayClick"
      >
        <div class="sim-modal" :style="{ width }">
          <div class="sim-modal__header">
            <span class="sim-modal__title">{{ title }}</span>
            <span v-if="showClose" class="sim-modal__close" @click="handleClose"
              >×</span
            >
          </div>
          <div class="sim-modal__body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="sim-modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "SimModal",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "500px",
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    closeOnClickModal: {
      type: Boolean,
      default: true,
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["update:modelValue", "close"],
  setup(props, { emit }) {
    const handleClose = () => {
      emit("update:modelValue", false);
      emit("close");
    };

    const handleOverlayClick = () => {
      if (props.closeOnClickModal) {
        handleClose();
      }
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && props.closeOnPressEscape && props.modelValue) {
        handleClose();
      }
    };

    onMounted(() => {
      document.addEventListener("keydown", handleKeydown);
    });

    onUnmounted(() => {
      document.removeEventListener("keydown", handleKeydown);
    });

    return {
      handleClose,
      handleOverlayClick,
    };
  },
});
</script>

<style scoped>
.sim-modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.sim-modal {
  background-color: #fff;
  border-radius: var(--sim-border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.sim-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid var(--sim-border-color);
}

.sim-modal__title {
  font-size: 18px;
  font-weight: 500;
  color: var(--sim-text-primary);
}

.sim-modal__close {
  font-size: 20px;
  color: var(--sim-text-secondary);
  cursor: pointer;
  transition: var(--sim-transition);
}

.sim-modal__close:hover {
  color: var(--sim-text-primary);
}

.sim-modal__body {
  padding: 20px;
  flex: 1;
  overflow-y: auto;
}

.sim-modal__footer {
  padding: 16px 20px;
  border-top: 1px solid var(--sim-border-color);
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.sim-modal-fade-enter-active,
.sim-modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.sim-modal-fade-enter-active .sim-modal,
.sim-modal-fade-leave-active .sim-modal {
  transition: transform 0.3s ease;
}

.sim-modal-fade-enter-from,
.sim-modal-fade-leave-to {
  opacity: 0;
}

.sim-modal-fade-enter-from .sim-modal,
.sim-modal-fade-leave-to .sim-modal {
  transform: scale(0.9);
}
</style>
