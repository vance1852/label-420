export type TooltipPlacement = "top" | "bottom" | "left" | "right";
export type TooltipTrigger = "hover" | "click";

export interface TooltipProps {
  content: string;
  placement?: TooltipPlacement;
  trigger?: TooltipTrigger;
  disabled?: boolean;
}
