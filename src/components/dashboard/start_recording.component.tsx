import { Component } from 'react';
import { Card, CardHeader, CardBody, Heading, Text, Button, Flex, Box, Circle, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Input } from '@chakra-ui/react';
import axios from 'axios';

type StartRecordingState = {
    isRecording: boolean; // the state of the recording, either true or false
    showModal: boolean; // the state (visibility) of the modal, either true or false
    recordingName: string; // the name of the recording to be saved (input field)
};

class StartRecording extends Component<{}, StartRecordingState> {
    // constructor to initialize the state of the component StartRecording:
    constructor(props: {}) {
        super(props);
        this.state = {
            isRecording: false,
            showModal: false,
            recordingName: '',
        };
    }

    // startRecording function to send a POST request to the server to start recording:
    startRecording = async () => {
        try {
            console.log('Starting recording...');

          const response = await axios.post('http://localhost:3000/api/stop-recording'); // todo: Adjust the URL to Benoit's API endpoint
          console.log('Recording started:', response.data);
        } catch (error) {
          console.error('Error starting recording:', error);
        }
      };
    
    // stopRecording function to send a POST request to the server to stop recording:
    stopRecording = async () => {
    try {
        console.log('Stopping recording...');

        const response = await axios.post('http://localhost:3000/api/stop-recording'); // todo: Adjust the URL to Benoit's API endpoint
        console.log('Recording stopped:', response.data);
    } catch (error) {
        console.error('Error stopping recording:', error);
    }
    };

    // saveRecording function to send a POST request to the server to save the recording:
    saveRecording = async () => {
        const { recordingName } = this.state;
        try {
            console.log('Saving recording with name:', recordingName);

          const response = await axios.post('http://localhost:3000/api/save-recording', { name: recordingName }); // todo: Adjust the URL to Benoit's API endpoint
          console.log('Recording saved:', response.data);
          this.closeModal();
        } catch (error) {
          console.error('Error saving recording:', error);
        }
      };


    // toggleRecording function to toggle the state of isRecording to start or stop recording:
    toggleRecording = () => {
        if (this.state.isRecording) {
          this.stopRecording();
        } else {
          this.startRecording();
        }
        this.setState((prevState) => ({
            isRecording: !prevState.isRecording, // toggling the state of isRecording from true to false and vice versa
            showModal: prevState.isRecording ? true : false, // Show modal if we stop recording
        }));
      };

    // closeModal function to close the modal:
    closeModal = () => {
        this.setState({ showModal: false });
    };

    // handleNameChange function to handle the change of the recording name input field (from empty to the entered value):
    handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ recordingName: event.target.value });
    };

    render() {
        // destructure the state variables isRecording, showModal and recordingName:
        const { isRecording, showModal, recordingName } = this.state;

        return(
            <> {/* React fragment to wrap several parent components: Card and Modal*/}

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
                            
                            _hover={{ backgroundColor:'#8D8D8F', borderColor:'#8D8D8F'}} // change the background color and border color when hovering the button
                        >
                            {isRecording ? 'Recording ...' : 'Record'} {/*if isRecording is true, the button text is "Recording ...", otherwise "Record"*/}
                        </Button>
                        <Heading size='md'>{isRecording ? 'Recording a session' : 'Start recording a session'}</Heading>
                    </Flex>
                </CardHeader>

                <CardBody w='full' h='full'> {/* setting the width and height to 100% to have the card of the same size no matter the content length */}
                    <Box bg='#313131' p={4} borderRadius='md' h='full' /*position='relative' */>
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

            {/* Modal to confirm the stop recording action: */}
            {/* in a modal component, there is every element that needs to be displayed in a modal */}
            <Modal isOpen={showModal} onClose={this.closeModal} isCentered>
                <ModalOverlay backdropFilter='blur(4px)' bg='rgba(0, 0, 0, 0.2)' /> {/* the overlay of the modal is set to bg='rgba(0, 0, 0, 0.2)' to create a slight darkening effect along with the blur of 4px which blurs the background (including the texts) */}
                    <ModalContent>
                        <ModalHeader>Save your recording</ModalHeader>
                        {/* <ModalCloseButton _hover={{ backgroundColor: 'lightgray' }} /> */}
                        <ModalBody>
                            <Input placeholder="Enter the name" value={recordingName} onChange={this.handleNameChange} />
                            {/* <Input placeholder="Enter the name" /> */}
                        </ModalBody>

                        <ModalFooter> {/* the footer of the modal */}
                            <Button colorScheme='blue' onClick={this.saveRecording}>
                            {/* <Button colorScheme='blue' onClick={this.closeModal}> */}
                                Save
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

            </> // closing the React fragment
        )
    }
}
export default StartRecording;