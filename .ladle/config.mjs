export default {
  stories: ["{src,.ladle}/**/*.stories.{js,jsx,ts,tsx}"],
  addons: {
    ladle: {
      enabled: false,
    },
    theme: {
      enabled: false,
    },
    mode: {
      enabled: false,
    },
    rtl: {
      enabled: false,
    },
    customAddon: {
      enabled: true,
      customMessage: "You can also add custom values to the config file!",
    },
  },
}
