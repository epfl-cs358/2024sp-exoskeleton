import { Component } from 'react';

import { Card, CardHeader, CardBody, Text, Button, Flex, Box, VStack} from '@chakra-ui/react'
import { FaCaretRight } from "react-icons/fa";

class ServoMotorInstruction extends Component{
    render() {
        return(
            <Card align='center'> {/*bg='#1D1D1D' color='white' w='100%' maxW='600px' p={4} borderRadius='md' boxShadow='md'>*/}
                <CardHeader>
                    <Flex align='center' /*w='100%'*/>
                        <Box bg='#1D1D1D' w='60%' h={18} p={6} color='white' mr={3}>
                            Selected file :
                        </Box>
                        <Button rightIcon={<FaCaretRight />} colorScheme='white' variant='solid' bg='#0461B7' w='40%' h={18}>
                            Process & Play MIDI File
                        </Button>
                    </Flex>
                </CardHeader>

                <CardBody bg='#1D1D1D'>
                    <VStack align='start' spacing={4} w='100%'>
                        <Text>Servo motors instructions to glove:</Text>
                        <Box w='100%' h='200px' bg='#313131' p={4} color='white'>
                            This text box contains a log of the servo instructions being sent to the exoskeleton hand in real-time.
                        </Box>
                    </VStack>
                </CardBody>
            </Card>
        )
    }
}
export default ServoMotorInstruction;