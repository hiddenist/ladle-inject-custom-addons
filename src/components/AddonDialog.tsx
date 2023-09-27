import React from "react"
import {
  LadleDialogCloseButton,
  LadleDialogCloseButtonProps,
} from "./LadleDialogCloseButton"
import addClassName from "../utils/addClassName"
import { Dialog, DialogProps } from "../vendor/dialog"

export interface AddonDialogProps extends Omit<DialogProps, "onDismiss"> {
  label?: string
  close: (event: React.MouseEvent | React.KeyboardEvent) => void
  closeButtonProps?: LadleDialogCloseButtonProps
  modalBodyProps?: Exclude<React.ComponentProps<"div">, "children">
}

export const AddonDialog: React.FC<AddonDialogProps> = ({
  label,
  close,
  children,
  modalBodyProps = {},
  closeButtonProps = {},
  ...dialogProps
}) => {
  return (
    <Dialog
      aria-modal={true}
      onDismiss={close}
      aria-label={label || "Modal"}
      {...dialogProps}
    >
      <LadleDialogCloseButton
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
    </Dialog>
  )
}
