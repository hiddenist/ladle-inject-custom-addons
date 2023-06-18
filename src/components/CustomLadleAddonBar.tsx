import React from "react"
import { createPortal } from "react-dom"
import getAddonsListElement from "../utils/getAddonsListElement"

export interface CustomLadleAddonBarProps
  extends Required<React.PropsWithChildren> {
  /**
   * If set to true, this prepends your addons to the start of the list instead of the end.
   * Note: it has to create a second list element for this to work.
   * @default false
   */
  prepend?: boolean
}

/**
 * This should be the wrapper for all of your custom addon buttons.
 *
 * A portal is created to mount children to the Ladle addon panel UI.
 */
export const CustomLadleAddonBar: React.FC<CustomLadleAddonBarProps> = ({
  prepend = false,
  children,
}) => {
  const [addonList, setAddonList] = React.useState<HTMLUListElement | null>(
    null
  )

  React.useEffect(() => {
    const panel = getAddonsListElement(prepend)
    setAddonList(panel)
    if (!panel) {
      console.warn(
        "Unable to find addon panel. Custom addons won't be mounted!"
      )
    }
  }, [prepend])

  if (!addonList) {
    return null
  }

  return createPortal(children, addonList)
}
