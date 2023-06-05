export default function getAddonsListElement(prepend = false) {
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
