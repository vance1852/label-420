import type { App, Plugin } from "vue";

// 导入组件
import SimButton from "./components/SimButton/SimButton.vue";
import SimInput from "./components/SimInput/SimInput.vue";
import SimCard from "./components/SimCard/SimCard.vue";
import SimAlert from "./components/SimAlert/SimAlert.vue";
import SimModal from "./components/SimModal/SimModal.vue";
import SimTag from "./components/SimTag/SimTag.vue";
import SimTooltip from "./components/SimTooltip/SimTooltip.vue";
import SimSwitch from "./components/SimSwitch/SimSwitch.vue";
import SimProgress from "./components/SimProgress/SimProgress.vue";

// 导入样式
import "./styles/index.css";

// 组件列表
const components = [
  SimButton,
  SimInput,
  SimCard,
  SimAlert,
  SimModal,
  SimTag,
  SimTooltip,
  SimSwitch,
  SimProgress,
];

// 全量安装
const install: Plugin = (app: App) => {
  components.forEach((component) => {
    app.component(component.name as string, component);
  });
};

// 默认导出 - 支持全量引入
export default {
  install,
};

// 按需导出 - 支持按需引入
export {
  SimButton,
  SimInput,
  SimCard,
  SimAlert,
  SimModal,
  SimTag,
  SimTooltip,
  SimSwitch,
  SimProgress,
};

// 导出类型
export type { ButtonProps } from "./components/SimButton/types";
export type { InputProps } from "./components/SimInput/types";
export type { CardProps } from "./components/SimCard/types";
export type { AlertProps } from "./components/SimAlert/types";
export type { ModalProps } from "./components/SimModal/types";
export type { TagProps } from "./components/SimTag/types";
export type { TooltipProps } from "./components/SimTooltip/types";
export type { SwitchProps } from "./components/SimSwitch/types";
export type { ProgressProps } from "./components/SimProgress/types";
