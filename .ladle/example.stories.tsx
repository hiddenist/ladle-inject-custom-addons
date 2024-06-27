import React from "react"
import type { Story } from "@ladle/react"
import { PlusCircle } from "react-feather"
import { AddonButton } from "ladle-inject-custom-addons"
import { usePlusOneAnimated } from "./components/PlusOneAnimated"

export const Home: Story = () => (
  <div>
    <h1>Welcome</h1>
    <p>
      This is a simple example story. Check out the addon buttons at the bottom
      of the screen to see the magic!
    </p>
  </div>
)

export const StoryWithAddon: Story = () => {
  const [clickCount, setClickCount] = React.useState(0)

  const { elements, addPlusOne } = usePlusOneAnimated()

  return (
    <div>
      <h1>This story has its own addon button</h1>
      <p>
        In addition to creating addon buttons in the global context, you can
        also create addon buttons that only show up for specific stories!
      </p>
      <p>
        <h2>
          You have clicked the button {clickCount} time{clickCount != 1 && "s"}
        </h2>
      </p>
      <p>
        Curious how it's done? Find the source code button and take a look at
        the code for this story!
      </p>

      <AddonButton
        icon={
          <>
            <PlusCircle />
            {elements}
          </>
        }
        tooltip="Increment the click count for this story"
        position={10}
        badge={clickCount < 10 ? clickCount : "9+"}
        onClick={() => {
          addPlusOne()
          setClickCount((c) => c + 1)
        }}
      />
    </div>
  )
}
