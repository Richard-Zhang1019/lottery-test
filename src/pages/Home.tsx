import { Box, Flex, Img, keyframes } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import lotteryImg from '@/assets/img/loto.png'
import lotteryZImg from '@/assets/img/loto-z.png'

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const time = setTimeout(() => {
      navigate('/about')
    }, 10000)
    return () => {
      clearTimeout(time)
    }
  }, [])

  const rotate = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(3000deg) }
  `

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      h="100vh"
      position={'relative'}
      bgColor='#e7e7e7'
    >
      <Img w={200} position="absolute" top='38%' zIndex={1} src={lotteryZImg} />
      <Flex
        justifyContent="center"
        alignItems="center"
        animation={`${rotate} 5s ease-in-out 2s forwards`}
      >
        <Img w={350} transformOrigin="center" src={lotteryImg} />
      </Flex>
    </Flex>
  )
}

export default Home
