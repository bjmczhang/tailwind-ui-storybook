import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { CgSpinner } from "react-icons/cg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "contained" | "outlined" | "soft" | "text";
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "black"
    | "white";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "rounded" | "pill" | "circle" | "square";
  iconOnly?: boolean;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "contained",
      color = "primary",
      size = "md",
      shape = "rounded",
      iconOnly = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold shadow-xs transition-all focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    // ✨ 核心优化：使用语义化变量
    // 这里利用了 Tailwind 的透明度修改器 (Opacity Modifier)，如 bg-primary/10
    const colorMap: Record<
      string,
      {
        contained: string;
        outlined: string;
        soft: string;
        text: string;
      }
    > = {
      primary: {
        contained:
          "bg-primary text-primary-content hover:bg-primary-hover focus-visible:outline-primary",
        outlined:
          "ring-1 ring-inset ring-primary text-primary hover:bg-primary/5",
        soft: "bg-primary/10 text-primary hover:bg-primary/20",
        text: "text-primary hover:bg-primary/10",
      },
      secondary: {
        // Secondary 通常是白底灰边，逻辑稍有不同
        contained:
          "bg-secondary text-secondary-content ring-1 ring-inset ring-secondary-border hover:bg-secondary-hover",
        outlined:
          "ring-1 ring-inset ring-secondary-content text-secondary-content hover:bg-secondary-content/5",
        soft: "bg-secondary-content/10 text-secondary-content hover:bg-secondary-content/20",
        text: "text-secondary-content hover:bg-secondary-content/10",
      },
      success: {
        contained:
          "bg-success text-white hover:bg-success-hover focus-visible:outline-success",
        outlined:
          "ring-1 ring-inset ring-success text-success hover:bg-success/10",
        soft: "bg-success/10 text-success hover:bg-success/20",
        text: "text-success hover:bg-success/10",
      },
      error: {
        contained:
          "bg-error text-white hover:bg-error-hover focus-visible:outline-error",
        outlined: "ring-1 ring-inset ring-error text-error hover:bg-error/10",
        soft: "bg-error/10 text-error hover:bg-error/20",
        text: "text-error hover:bg-error/10",
      },
      warning: {
        contained:
          "bg-warning text-white hover:bg-warning-hover focus-visible:outline-warning",
        outlined:
          "ring-1 ring-inset ring-warning text-warning hover:bg-warning/10",
        soft: "bg-warning/10 text-warning hover:bg-warning/20",
        text: "text-warning hover:bg-warning/10",
      },
      info: {
        contained:
          "bg-info text-white hover:bg-info-hover focus-visible:outline-info",
        outlined: "ring-1 ring-inset ring-info text-info hover:bg-info/10",
        soft: "bg-info/10 text-info hover:bg-info/20",
        text: "text-info hover:bg-info/10",
      },
      black: {
        contained:
          "bg-gray-900 text-white hover:bg-gray-800 focus-visible:outline-gray-900",
        outlined:
          "ring-1 ring-inset ring-gray-900 text-gray-900 hover:bg-gray-100",
        soft: "bg-gray-100 text-gray-900 hover:bg-gray-200",
        text: "text-gray-900 hover:bg-gray-100",
      },
      white: {
        contained:
          "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
        outlined: "ring-1 ring-inset ring-white text-white hover:bg-white/10",
        soft: "bg-white/20 text-white hover:bg-white/30",
        text: "text-white hover:bg-white/10",
      },
    };

    const sizes = {
      xs: "px-2 py-1 text-xs gap-x-1.5",
      sm: "px-2.5 py-1 text-sm gap-x-1.5",
      md: "px-3 py-1.5 text-sm gap-x-2",
      lg: "px-3.5 py-2 text-base gap-x-2",
      xl: "px-4 py-2.5 text-base gap-x-2",
    };

    const iconSizes = {
      xs: "p-1",
      sm: "p-1.5",
      md: "p-2",
      lg: "p-2.5",
      xl: "p-3",
    };

    const shapes = {
      rounded: "rounded-md",
      pill: "rounded-full",
      circle: "rounded-full",
      square: "rounded-none",
    };

    const colorStyles = colorMap[color] || colorMap.primary;

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled || loading}
        className={cn(
          baseStyles,
          colorStyles[variant],
          iconOnly ? iconSizes[size] : sizes[size],
          shapes[shape],
          loading && "cursor-wait",
          className
        )}
        {...props}
      >
        {loading && (
          <CgSpinner
            className={cn(
              "shrink-0 animate-spin",
              iconOnly ? "" : "-ml-1 mr-2 size-4"
            )}
          />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
