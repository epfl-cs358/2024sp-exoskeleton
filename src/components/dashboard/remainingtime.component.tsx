import { Component } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { FaPlay, FaPause } from "react-icons/fa"; // import the caret-right icon from react-icons/fa

type RemainingTimeState = {
    isPaused: boolean; // the state of the recording, either true or false
};

class RemainingTime extends Component<{}, RemainingTimeState> {

    // constructor to initialize the state of the component RemainingTime:
    constructor(props: {}) {
        super(props);
        this.state = {
            isPaused: false,
        };
    }

    // togglePause function to toggle the state of isPaused:
    togglePause = () => {
        this.setState((prevState) => ({
            isPaused: !prevState.isPaused, // toggling the state of isPaused from true to false and vice versa
        }));
    };


    render() {
        // destructure the state variable isPaused:
        const { isPaused } = this.state;

        return (
            <Box bg='#1D1D1D' color='white' p={4} borderRadius='md' boxShadow='md' w='full' h='310px'>
                {/* for the button*/}
                <Flex justifyContent='flex-end' mt='200px'>
                    <Button rightIcon={isPaused? <FaPlay /> : <FaPause/>} 
                        colorScheme='white' variant='solid' bg={isPaused? '#0461B7' : 'teal.500'} border="1px solid #0461B7"
                        onClick={this.togglePause}
                    >
                        {isPaused ? 'Play' : 'Pause'}
                    </Button>
                </Flex>
            </Box>
        );
    }
}
export default RemainingTime;
