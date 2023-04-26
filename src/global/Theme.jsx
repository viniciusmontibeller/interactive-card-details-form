import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
    colors: {
        white: "hsl(0, 0%, 100%)",
        light: "hsl(270, 3%, 87%)",
        dark: "hsl(279, 6%, 55%)",
        veryDark: "hsl(278, 68%, 11%)",
        inputError: "hsl(0, 100%, 66%)",
        inputGrad: "hsl(249, 99%, 64%), hsl(278, 94%, 30%)"
    }
}

const Theme = ({children}) => (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )


export { Theme }