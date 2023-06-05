import React from "react"
import { LadleIconButtonProps, LadleIconButton } from "./LadleIconButton"
import { CloseIcon } from "./icons"
import addClassName from "../utils/addClassName"

export interface DialogCloseButtonProps extends Omit<LadleIconButtonProps, "icon"> {
  svgProps?: React.ComponentProps<"svg">
  wrapperProps?: React.ComponentProps<"div">
}

export const DialogCloseButton: React.FC<
  DialogCloseButtonProps
> = ({ svgProps, wrapperProps, ...buttonProps}) => (
  <div
    {...wrapperProps}
    className={addClassName("custom-ladle-close-button-wrapper", buttonProps.className)}
  >
    <LadleIconButton
      aria-label="Close modal"
      {...buttonProps}
      icon={<CloseIcon />}
    />
  </div>
)
