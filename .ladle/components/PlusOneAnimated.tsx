import React from "react"

const PlusOne = () => {
  return <div className="plus-one">+1</div>
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
