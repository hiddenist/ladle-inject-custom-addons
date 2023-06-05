# ladle-addon-button
Minimal dependency package to add a custom Ladle addon button.

This package exists because Ladle does not yet officially support third party addons.

* [Quick Start](#quick-start)
  + [Installation](#installation)
  + [Basic Usage](#basic-usage)
* [Customization](#customization)
  + [Icons](#icons)
  + [Prepending your addons](#prepending-your-addons)
* [Troubleshooting](#troubleshooting)
* [How this package works](#how-this-package-works)
* [Questions or contributions](#questions-or-contributions)

## Quick Start

### Installation

```sh
pnpm add ladle-inject-custom-addons
```

> **Note** <br />
> Replace `pnpm` with `yarn` or `npm` to match what you use for your project. 😉

### Basic Usage

Add your custom button components to your [global provider](https://ladle.dev/docs/providers). You'll use the provided `AddonButton` components to make buttons that match the existing Ladle addon bar buttons.

```tsx
import type { GlobalProvider } from "@ladle/react"
import {
  CustomLadleAddonBar,
  AddonButton,
  AddonDialogButton,
  ExampleIcon
} from "ladle-inject-custom-addons"

import "ladle-inject-custom-addons/assets/style.css"

export const Provider: GlobalProvider = ({
  children,
}) => (
  <>
    <CustomLadleAddonBar>
      <HelloAddon />
      <CustomDialogAddon />
    </CustomLadleAddonBar>
    {children}
  </>
)

const HelloAddon = () => (
  <AddonButton
    icon={<ExampleIcon />}
    onClick={() => alert("hello!")}
    tooltip="Shows an alert to say hello."
  />
)

const CustomDialogAddon = () => (
  <AddonDialogButton
    icon={<ExampleIcon />}
    tooltip="Opens a dialog box."
  >
    <p>Custom text, or more advanced components, will show up in a dialog.</p>
  </AddonDialogButton>
)
```

## Customization

### Icons

Most icon libraries will work for your addon buttons. Check out [react-feather](https://github.com/feathericons/react-feather) if you're not sure where to start!

You can also add your own SVGs for your icons. Use `currentColor` for the stroke or fill on the icon to have it use the default hover and active colors. The icons are expected to be 24 by 24 pixels in size.

<details><summary>Click me to see a SVG component example</summary>

```tsx
const MyIcon = () => (
  <svg
    width={24}
    height={24}
    strokeWidth={2}
    viewport="0 0 24 24"
    stroke="currentcolor"
  >
    <ellipse cx="12" cy="12" rx="10" ry="10" />
  </svg>
)
```
</details>

### Prepending your addons

If you would like to put your custom addons at the beginning of the list, you can pass the `prepend` prop to the `CustomLadleAddonBar` component.
You can add multiple addon bars to put new addons on both sides of the list.

```tsx
export const Provider = ({
  children,
}) => (
  <>
    <CustomLadleAddonBar prepend>
      {/* your addons at the beginning of the list */}
    </CustomLadleAddonBar>
    <CustomLadleAddonBar>
      {/* your addons at the end of the list */}
    </CustomLadleAddonBar>
    {children}
  </>
)
```

## Troubleshooting

Prepended addons stacked? Close buttons on modals not showing up in the right place?
Make sure that you've imported the stylesheet.

```ts
import "ladle-inject-custom-addons/assets/style.css"
```

## How this package works

`CustomLadleAddonBar` utilizes a [React Portal](https://react.dev/reference/react-dom/createPortal) to mount your buttons within the existing Ladle addon list.

> **Warning** <br />
> This method of injecting components is not very stable. Changes to the Ladle package could easily break this in future updates.

## Questions or contributions

Feel free to create [a new issue](https://github.com/hiddenist/ladle-inject-custom-addons/issues) if you run into any problems using this package!

Contributions are also welcome. I recommend opening an issue before starting work on your addition, just mention that you're working on an addition or fix.

🫶🏻 Thanks for reading!
