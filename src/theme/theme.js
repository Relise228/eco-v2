import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
    // Whatever you pass here will be added to the colors not replace it
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    colors: {
        primary: "#845EC2",
        secondary: "#FF6F91",
        highlight: "#00C9A7",
        warning: "#FFC75F",
        danger: "#C34A36",
    },
})