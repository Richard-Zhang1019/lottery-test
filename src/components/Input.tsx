import { Box, Input } from '@chakra-ui/react'
import { FC } from 'react'

interface InputProps {
  title: string
  placeholder: string
  w: number
}

const InputComponent: FC<InputProps> = ({w, title, placeholder }) => {
  return (
    <Box w='100%'>
      <Box color='#666666'>{title}</Box>
      <Input style={{ textIndent: '10px' }} color='#555' h={50} w={`${w}%`} placeholder={placeholder} />
    </Box>
  )
}

export default InputComponent
