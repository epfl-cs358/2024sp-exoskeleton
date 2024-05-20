import { Component } from 'react';
import { Card, CardHeader, CardBody, Heading, Text, Button, Flex, Box} from '@chakra-ui/react'

class StartRecording extends Component{
    render() {
        return(
            <Card align='start' bg='#020202' color='white' p={4} borderRadius='md' boxShadow='md' w='full' h='full'> {/* setting the width to 100% and max-width to 100% as well, and so for the entire card */}
                <CardHeader>
                    <Flex alignItems='center'>
                        {/* the button to start recording */}
                        <Button colorScheme="#0461B7" variant='solid' bg='#0461B7' _hover={{ backgroundColor: "transparent" }} border="1px solid #0461B7" 
                            mr={4}>
                            Record
                        </Button>
                        <Heading size='md'>Start recording a session</Heading>
                    </Flex>
                </CardHeader>

                <CardBody>
                    <Box bg='#313131' p={4} borderRadius='md' h='full'> {/*todo: the height of the image is 300px, should be flex. coz the dashboard should be fit for the screen in 100%*/}
                        <Text>This text box contains a log of the midi keys registered during the recording, should be scrollable to see the full history. </Text>
                    </Box>
                </CardBody>
            </Card>
        )
    }
}
export default StartRecording;