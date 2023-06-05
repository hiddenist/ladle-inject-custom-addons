import React from "react"
import { AddonDialog, AddonDialogProps } from "./AddonDialog"
import addClassName from "../utils/addClassName"
import { AddonButton, AddonButtonProps } from "./AddonButton"

export interface AddonDialogButtonProps extends AddonButtonProps {
  dialogProps?: AddonDialogProps
}

export const AddonDialogButton: React.FC<AddonDialogButtonProps> = ({ children, dialogProps, ...buttonProps }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const dialogId = React.useMemo(crypto.randomUUID, [])
  return (
    <>
      <AddonButton
        aria-describedby={isOpen ? crypto.randomUUID() : undefined}
        onClick={() => {
          setIsOpen(true)
        }}
        {...buttonProps}
        className={addClassName(isOpen && "custom-dialog-button-open", buttonProps.className)}
      />
      <AddonDialog id={dialogId} isOpen={isOpen} setIsOpen={setIsOpen} {...dialogProps}>
        {children}
      </AddonDialog>
    </>
  )
}
