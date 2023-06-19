export default function getAddonsListElement() {
  const addons = document.getElementsByClassName("ladle-addons")[0]
  const lists = addons?.getElementsByTagName("ul")
  return lists?.[0] ?? null
}
