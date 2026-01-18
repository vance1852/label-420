export interface TagProps {
  type?: "primary" | "success" | "warning" | "danger" | "info";
  closable?: boolean;
  size?: "large" | "default" | "small";
  effect?: "dark" | "light" | "plain";
  round?: boolean;
}
