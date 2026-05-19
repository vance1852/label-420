export type SwitchSize = "default" | "small" | "large";

export interface SwitchProps {
  modelValue?: boolean;
  disabled?: boolean;
  activeColor?: string;
  inactiveColor?: string;
  activeText?: string;
  inactiveText?: string;
  size?: SwitchSize;
}
