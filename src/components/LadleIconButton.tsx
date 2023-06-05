
import addClassName from "../utils/addClassName"
import React from "react"

export interface LadleIconButtonProps extends Omit<React.ComponentProps<"button">, "children"> {
  icon: React.ReactNode
}

export const LadleIconButton: React.FC<LadleIconButtonProps> = ({ icon, ...buttonProps }) => (
    <button
      {...buttonProps}
      className={
        addClassName(
          "ladle-button",
          "custom-ladle-button",
          buttonProps.className
        )
      }
    >
      {icon}
    </button>
  )
