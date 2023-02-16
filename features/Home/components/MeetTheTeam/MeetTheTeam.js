import { Box, Flex, Text } from "@chakra-ui/react"
import { agents } from "./agentConsts"
import AgentCard from "./AgentCard"

const MeetTheTeam = () => {
  return (
    <Box
      maxWidth='1280px'
      margin='0 auto'
      paddingY={{base: '3red', md: '6rem'}}
    >
      <Text
        fontSize={{base: '4xl', md:'5xl'}}
        lineHeight='shorter'
        fontWeight='light'
        paddingY='2rem'
        textAlign='center'
      >Meet The Team</Text>
      <Text
        fontSize='2xl'
        fontWeight='light'
        marginTop='1rem'
        marginBottom='3rem'
        paddingX='2rem'
        textAlign='center'
      >The best in the industry, at your service 24/7</Text>
      <Flex
        direction={{base: 'column', md: 'row'}}
        justifyContent='space-between'
        gap='1.5rem'
      >
        {agents.map((agent) => (
          <AgentCard key={agent.name} {...agent} />
        ))}
      </Flex>
    </Box>

  )
}

export default MeetTheTeam