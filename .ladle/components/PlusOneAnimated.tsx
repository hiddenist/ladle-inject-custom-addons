import React from "react"

const PlusOne = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "100%",
        animation: "plus-one 1s forwards",
        fontWeight: "bold",
        fontSize: 12,
        color: "rgba(10, 60, 90, 0.9)",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 4,
      }}
    >
      +1
    </div>
  )
}

export const usePlusOneAnimated = () => {
  const [elements, setElements] = React.useState<React.ReactNode[]>([])

  const addPlusOne = React.useCallback(() => {
    const element = <PlusOne key={Date.now()} />
    setElements((elems) => [...elems, element])
    setTimeout(() => {
      setElements((elems) => elems.filter((e) => e !== element))
    }, 1000)
  }, [])

  return {
    addPlusOne,
    elements,
  }
}
