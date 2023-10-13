import { useState } from 'react'
import { Card, Box } from '@chakra-ui/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box w="100%" p={4} color="white">
        <Card>
          <h1>Hello Vite + React!</h1>
        </Card>
      </Box>
    </>
  )
}

export default App
