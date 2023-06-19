import React from "react"
import { Truck, AlertCircle } from "react-feather"

import {
  CustomGlobalProvider,
  AddonButton,
  AddonDialogButton,
  ExampleIcon,
} from "ladle-inject-custom-addon"

import { GettingStarted } from "./components/GettingStarted"

const packageName = "ladle-inject-custom-addon"

interface MyCustomAddonConfig {
  customAddon: {
    enabled: boolean
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
        icon={<ExampleIcon />}
        tooltip="this addon must be enabled in config.mjs to show up"
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
      icon={<ExampleIcon />}
      tooltip="Shows info about this package."
      style={{ display: "grid", gap: 16 }}
      position={position}
    >
      <p>
        <strong>{packageName}</strong>
      </p>
      <p>Custom addons in your Ladle library!</p>
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
