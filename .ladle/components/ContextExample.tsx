import React from "react"

export const Context = React.createContext({
  message: (
    <p>
      If you can see this message, it means that the addon is not receiving data
      from the context provider in the CustomGlobalProvider component. Dang.
    </p>
  ),
})

export const contextMessage = (
  <>
    <p>
      This message being displayed shows that the addon button is able to
      receive data from a context provider. Yay!
    </p>
    <p>
      This message is populated from a context provided in the{" "}
      <code>CustomGlobalProvider</code> component. If you want to know more
      about how it works, check out the
      <a href="https://github.com/hiddenist/ladle-inject-custom-addons/blob/main/.ladle/components.tsx">
        components.tsx
      </a>{" "}
      source code.
    </p>
  </>
)
