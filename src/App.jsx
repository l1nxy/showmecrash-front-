import { useState } from 'react'
import { Card, Box, VStack, Container, Center } from '@chakra-ui/react'
import './App.css'
import Header from './component/Header'
import Chart from './component/Chart'
import { Text, Code, Heading, theme, ColorModeProvider, CSSReset, ThemeProvider } from '@chakra-ui/react'
function App () {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Box w="150%" h="100%" p={4} color="white">
            <Chart />
          </Box>
        </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}

export default App
