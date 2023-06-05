import React from "react"
import type { GlobalProvider } from "@ladle/react"
import { Truck, Layout } from "react-feather"

import {
  CustomLadleAddonBar,
  AddonButton,
  AddonDialogButton,
  ExampleIcon,
} from "ladle-inject-custom-addon"

import "ladle-inject-custom-addon/assets/style.css"

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

const PrependedHelloAddon = () => (
  <AddonButton
    icon={<ExampleIcon />}
    onClick={() => alert("hello! this addon should have been first in the list")}
    tooltip="Shows an alert to say hello."
  />
)

const CustomDialogAddon = () => (
  <AddonDialogButton icon={<Layout />} tooltip="Opens a dialog box.">
    <p>Custom text, or more advanced components, will show up in a dialog.</p>
  </AddonDialogButton>
)

const ContextTestAddon = () => {
  const { message } = React.useContext(Context)
  return (
    <AddonDialogButton icon={<Truck />} tooltip="Tests context">
      <p>{message}</p>
    </AddonDialogButton>
  )
}
