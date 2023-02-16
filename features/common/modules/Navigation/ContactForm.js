import { Box, Button, Checkbox, FormControl, Input, Text, Textarea } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

const ContactForm = () => {

    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => console.log(data)
    
    return (
        <>
            <Box
                width='100%'
                //padding='2rem'
                borderRadius='sm'
                backgroundColor='white'
                color='gray.700'
            >
                {/* <Text
                    fontSize='xl'
                    fontWeight='bold'
                >Free PDF Guide</Text>
                <Text
                    fontSize='lg'
                >Complete the form below to download your guide</Text> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl>
                        <Input
                            marginTop='1.3rem'
                            id='name'
                            type='text'
                            placeholder='Name'
                            {...register('name', {required: true})}
                        />
                        <Input
                            marginTop='1.3rem'
                            id='email'
                            type='email'
                            placeholder='Email'
                            {...register('email', {required: true})}
                        />
                        <Input
                            marginTop='1.3rem'
                            id='phone'
                            type='text'
                            placeholder='Phone'
                            {...register('phone', {required: true})}
                        />
                        <Textarea
                                marginTop='1.3rem'
                                id='message'
                                type='text'
                                placeholder='Message'
                                {...register('message', {required: true})}
                        />
                        <Checkbox
                            marginTop='1.3rem'
                            id='gdpr'
                            type='checkbox'
                            placeholder='GDPR'
                            {...register('gdpr', {required: true})}
                        >
                            <Text
                                fontSize='0.8rem'
                                color='gray.500'
                            >
                                I consent to having this website store my details for future communication.
                            </Text>
                        </Checkbox>
                    </FormControl>
                    <Button 
                        type='submit'
                        colorScheme='blue'
                        //width='100%'
                        fontSize='xl'
                        padding='2rem'
                        marginTop='2rem'
                    >Send Message</Button>
                </form>
            </Box>
        </>
        
    )
}

export default ContactForm