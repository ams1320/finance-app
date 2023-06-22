import { ThemeProvider, createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { Box, CssBaseline } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import Dashboard from "./scenes/dashboard"
import Prediction from "./scenes/predictions/prediction"

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/prediction" element={<Prediction />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
