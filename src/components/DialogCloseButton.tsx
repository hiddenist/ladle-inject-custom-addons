import React from "react"
import { LadleIconButtonProps, LadleIconButton } from "./LadleIconButton"
import { CloseIcon, IconProps } from "./icons"

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
    style={{
      position: "absolute",
      insetInlineEnd: -6,
      top: 0,
      ...wrapperProps?.style,
    }}
  >
    <LadleIconButton
      aria-label="Close modal"
      {...buttonProps}
      icon={<CloseIcon {...iconProps} />}
    />
  </div>
)
