export interface AlertProps {
  title?: string;
  type?: "success" | "warning" | "info" | "error";
  description?: string;
  closable?: boolean;
  center?: boolean;
  showIcon?: boolean;
}
