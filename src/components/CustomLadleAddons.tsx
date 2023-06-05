import React from "react"
import { createPortal } from "react-dom"

export interface CustomLadleAddonsProps
  extends Required<React.PropsWithChildren> {
  /**
   * If set to true, this prepends your addons to the start of the list instead of the end.
   * Note: it has to create a second list item for this to work.
   * @default false
   */
  prepend?: boolean
}

/**
 * Creates a portal to mount components to the Ladle addons list UI
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

const getAddonsListElement = (prepend = false) => {
  const addons = document.getElementsByClassName("ladle-addons")[0]
  const lists = addons?.getElementsByTagName("ul")
  if (!addons || !lists) {
    return null
  }

  if (!prepend) {
    const lastList = lists[lists.length - 1]
    return lastList ?? null
  }

  const firstList = lists[0]
  if (lists.length > 1 && firstList) {
    return firstList
  }

  const prependedList = document.createElement("ul")
  addons.prepend(prependedList)
  return prependedList
}
