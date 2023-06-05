import React from "react"
import { LadleIconButtonProps, LadleIconButton } from "./LadleIconButton"
import { CloseIcon } from "./icons"

export interface DialogCloseButtonProps extends Omit<LadleIconButtonProps, "icon"> {
  svgProps?: React.ComponentProps<"svg">
}

export const DialogCloseButton: React.FC<
  DialogCloseButtonProps
> = ({ svgProps, ...buttonProps}) => (
  <LadleIconButton
    aria-label="Close modal"
    {...buttonProps}
    icon={<CloseIcon />}
  />
)
