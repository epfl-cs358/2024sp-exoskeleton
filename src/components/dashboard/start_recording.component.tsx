import { Component } from 'react';
import { Card, CardHeader, CardBody, Heading, Text, Button, Flex, Box, Circle} from '@chakra-ui/react'

type StartRecordingState = {
    isRecording: boolean;
};

class StartRecording extends Component<{}, StartRecordingState> {
    // constructor to initialize the state of the component StartRecording:
    constructor(props: {}) {
        super(props);
        this.state = {
            isRecording: false,
        };
    }

    // toggleRecording function to toggle the state of isRecording:
    toggleRecording = () => {
        this.setState((prevState) => ({
            isRecording: !prevState.isRecording, // toggling the state of isRecording from true to false and vice versa
        }));
    };

    render() {
        const { isRecording } = this.state;

        return(
            <Card align='start' bg='#020202' color='white' p={4} borderRadius='md' boxShadow='md' w='full' h='310px'> {/* setting the width to 100% and max-width to 100% as well, and so for the entire card */}
                <CardHeader>
                    <Flex alignItems='center'>
                        {/* the button to start recording */}
                        <Button 
                            colorScheme= {isRecording? '#8D8D8D': '#0461B7'} 
                            variant='solid' 
                            bg= {isRecording? '#8D8D8D': '#0461B7'} 
                            border="1px solid"
                            borderColor={isRecording? '#8D8D8D': '#0461B7'}
                            mr={4}
                            onClick={this.toggleRecording}
                        >
                            {isRecording ? 'Recording ...' : 'Record'} {/*if isRecording is true, the button text is "Recording ...", otherwise "Record"*/}
                        </Button>
                        <Heading size='md'>{isRecording ? 'Recording a session' : 'Start recording a session'}</Heading>
                    </Flex>
                </CardHeader>

                <CardBody w='full' h='full'> {/* setting the width and height to 100% to have the card of the same size no matter the content length */}
                    <Box bg='#313131' p={4} borderRadius='md' h='full'>
                            {isRecording ? ( // if isRecording is true, display the following content:
                                <>
                                    <Text>Some midi data</Text>
                                    <Circle size='28px' bg='#F14848' position='absolute' top={10} right={8} /> {/* the red circle with top={10} and right={8} means that the circle is 10px from the top and 8px from the right of the parent element Card */}
                                </>
                            ) : ( // if isRecording is false, display the following content:
                                <Text>This text box contains a log of the midi keys registered during the recording, should be scrollable to see the full history.</Text>
                            )}
                    </Box>
                </CardBody>
            </Card>
        )
    }
}
export default StartRecording;