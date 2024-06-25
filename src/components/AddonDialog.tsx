import React from "react"
import { DialogCloseButton, DialogCloseButtonProps } from "./DialogCloseButton"
import addClassName from "../utils/addClassName"
import {
  DialogOverlay,
  DialogContent,
  DialogOverlayProps,
} from "../vendor/dialog"

export interface AddonDialogProps
  extends Omit<DialogOverlayProps, "onDismiss"> {
  label?: string
  close: (event: React.MouseEvent | React.KeyboardEvent) => void
  closeButtonProps?: DialogCloseButtonProps
  modalBodyProps?: Exclude<React.ComponentProps<"div">, "children">
  maxWidth?: string
}

export const AddonDialog: React.FC<AddonDialogProps> = ({
  label,
  close,
  children,
  modalBodyProps = {},
  closeButtonProps = {},
  isOpen,
  maxWidth = "40em",
  ...dialogOverlayProps
}) => {
  return (
    <DialogOverlay
      data-testid="ladle-dialog-overlay"
      {...dialogOverlayProps}
      isOpen={isOpen}
      onDismiss={close}
    >
      <DialogContent
        aria-label={label || "Modal"}
        data-testid="ladle-dialog"
        style={{ maxWidth }}
      >
        <DialogCloseButton
          {...closeButtonProps}
          onClick={(e) => {
            closeButtonProps.onClick?.(e)
            if (e.isDefaultPrevented()) return
            close(e)
          }}
        />
        <div
          {...modalBodyProps}
          className={addClassName("ladle-addon-modal-body", modalBodyProps?.id)}
        >
          {children}
        </div>
      </DialogContent>
    </DialogOverlay>
  )
}
