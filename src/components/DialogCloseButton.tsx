import React from "react"
import { LadleIconButtonProps, LadleIconButton } from "./LadleIconButton"
import { CloseIcon, IconProps } from "./icons"
import addClassName from "../utils/addClassName"

export interface DialogCloseButtonProps
  extends Omit<LadleIconButtonProps, "icon"> {
  iconProps?: IconProps
  wrapperProps?: React.ComponentProps<"div">
}

export const DialogCloseButton: React.FC<DialogCloseButtonProps> = ({
  iconProps,
  wrapperProps,
  ...buttonProps
}) => (
  <div
    {...wrapperProps}
    className={addClassName(
      "custom-ladle-close-button-wrapper",
      buttonProps.className
    )}
  >
    <LadleIconButton
      aria-label="Close modal"
      {...buttonProps}
      icon={<CloseIcon {...iconProps} />}
    />
  </div>
)
