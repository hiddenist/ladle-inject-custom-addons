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
  <Context.Provider
    value={{
      message: (
        <>
          <p>
            This message being displayed shows that the addon button is able to
            receive data from a context provider. Yay!
          </p>
          <p>
            This message is populated from a context provided in the{" "}
            <code>CustomGlobalProvider</code> component. If you want to know
            more about how it works, check out the
            <a href="https://github.com/hiddenist/ladle-inject-custom-addons/blob/main/.ladle/components.tsx">
              components.tsx
            </a>{" "}
            source code.
          </p>
        </>
      ),
    }}
  >
    <div style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>{children}</div>
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
  message: (
    <p>
      If you can see this message, it means that the addon is not receiving data
      from the context provider in the CustomGlobalProvider component. Dang.
    </p>
  ),
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
      label="Addons with Context"
      tooltip="Demonstrates that addon buttons are able to inherit parent context."
      position={position}
    >
      {message}
    </AddonDialogButton>
  )
}
