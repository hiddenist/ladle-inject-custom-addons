import React from "react"
import type { GlobalProvider } from "@ladle/react"
import {
  CustomLadleAddons,
  AddonButton,
  AddonDialogButton,
  ExampleIcon
} from "../src/index"
// todo: Why won't the tsconfig paths pick this up if I use the package name?
// from "ladle-inject-custom-addon"
import { Truck, Layout } from "react-feather"

export const Provider: GlobalProvider = ({
  children,
}) => (
  <Context.Provider value={{ message: "in context" }}>
    <CustomLadleAddons>
      <HelloAddon />
      <CustomDialogAddon />
      <ContextTestAddon />
    </CustomLadleAddons>
    {children}
  </Context.Provider>
)

const Context = React.createContext({
  message: "not in context",
})


const HelloAddon = () => (
  <AddonButton
    icon={<ExampleIcon />}
    onClick={() => alert("hello!")}
    tooltip="Shows an alert to say hello."
  />
)

const CustomDialogAddon = () => (
  <AddonDialogButton
    icon={<Layout />}
    tooltip="Opens a dialog box."
  >
    <p>Custom text, or more advanced components, will show up in a dialog.</p>
  </AddonDialogButton>
)

const ContextTestAddon = () => {
  const { message } = React.useContext(Context)
  return (
  <AddonDialogButton
    icon={<Truck />}
    tooltip="Tests context"
  >
    <p>{message}</p>
  </AddonDialogButton>
  )
}
