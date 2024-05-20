import { Component } from 'react';

import { Card, CardHeader, CardBody, Text, Button, Flex, Box, VStack} from '@chakra-ui/react'
import { FaCaretRight } from "react-icons/fa";

class ServoMotorInstruction extends Component{
    render() {
        return(
            <Card align='start' bg='#020202' color='white' p={4} borderRadius='md' boxShadow='md' w='full' h='310px'> {/* setting the width to 100% and max-width to 100% as well, and so for the entire card */}
            <CardHeader w='full'>
                    <Flex align='center' w='full'>
                        <Box alignItems ='center' bg='#313131' p={4} borderRadius='md' color='white' mr={16} 
                                w='50%' h='45px' display='flex' > {/* setting the width to 50% of the CardHeader */}
                            Selected file :
                        </Box>
                        <Button rightIcon={<FaCaretRight />} 
                                colorScheme='white' variant='solid' bg='#0461B7' _hover={{ backgroundColor: "transparent" }} border="1px solid #0461B7"
                                w='50%' h='45px' flexShrink='0'> {/*use w and h='full' to make the button full height*/}
                            Process & Play MIDI File
                        </Button>
                    </Flex>
                </CardHeader>

                <CardBody bg='#1D1D1D' w='full'>
                    <VStack align='start' spacing={4} w='100%'>
                        <Text>Servo motors instructions to glove:</Text>
                        <Box w='100%' h='120px' bg='#313131' p={4} borderRadius='md'
                                color='white'> {/*the color of the text is white*/}
                            This text box contains a log of the servo instructions being sent to the exoskeleton hand in real-time.
                        </Box>
                    </VStack>
                </CardBody>
            </Card>
        )
    }
}
export default ServoMotorInstruction;