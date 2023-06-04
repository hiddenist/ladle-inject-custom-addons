import React from "react"

export default function useOnClickOutside(
  ref: React.RefObject<Element>,
  onClickOutside: (event: MouseEvent) => void,
  enabled = true
) {
  React.useEffect(() => {
    if (!enabled) return
    function handleClickOutside(this: Document, event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node | null)) {
        onClickOutside(event)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, enabled])
}
