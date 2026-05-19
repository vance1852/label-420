export type ProgressType = "line" | "circle";
export type ProgressStatus = "" | "success" | "warning" | "exception";

export interface ProgressProps {
  percentage: number;
  type?: ProgressType;
  strokeWidth?: number;
  color?: string | string[];
  showText?: boolean;
  status?: ProgressStatus;
}
