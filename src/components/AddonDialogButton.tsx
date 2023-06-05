import React from "react"
import { AddonDialog, AddonDialogProps } from "./AddonDialog"
import addClassName from "../utils/addClassName"
import { AddonButton, AddonButtonProps } from "./AddonButton"

export interface AddonDialogButtonProps extends AddonButtonProps {
  dialogProps?: Omit<AddonDialogProps, "isOpen" | "setIsOpen">
}

export const AddonDialogButton: React.FC<AddonDialogButtonProps> = ({
  children,
  dialogProps = {},
  ...buttonProps
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const generatedId = React.useMemo(() => "d" + crypto.randomUUID(), [])
  const dialogId = dialogProps.id ?? generatedId
  return (
    <AddonButton
      aria-describedby={isOpen ? dialogId : undefined}
      {...buttonProps}
      onClick={(e) => {
        buttonProps.onClick?.(e)
        if (e.isDefaultPrevented()) return
        setIsOpen(true)
      }}
      className={addClassName(
        isOpen && "custom-dialog-button-open",
        buttonProps.className
      )}
    >
      <AddonDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        {...dialogProps}
        id={dialogId}
      >
        {children}
      </AddonDialog>
    </AddonButton>
  )
}
