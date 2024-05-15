import { Component } from 'react';

import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Flex} from '@chakra-ui/react'

class StartRecording extends Component{
    render() {
        return(
            <Card align='center'>
            <CardHeader>
                <Flex align='center'>
                    {/* the button to start recording */}
                    <Button color="#0461B7" backgroundColor='transparent' _hover={{ backgroundColor: "transparent" }} border="1px solid #0461B7" mr={5}>Record</Button>
                    <Heading size='md' >Start recording a session</Heading>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>This text box contains a log of the midi keys registered during the recording, should be scrollable to see the full history. </Text>
            </CardBody>
            <CardFooter>
                <Button colorScheme='blue'>View here</Button>
            </CardFooter>
            </Card>

        )
    }

}
export default StartRecording;