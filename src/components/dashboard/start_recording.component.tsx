import { Component } from 'react';

import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button} from '@chakra-ui/react'

class StartRecording extends Component{
    render() {
        return(
            //todo: add a button to start recording
            <Card align='center'>
            <CardHeader>
                <Heading size='md'>Start recording a session</Heading>
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