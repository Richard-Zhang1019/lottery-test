import { Box } from '@chakra-ui/react'
import { useRoutes } from 'react-router-dom'

import routes from '@/router'

function App() {
  return (
    <Box className="App" minH="100vh" overflowX="hidden">
      {useRoutes(routes)}
    </Box>
  )
}

export default App
