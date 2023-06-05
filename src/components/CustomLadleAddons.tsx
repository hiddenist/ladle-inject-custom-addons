import React from "react"
import { createPortal } from "react-dom"

export interface CustomLadleAddonsProps extends Required<React.PropsWithChildren> {}

/**
 * Creates a portal to mount components to the Ladle addons list UI
 */
export const CustomLadleAddons: React.FC<CustomLadleAddonsProps> = ({
  children
}) => {
  const addonsList = React.useMemo(() => {
    const addons = document.getElementsByClassName("ladle-addons")[0]
    const list = addons?.getElementsByTagName("ul")[0]
    if (!list) {
      console.warn("Unable to find addon list. Custom addons won't be mounted!")
    }
    return list
  }, [])

  if (!addonsList) {
    return null
  }

  return createPortal(
    children,
    addonsList
  )
}
