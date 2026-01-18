export interface ButtonProps {
  type?: "primary" | "success" | "warning" | "danger" | "info" | "default";
  size?: "large" | "default" | "small";
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  loading?: boolean;
}
