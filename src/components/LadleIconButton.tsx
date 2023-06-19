import addClassName from "../utils/addClassName"
import React from "react"

export interface LadleIconButtonProps
  extends Omit<React.ComponentProps<"button">, "children"> {
  icon: React.ReactNode
}

export const LadleIconButton: React.FC<LadleIconButtonProps> = ({
  icon,
  ...buttonProps
}) => (
  <button
    {...buttonProps}
    className={addClassName("ladle-button", buttonProps.className)}
    style={{
      height: 36,
      width: 36,
      borderColor: "transparent",
      boxShadow: "none",
      ...buttonProps.style,
    }}
  >
    {icon}
  </button>
)
