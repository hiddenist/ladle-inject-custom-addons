import React from "react"
import { createPortal } from "react-dom"
import getAddonsListElement from "../utils/getAddonsListElement"

import "./style.css"

export interface CustomLadleAddonsProps
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
 * A portal is created to mount children to the Ladle addons list UI.
 */
export const CustomLadleAddons: React.FC<CustomLadleAddonsProps> = ({
  prepend = false,
  children,
}) => {
  const [addonsList, setAddonsList] = React.useState<HTMLUListElement | null>(
    null
  )

  React.useEffect(() => {
    const list = getAddonsListElement(prepend)
    setAddonsList(list)
    if (!list) {
      console.warn("Unable to find addon list. Custom addons won't be mounted!")
    }
  }, [prepend])

  if (!addonsList) {
    return null
  }

  return createPortal(children, addonsList)
}
