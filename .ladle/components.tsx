import React from "react"
import { AlertCircle, ThumbsUp, Truck } from "react-feather"

import {
  CustomGlobalProvider,
  AddonButton,
  AddonDialogButton,
  ExampleLadleIcon,
} from "ladle-inject-custom-addons"

import { GettingStarted } from "./components/GettingStarted"

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
  <Context.Provider value={{ message: "in context" }}>
    {children}
    <CustomDialogAddon />
    <ContextTestAddon position={2} />
    {config.addons.customAddon.enabled && (
      <AddonButton
        icon={<ThumbsUp />}
        tooltip={`This addon must be enabled in config.mjs to show up. ${config.addons.customAddon.customMessage}`}
      />
    )}
    <PrependedHelloAddon position={-1} />
  </Context.Provider>
)

const Context = React.createContext({
  message: "not in context",
})

const PrependedHelloAddon = ({ position = 0 }) => {
  const [packageManager, setPackageManager] = React.useState<string>("")
  return (
    <AddonDialogButton
      icon={<ExampleLadleIcon />}
      tooltip="Shows info about this package."
      style={{ display: "grid", gap: 16 }}
      position={position}
    >
      <p>
        <strong>{packageName}</strong>
      </p>
      <p>Add your own components in the Ladle addon panel!</p>
      <div style={{ fontSize: 50, textAlign: "center", marginBottom: 16 }}>
        ✨🐙✨
      </div>
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
    onClick={() => alert("hello!")}
    tooltip="Shows an alert to say hello."
    position={position}
  />
)

const ContextTestAddon = ({ position = 0 }) => {
  const { message } = React.useContext(Context)
  return (
    <AddonDialogButton
      icon={<Truck />}
      label="Test context"
      tooltip="Tests if the context provider can be used within the button component."
      badge={1}
      position={position}
    >
      <p>{message}</p>
    </AddonDialogButton>
  )
}
