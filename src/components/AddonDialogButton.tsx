import React from "react"
import { AddonDialog, AddonDialogProps } from "./AddonDialog"
import addClassName from "../utils/addClassName"
import { AddonButton, AddonButtonProps } from "./AddonButton"

export interface AddonDialogButtonProps extends AddonButtonProps {
  dialogProps?: Omit<AddonDialogProps, "isOpen" | "close">
}

export const AddonDialogButton: React.FC<AddonDialogButtonProps> = ({
  children,
  dialogProps = {},
  ...buttonProps
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <AddonButton
      {...buttonProps}
      onClick={(e) => {
        buttonProps.onClick?.(e)
        if (e.isDefaultPrevented()) return
        setIsOpen(true)
      }}
      className={addClassName(isOpen && "ladle-active", buttonProps.className)}
    >
      <AddonDialog
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        {...dialogProps}
      >
        {children}
      </AddonDialog>
    </AddonButton>
  )
}
