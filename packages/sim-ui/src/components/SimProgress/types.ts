export interface ProgressProps {
  percentage?: number;
  type?: "line" | "circle";
  strokeWidth?: number;
  color?: string | string[];
  showText?: boolean;
  status?: "" | "success" | "warning" | "exception";
}
