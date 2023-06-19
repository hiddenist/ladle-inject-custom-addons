import type { GlobalProvider } from "@ladle/react"

type GlobalProviderProps = React.ComponentProps<GlobalProvider>

export type CustomGlobalProviderProps<
  CustomAddonConfig = Record<string, never>
> = GlobalProviderProps & {
  config: GlobalProviderProps["config"] & {
    addons: GlobalProviderProps["config"]["addons"] & CustomAddonConfig
  }
}

export type CustomGlobalProvider<CustomAddonConfig = Record<string, never>> =
  React.FC<CustomGlobalProviderProps<CustomAddonConfig>>
