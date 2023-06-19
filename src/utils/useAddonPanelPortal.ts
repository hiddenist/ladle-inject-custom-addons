import React from "react"
import { createPortal } from "react-dom"
import getAddonsListElement from "./getAddonsListElement"

interface Options {
  /**
   * Lower numbers go earlier in the addon list.
   * The built-in ladle addons are priorities 1-n where n is the number of enabled addons.
   * @default 0
   */
  position?: number
}

export const useAddonPanelPortal = (
  button: React.ReactNode,
  { position = 0 }: Options
) => {
  const [addonListItem] = React.useState<HTMLLIElement>(
    document.createElement("li")
  )

  React.useEffect(() => {
    const panel = getAddonsListElement()
    if (!panel) {
      console.warn(
        "Unable to find addon panel. Custom addons won't be mounted!"
      )
      return
    }
    appendAtPosition(panel, addonListItem, position)
    return () => {
      panel.removeChild(addonListItem)
    }
  }, [position])

  if (!addonListItem) {
    return null
  }

  return createPortal(button, addonListItem)
}

const appendAtPosition = (
  parent: HTMLElement,
  child: HTMLElement,
  position: number
) => {
  child.setAttribute("data-position", position.toString())
  parent.insertBefore(
    child,
    findNextSibling(Array.from(parent.getElementsByTagName("li")), position)
  )
}

function findNextSibling<E extends HTMLElement>(
  items: E[],
  position: number
): E | null {
  let currentPosition: number | null = null
  for (const item of items) {
    const p = Number(item.dataset.position)
    if (item.dataset.position != null && !isNaN(p)) {
      currentPosition = p
    } else if (currentPosition === null || isNaN(currentPosition)) {
      currentPosition = 1
    } else {
      ++currentPosition
    }

    if (position < currentPosition) {
      return item
    }
  }
  return null
}
