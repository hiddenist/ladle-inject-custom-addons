import React from "react"
import { LadleIconButtonProps, LadleIconButton } from "./LadleIconButton"
import { LadleDialogCloseIcon, LadleIconProps } from "./icons"

export interface LadleDialogCloseButtonProps
  extends Omit<LadleIconButtonProps, "icon"> {
  iconProps?: LadleIconProps
  wrapperProps?: React.ComponentProps<"div">
}

export const LadleDialogCloseButton: React.FC<LadleDialogCloseButtonProps> = ({
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
      icon={<LadleDialogCloseIcon {...iconProps} />}
    />
  </div>
)
