import { Box, Flex, Image, Text } from "@chakra-ui/react"
import {TbQuote} from 'react-icons/tb'

const TestimonialCard = ({name, image, company, testimonial}) => {
  return (
    <Box
        color='#ffffff'
        padding='3rem'
        display='flex'
        flexDirection='column'
        marginBottom={{base: '1rem', md: '0'}}
    >
        <Box>
            <TbQuote size='40' color='#4299e1' />
        </Box>
        <Text
            fontSize='lg'
            color='gray.500'
            marginY='1.8rem'
        >
            {testimonial}
        </Text>
        <Flex
            gap='1rem'
            alignItems='center'
        >
            <Image 
                src={image} 
                width='6rem'
                height='6rem'
                objectFit='cover'
                borderRadius='full'
            />
            <Box>
                <Text color='gray.600' as='span'>by {name}</Text>
                <Text 
                    fontSize='lg'
                    fontStyle='italic'
                    fontWeight='light'
                    color='gray.600'
                >
                    company - {company}
                </Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default TestimonialCard