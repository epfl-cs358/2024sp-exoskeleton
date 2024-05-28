import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Text, Button, Flex, Box, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Radio, RadioGroup, Stack, Progress } from '@chakra-ui/react';
import { FaPlay, FaPause } from "react-icons/fa"; // import the caret-right icon from react-icons/fa
import axios from 'axios'; // library to make HTTP requests to interact with the server and backend
import withFetchFiles from '../common/withFetchFiles'; // HOC to fetch the files from the server and pass them to the wrapped component

// type definition for the props of the component ServoMotorInstruction:
type ServoMotorInstructionProps = {
    fileList: { fileName: string, lastUsed: string, length: string }[]; // list of files to be displayed in the modal (fetched from the server)
};

type ServoMotorInstructionState = {
    selectedFile: string; // to store the name of the selected file
    showModal: boolean; // the state (visibility) of the modal, either true or false
    isPlaying: boolean; // the state to manage play/pause of the MIDI file
    remainingTime: number; // remaining time in seconds
    duration: number; // duration of the MIDI file in seconds
    intervalId: NodeJS.Timeout | null; // interval ID for clearing the timer
};

class ServoMotorInstruction extends Component<ServoMotorInstructionProps, ServoMotorInstructionState> {

    // constructor to initialize the state of the component ServoMotorInstruction:
    constructor(props: ServoMotorInstructionProps) {
        super(props);
        this.state = {
            selectedFile: '',
            showModal: false,
            isPlaying: false,
            remainingTime: 0,
            duration: 0,
            intervalId: null,
        };
    }

    //openModal and closeModal to control the modal visibility:

    // openModal function to open the modal:
    openModal = () => {
        this.setState({ showModal: true });
    };

    // closeModal function to close the modal:
    closeModal = () => {
        this.setState({ showModal: false });
    };


    // selectFile function to select the file (based on the file name):
    // selectFile = (fileName: string) => {
    //     const fileDuration = this.getFileDuration(fileName); 

    //     this.setState((prevState) => ({
    //         selectedFile: prevState.selectedFile === fileName ? '' : fileName, // Deselect if already selected
    //         duration: fileDuration,
    //         remainingTime: fileDuration,
    //     }), () => {
    //         this.closeModal();
    //     });
    // }; //todo: see if needed
    
    selectFile = (fileName: string) => {
        console.log('Selected file:', fileName);
        const fileDuration = this.getFileDuration(fileName);
        this.setState({
            selectedFile: fileName,
            duration: fileDuration,
            remainingTime: fileDuration,
        });
        this.closeModal();
    };

    // get the file duration based on the file name:
    getFileDuration = (fileName: string) => {
        const file = this.props.fileList.find(f => f.fileName === fileName);
        if (file) {
            const timeParts = file.length.split(':').map(Number);
            return timeParts[0] * 60 + timeParts[1];
        }
        return 0;
    };

    // togglePlayPause function to handle play/pause functionality:
    togglePlayPause = async () => {
        // this.setState((prevState) => ({
        //     isPlaying: !prevState.isPlaying
        // })); //todo: see if needed <- this is for having the clickable button even w/o a file selected 
        if (this.state.isPlaying) {
            // Handle stopping the music
            console.log('Stop playing MIDI file');
            await this.stopPlaying();
        } else {
            // Handle playing the music
            console.log('Start playing MIDI file');
            await this.startPlaying();
        }
    };

    // startPlaying function to start playing the MIDI file with the POST request:
    startPlaying = async () => {
        if (this.state.selectedFile) {
            try {
                console.log('Starting MIDI file:', this.state.selectedFile);
                const response = await axios.post('http://localhost:3000/api/start-midi', { fileName: this.state.selectedFile });
                console.log('MIDI file started successfully', response);
                this.setState({ isPlaying: true });

                const interval = setInterval(() => { // set the interval to update the remaining time every second
                    this.setState((prevState) => {
                        if (prevState.remainingTime <= 1) {
                            clearInterval(this.state.intervalId!);
                            return { ...prevState, isPlaying: false, remainingTime: 0 }; // all state properties are explicitly defined
                        }
                        return { ...prevState, remainingTime: prevState.remainingTime - 1 }; // decrement the remaining time by 1 second every interval; all state properties are explicitly defined
                    });
                }, 1000);
                this.setState({ intervalId: interval });
            } catch (error) {
                console.error('Error starting MIDI file:', error);
            }
        }
    };

    // stopPlaying function to stop playing the MIDI file with the POST request:
    // stopPlaying = async () => {
    //     try {
    //         console.log('Stopping MIDI file');
    //         const response = await axios.post('http://localhost:3000/api/stop-midi');
    //         console.log('MIDI file stopped successfully', response);
    //         this.setState((prevState) => {
    //             clearInterval(prevState.intervalId!);
    //             return { isPlaying: false, intervalId: null };
    //         });
    //     } catch (error) {
    //         console.error('Error stopping MIDI file:', error);
    //     }
    // };//todo: try
    stopPlaying = async () => {
        try {
            const response = await axios.post('/api/stop-midi');
            console.log('MIDI file stopped successfully', response);
            clearInterval(this.state.intervalId!);
            this.setState({ isPlaying: false, intervalId: null });
        } catch (error) {
            console.error('Error stopping MIDI file:', error);
        }
    };

    formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    render() {
        // destructure the state variables of the component ServoMotorInstruction:
        const { selectedFile, showModal, isPlaying, remainingTime, duration } = this.state;
        const { fileList } = this.props; // the fetched list of files from the server

        return(
            <> {/* React fragment to wrap several parent components: Card and Modal*/}

            <Card align='start' bg='#020202' color='white' p={4} borderRadius='md' boxShadow='md' w='full' h='310px'> {/* setting the width to 100% and max-width to 100% as well, and so for the entire card */}
            <CardHeader w='full'>
                    <Flex align='center' w='full'>
                        <Box alignItems ='center' bg='#313131' p={4} borderRadius='md' color='white' mr={16} 
                                w='50%' h='45px' display='flex' /* setting the width to 50% of the CardHeader */
                                onClick={this.openModal} cursor="pointer" /*change the cursor to pointer when hovering the box*/
                        >
                            {selectedFile ? `Selected file: ${selectedFile}` : 'Select a file'}
                        </Box>
                        <Button rightIcon={isPlaying? <FaPause/> : <FaPlay />} 
                                colorScheme='white' variant='solid' bg={isPlaying ? 'teal.500' : '#0461B7'} border="1px solid #0461B7"
                                w='50%' h='45px' flexShrink='0' /*(before adapting to my screen:) use w and h='full' to make the button full height*/
                                onClick={this.togglePlayPause} disabled={!selectedFile}
                        >
                            {isPlaying ? 'Stop playing' : 'Play MIDI File'}
                        </Button>
                    </Flex>
                </CardHeader>

                <CardBody bg='#1D1D1D' w='full'>
                    <Flex justifyContent='space-between' alignItems='center' mb={4}>
                        {/* <Text>Remaining Time: --:--</Text> */}
                        <Text>Remaining Time: {this.formatTime(remainingTime)}</Text>

                    </Flex>
                    {/* for the progress bar*/}
                    {/* <Progress size="xs" isIndeterminate colorScheme='gray' />     */}
                    <Progress size="xs" value={((duration - remainingTime) / duration) * 100} colorScheme='teal.500' />    

                    <Box mt='40px' w='100%' h='80px' bg='#313131' p={4} borderRadius='md'
                            color='white'> {/*the color of the text is white*/}
                        This text box contains a log of the servo instructions being sent to the exoskeleton hand in real-time.
                    </Box>
                </CardBody>
            </Card>


            {/* Modal to select a file: */}
            {/* in a modal component, there is every element that needs to be displayed in a modal */}
            <Modal isOpen={showModal} onClose={this.closeModal} isCentered>
            <ModalOverlay backdropFilter='blur(4px)' bg='rgba(0, 0, 0, 0.2)' /> {/* the overlay of the modal is set to bg='rgba(0, 0, 0, 0.2)' to create a slight darkening effect along with the blur of 4px which blurs the background (including the texts) */}
                    <ModalContent>
                        <ModalHeader>Select a file</ModalHeader>
                        {/* <ModalCloseButton _hover={{ backgroundColor: 'lightgray' }} /> */}
                        <ModalBody>
                            <RadioGroup onChange={this.selectFile} value={selectedFile}>
                                <Stack direction="column">
                                    {fileList.map((file, index) => (
                                        <Radio key={index} value={file.fileName}>
                                            {file.fileName}
                                        </Radio>
                                    ))}
                                </Stack>
                            </RadioGroup>
                        </ModalBody>

                        <ModalFooter> {/* the footer of the modal */}
                            {/* <Button colorScheme='blue' mr={3} onClick={this.closeModal}>
                                Save
                            </Button> */}
                        </ModalFooter>
                    </ModalContent>
                </Modal>

            </> // closing the React fragment
        )
    }
}
export default withFetchFiles(ServoMotorInstruction);