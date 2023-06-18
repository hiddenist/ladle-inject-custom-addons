import React from "react"
import type { GlobalProvider } from "@ladle/react"
import { Truck, AlertCircle } from "react-feather"

import {
  CustomLadleAddonBar,
  AddonButton,
  AddonDialogButton,
  ExampleIcon,
} from "ladle-inject-custom-addon"

import "ladle-inject-custom-addon/assets/style.css"
import { GettingStarted } from "./components/GettingStarted"

const packageName = "ladle-inject-custom-addon"

export const Provider: GlobalProvider = ({ children }) => (
  <Context.Provider value={{ message: "in context" }}>
    {children}
    <CustomLadleAddonBar prepend>
      <PrependedHelloAddon />
    </CustomLadleAddonBar>
    <CustomLadleAddonBar>
      <CustomDialogAddon />
      <ContextTestAddon />
    </CustomLadleAddonBar>
  </Context.Provider>
)

const Context = React.createContext({
  message: "not in context",
})

const PrependedHelloAddon = () => {
  return (
    <AddonDialogButton
      icon={<ExampleIcon />}
      tooltip="Shows info about this package."
      style={{ display: "grid", gap: 16 }}
    >
      <p>
        <strong>{packageName}</strong>
      </p>
      <p>Custom addons in your Ladle library!</p>
      <div style={{ fontSize: 50, textAlign: "center" }}>✨🐙✨</div>
      <GettingStarted packageName={packageName} />
    </AddonDialogButton>
  )
}

const CustomDialogAddon = () => (
  <AddonButton
    icon={<AlertCircle />}
    onClick={() =>
      alert("hello! this addon should have been first in the list")
    }
    tooltip="Shows an alert to say hello."
  />
)

const ContextTestAddon = () => {
  const { message } = React.useContext(Context)
  return (
    <AddonDialogButton
      icon={<Truck />}
      label="Test context"
      tooltip="Tests if the context provider can be used within the button component."
      badge={1}
    >
      <p>{message}</p>
    </AddonDialogButton>
  )
}
