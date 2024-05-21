import { Component } from 'react';
import { Card, CardHeader, CardBody, Text, Button, Flex, Box, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { FaCaretRight } from "react-icons/fa"; // import the caret-right icon from react-icons/fa

type ServoMotorInstructionState = {
    selectedFile: string; // to store the name of the selected file
    showModal: boolean; // the state (visibility) of the modal, either true or false
};

class ServoMotorInstruction extends Component<{}, ServoMotorInstructionState> {

    // constructor to initialize the state of the component ServoMotorInstruction:
    constructor(props: {}) {
        super(props);
        this.state = {
            selectedFile: '',
            showModal: false,
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
    selectFile = (fileName: string) => {
        this.setState((prevState) => ({
            selectedFile: prevState.selectedFile === fileName ? '' : fileName, // Deselect if already selected
        }), () => {
            this.closeModal();
        });
    };

    // // selectFile function to select the file (based on the file name):
    // selectFile = (fileName: string) => {
    //     this.setState({ selectedFile: fileName, showModal: false });
    // };

    render() {
        // destructure the state variables selectedFile and showModal:
        const { selectedFile, showModal } = this.state;

        const fakeFileList = [ //todo: replace this with the actual file list
            { fileName: 'FileName1.mid', lastUsed: '5 minutes ago', length: '3:56' },
            { fileName: 'FileName2.mid', lastUsed: '20 minutes ago', length: '2:36' },
            { fileName: 'FileName3.mid', lastUsed: '5 hours ago', length: '5:12' },
            { fileName: 'FileName4.mid', lastUsed: '2 days ago', length: '4:33' },
        ];

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
                        <Button rightIcon={<FaCaretRight />} 
                                colorScheme='white' variant='solid' bg='#0461B7' _hover={{ backgroundColor: "transparent" }} border="1px solid #0461B7"
                                w='50%' h='45px' flexShrink='0'> {/*(before adapting to my screen:) use w and h='full' to make the button full height*/}
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
                                    {fakeFileList.map((file, index) => (
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
export default ServoMotorInstruction;