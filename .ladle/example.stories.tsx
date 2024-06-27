import React from "react"
import type { Story } from "@ladle/react"
import { PlusCircle } from "react-feather"
import { AddonButton } from "ladle-inject-custom-addons"
import { usePlusOneAnimated } from "./components/PlusOneAnimated"

export const Home: Story = () => (
  <div className="home">
    <h1>ladle-inject-custom-addons</h1>
    <div className="github-badges">
      <a href="https://npmjs.com/package/ladle-inject-custom-addons">
        <img
          src="https://img.shields.io/npm/v/ladle-inject-custom-addons.svg"
          alt="npm package"
        />
      </a>
      <a href="https://github.com/hiddenist/ladle-inject-custom-addons/actions/workflows/ci.yml">
        <img
          src="https://github.com/hiddenist/ladle-inject-custom-addons/actions/workflows/ci.yml/badge.svg?branch=main"
          alt="build status"
        />
      </a>
    </div>
    <img
      width="686"
      alt="A screenshot of the Ladle addon bar, with a dialog box displaying text: 'ladle-inject-custom-addons' Add your own components in the Ladle addon panel! ✨🐙✨"
      src="https://github.com/hiddenist/ladle-inject-custom-addons/assets/563879/235b9c68-a7e5-40f3-b2cc-838f7c608b19"
    />
    <p>
      This is a working example of the <code>ladle-inject-custom-addons</code>{" "}
      package. Check out the buttons at the bottom of the screen to see it in
      action.
    </p>
    <p>
      Learn more at the{" "}
      <a href="https://github.com/hiddenist/ladle-inject-custom-addons">
        hiddenist/ladle-inject-custom-addons
      </a>{" "}
      GitHub repository!
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
        label="Count clicks"
        tooltip="Increment the click count for this story"
        position={0}
        badge={clickCount < 10 ? clickCount : "9+"}
        onClick={() => {
          addPlusOne()
          setClickCount((c) => c + 1)
        }}
      />
    </div>
  )
}
