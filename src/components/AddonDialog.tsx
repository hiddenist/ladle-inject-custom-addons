import React from "react"
import { DialogCloseButton, DialogCloseButtonProps } from "./DialogCloseButton"
import useOnClickOutside from "../utils/useOnClickOutside"
import addClassName from "../utils/addClassName"

export interface AddonDialogProps extends React.ComponentProps<"div"> {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  /**
   * @default true
   */
  closeOnClickAway?: boolean
  closeButtonProps?: DialogCloseButtonProps
  modalBodyProps?: Exclude<React.ComponentProps<"div">, "children">
}

export const AddonDialog: React.FC<AddonDialogProps> = ({
  isOpen,
  setIsOpen,
  closeOnClickAway = true,
  children,
  modalBodyProps = {},
  closeButtonProps = {},
  ...divProps
}) => {
  const dialogRef = React.useRef<HTMLDivElement>(null)
  const closeDialog = () => {
    setIsOpen(false)
  }
  useOnClickOutside(dialogRef, closeDialog, closeOnClickAway)
  if (!isOpen) {
    return null
  }
  return (
    <div
      data-reach-dialog-content
      role="dialog"
      aria-modal={true}
      ref={dialogRef}
      {...divProps}
    >
      <DialogCloseButton
        {...closeButtonProps}
        onClick={(e) => {
          closeButtonProps.onClick?.(e)
          if (e.isDefaultPrevented()) return
          closeDialog()
        }}
      />
      <div
        {...modalBodyProps}
        className={addClassName("ladle-addon-modal-body", modalBodyProps?.id)}
      >
        {children}
      </div>
    </div>
  )
}
