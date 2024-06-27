const baseUrl = process.env["BASE_URL"] || "/"

export default {
  stories: ["{src,.ladle}/**/*.stories.{js,jsx,ts,tsx}"],
  base: baseUrl,
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
