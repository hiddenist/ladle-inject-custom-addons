# ladle-inject-custom-addons

Minimal dependency package to add a custom Ladle addon button.

Ladle doesn't officially support third party addons yet. Now we can pretend it does!

<img width="412" alt="A screenshot of the Ladle addon bar, with a dialog box displaying text: 'ladle-inject-custom-addons' Custom addons in your Ladle library! ✨🐙✨" src="https://github.com/hiddenist/ladle-inject-custom-addons/assets/563879/71761606-235a-41ab-80e0-dcfb1001f5ad">

## Table of Contents

- [Quick Start](#quick-start)
  - [Installation](#installation)
  - [Basic Usage](#basic-usage)
- [Customization](#customization)
  - [Icons](#icons)
  - [Prepending your addons](#prepending-your-addons)
- [Troubleshooting](#troubleshooting)
- [How this package works](#how-this-package-works)
- [Questions or contributions](#questions-or-contributions)

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
  ExampleIcon,
} from "ladle-inject-custom-addons"

export const Provider: GlobalProvider = ({ children }) => (
  <>
    <HelloAddon />
    <CustomDialogAddon />
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
  <AddonDialogButton icon={<ExampleIcon />} tooltip="Opens a dialog box.">
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

### Positioning your addons

If you would like to put your custom addons at a different place in the list, you can pass the `position` property.

```tsx
export const Provider = ({ children }) => (
  <>
    <AddonButton
      icon={<ExampleIcon />}
      onClick={() => alert("hello!")}
      tooltip="Shows an alert to say hello."
      position={3}
    />
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
