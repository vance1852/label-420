export interface InputProps {
  modelValue?: string | number;
  type?: "text" | "password" | "number" | "email" | "tel" | "url";
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
  size?: "large" | "default" | "small";
  prefixIcon?: string;
  suffixIcon?: string;
}
