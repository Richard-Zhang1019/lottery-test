import { Box, Flex, Input, Select } from '@chakra-ui/react'
import InputComponent from '@/components/Input'

const About = () => {
  return (
    <Flex justify="center" align="center">
      <Flex
        w={380}
        p={20}
        justify="center"
        align="center"
        direction="column"
        gap={10}
      >
        <InputComponent w={100} title="收货人姓名" placeholder="收货人姓名" />
        <InputComponent
          w={100}
          title="收货人号码"
          placeholder="请输入您的号码"
        />
        <Flex w="100%" justifyContent="space-between">
          <Box w="50%">
            <Box color="#666666">{'手机验证码'}</Box>
            <Input
              color="#555"
              h={50}
              w="100%"
              style={{ textIndent: '10px' }}
              placeholder={'手机验证码'}
            />
          </Box>
          <Flex
            mt={18}
            h={50}
            color="white"
            bgColor="red"
            borderRadius={5}
            justifyContent="center"
            fontWeight={700}
            alignItems="center"
            w="45%"
          >
            获取验证码
          </Flex>
        </Flex>
        <Box w="100%">请选择地区</Box>
        <Select w="100%" placeholder="省份">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
        <Select placeholder="城市">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
        <InputComponent w={100} title="详细地址" placeholder="例如XX街道XX号" />
        <Flex
          h={50}
          color="white"
          bgColor="red"
          borderRadius={5}
          justifyContent="center"
          fontWeight={700}
          alignItems="center"
          w="100%"
        >
          提交订单
        </Flex>
      </Flex>
    </Flex>
  )
}

export default About
