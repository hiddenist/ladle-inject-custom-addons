<p align="center">
  <a href="https://npmjs.com/package/ladle-inject-custom-addons"><img src="https://img.shields.io/npm/v/ladle-inject-custom-addons.svg" alt="npm package"></a>
  <a href="https://github.com/hiddenist/ladle-inject-custom-addons/actions/workflows/ci.yml"><img src="https://github.com/hiddenist/ladle-inject-custom-addons/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>
</p><p align="center"><img width="686" alt="A screenshot of the Ladle addon bar, with a dialog box displaying text: 'ladle-inject-custom-addons' Add your own components in the Ladle addon panel! ✨🐙✨" src="https://github.com/hiddenist/ladle-inject-custom-addons/assets/563879/2ddb63d2-45db-4097-9fda-85510b19a111"></p>

# ladle-inject-custom-addons

[Ladle](https://github.com/tajo/ladle) doesn't officially support third party addons yet. Now we can pretend it does!

Check out working example: https://hiddenist.github.io/ladle-inject-custom-addons/

- [Quick Start](#quick-start)
- [Customization](#customization)
- [How this package works](#how-this-package-works)
- [Questions or contributions](#questions-or-contributions)

## Quick Start

### Installation

```sh
pnpm add ladle-inject-custom-addons
```

This package is confirmed to work with `@ladle/react` up through version ^4.10.0.

> [!NOTE]
> Replace `pnpm` with `yarn` or `npm` to match what you use for your project. 😉

### Basic Usage

Add your custom button components to your [global provider](https://ladle.dev/docs/providers). You'll use the provided `AddonButton` components to make buttons that match the existing Ladle addon bar buttons.

```tsx
// .ladle/components.tsx

import type { GlobalProvider } from "@ladle/react"
import {
  AddonButton,
  AddonDialogButton,
  ExampleLadleIcon,
} from "ladle-inject-custom-addons"

export const Provider: GlobalProvider = ({ children }) => (
  <>
    <HelloAddon />
    <DialogExampleAddon />
    {children}
  </>
)

const HelloAddon = () => (
  <AddonButton
    icon={<ExampleLadleIcon />}
    onClick={() => alert("hello!")}
    label="Say hello"
    tooltip="Shows an alert to say hello."
  />
)

const DialogExampleAddon = () => (
  <AddonDialogButton
    icon={<ExampleLadleIcon />}
    label="Show dialog"
    tooltip="Opens a dialog box."
  >
    <p>Custom text, or more advanced components, will show up in a dialog.</p>
  </AddonDialogButton>
)
```

## Customization

### Icons

Need icons for your addon buttons? Check out [react-feather](https://github.com/feathericons/react-feather) for a great set of icons!

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

> [!NOTE]
> Please be aware that you may encounter issues using certain libraries for your button icons. Material UI icons have been observed causing style issues with production bundles of component story libraries.

### Button order

If you would like your custom addon to display in a different position within the addon list, you can pass the `position` property.

```tsx
// .ladle/components.tsx

export const Provider = ({ children }) => (
  <>
    <AddonButton
      icon={<ExampleLadleIcon />}
      onClick={() => alert("hello!")}
      label="Say hello"
      tooltip="Shows an alert to say hello."
      // This button will be third in the addon panel list:
      position={3}
    />
    {children}
  </>
)
```

## How this package works

`AddonButton` utilizes a [React Portal](https://react.dev/reference/react-dom/createPortal) to mount your buttons within the existing Ladle addon list.

> [!WARNING]
> This method of injecting components may not be very stable. Changes to the Ladle package could easily break this in future updates.

## Questions or contributions

Feel free to create [a new issue](https://github.com/hiddenist/ladle-inject-custom-addons/issues) if you run into any problems using this package!

Contributions are also welcome. I recommend opening an issue before starting work on your addition, just mention that you're working on an addition or fix.

🫶🏻 Thanks for reading!
