import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import TestimonialCard from "./TestimonialCard"
import { testimonials } from "./testimonialsConsts"

const Testimonials = () => {
  return (
    <Box backgroundColor='blue.50'>
      <Box
        maxWidth='1280px'
        margin='0 auto'
        paddingY={{base: '3rem', md: '6rem'}}
      >
        <Text
          fontSize={{base: '4xl', md: '5xl'}}
          lineHeight='shorter'
          fontWeight='light'
          paddingX='2rem'
          textAlign='center'
        >
          Testimonials
        </Text>
        <Text
          fontSize='2xl'
          fontWeight='light'
          marginTop='1rem'
          marginBottom='3rem'
          paddingX='2rem'
          textAlign='center'
        >
          Here's what our valued clients have to say
        </Text>
        <SimpleGrid 
          columns='3'
          minChildWidth='300px'
          gap={{base: '0.5rem', md: '2.5rem'}}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default Testimonials