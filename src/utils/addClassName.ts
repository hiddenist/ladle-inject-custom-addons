type MaybeNestedArray<T> = T[] | T[][]

export default function addClassName(
  ...classes: MaybeNestedArray<string | undefined | false>
) {
  return classes
    .flat()
    .filter((cls) => cls && Boolean(cls.trim()))
    .join(" ")
}
