import { Badge, Box, Flex, HStack, Image, Text } from "@chakra-ui/react"
import Link from "next/link"

const AgentCard = ({name, image, description, title}) => {

  return (
    <Box
        padding='2rem'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        textAlign='center'
        marginBottom={{base: '1rem', md: '0'}}
        backgroundColor='#f1f1f14a'
    >
        <Image 
            src={image}
            width='12rem'
            height='18rem'
            objectFit='cover'
            borderRadius='full'
            marginBottom='2rem'
            shadow='md'
        />
        <Text
            fontSize='xl'
            fontWeight='bold'
            color='blue.400'
        >
            {name}
        </Text>
        <Text
            fontSize='lg'
            color='blue.600'
        >
            {title}
        </Text>
        <Text
            fontSize='md'
            fontWeight='light'
            noOfLines='4'
            marginTop='1rem'
            color='gray.600'
        >
            {description}
        </Text>
        {/* <Box
            backgroundImage={`url('${coverPhoto}')`}
            height='250px'
            backgroundPosition='center center'
            backgroundSize='cover'
            position='relative'
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
        >
            <Box
                margin='1rem'
            >
                <Badge
                    colorScheme='green'
                >
                    {purpose}
                </Badge>
            </Box>
            <Box
                height='50%'
                bgGradient='linear(to-t, #0a0b1cd9, #ffffff00 100%)'
                display='flex'
                alignItems='flex-end'
                padding='1rem'
            >
                
            </Box>
        </Box>
        <Box
            padding='1.5rem'
        >
            <Text
                fontSize='xl'
                fontWeight='medium'
                marginBottom='1rem'
            >
                {propertyType}
            </Text>
            <Text
                fontWeight='light'
                fontSize='sm'
                isTruncated
            >
                {address}
            </Text>
            <Text
                isTruncated
            >
                {title}
            </Text>
            <HStack
                spacing='1.3rem'
                marginTop='1rem'
            >
                <Flex
                    alignItems='center'
                    gap='0.3rem'
                >
                    <TbBed />
                    {rooms}
                </Flex>
                <Flex
                    alignItems='cemter'
                    gap='0.3rem'
                >
                    <TbBath />
                    {baths}
                </Flex>
                <Flex
                    alignItems='center'
                    gap='0.3rem'
                >
                    <TbRuler />
                    {sqSize}
                    <sup>m2</sup>
                </Flex>
            </HStack>
        </Box> */}
    </Box>
  )
}

export default AgentCard