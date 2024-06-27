import React from "react"
import { AlertCircle, ThumbsUp, Truck } from "react-feather"
import "./style.css"

import {
  CustomGlobalProvider,
  AddonButton,
  AddonDialogButton,
  ExampleLadleIcon,
} from "ladle-inject-custom-addons"

import { GettingStarted } from "./components/GettingStarted"
import { Context, contextMessage } from "./components/ContextExample"

const packageName = "ladle-inject-custom-addons"

interface MyCustomAddonConfig {
  customAddon: {
    enabled: boolean
    customMessage: string
  }
}

export const Provider: CustomGlobalProvider<MyCustomAddonConfig> = ({
  config,
  children,
}) => (
  <Context.Provider value={{ message: contextMessage }}>
    {children}

    <CustomDialogAddon />

    <ContextTestAddon position={2} />

    {config.addons.customAddon.enabled && (
      <AddonDialogButton
        icon={<ThumbsUp />}
        label="Use custom configuration"
        tooltip="Uses a custom configuration to show a custom message."
      >
        <p>
          This addon is set up so that it must be enabled in the{" "}
          <code>config.mjs</code> file to show up, similar to the built-in Ladle
          addons.
        </p>
        <p>{config.addons.customAddon.customMessage}</p>
      </AddonDialogButton>
    )}

    <PrependedHelloAddon position={-1} />
  </Context.Provider>
)

const PrependedHelloAddon = ({ position = 0 }) => {
  const [packageManager, setPackageManager] = React.useState<string>("")
  return (
    <AddonDialogButton
      icon={<ExampleLadleIcon />}
      label="Show package info"
      tooltip="Shows info about this package."
      position={position}
    >
      <p>
        <strong>{packageName}</strong>
      </p>
      <p>Add your own components in the Ladle addon panel!</p>
      <div className="octomoji">✨🐙✨</div>
      <GettingStarted
        packageName={packageName}
        packageManager={packageManager}
        setPackageManager={setPackageManager}
      />
    </AddonDialogButton>
  )
}

const CustomDialogAddon = ({ position = 0 }) => (
  <AddonButton
    icon={<AlertCircle />}
    label="Show an alert"
    onClick={() => alert("hello!")}
    tooltip="Shows an alert to say hello."
    position={position}
  />
)

export const ContextTestAddon = ({ position = 0 }) => {
  const { message } = React.useContext(Context)
  return (
    <AddonDialogButton
      icon={<Truck />}
      label="Use a context"
      tooltip="Demonstrates that addon buttons are able to inherit parent context."
      position={position}
    >
      {message}
    </AddonDialogButton>
  )
}
