import { Component } from 'react';
import { Card, CardHeader, CardBody, Heading, Image, Flex, Button} from '@chakra-ui/react'
import { LuCameraOff } from "react-icons/lu";
import { FaCamera } from "react-icons/fa";

// Import logo
import videoPhoto from './video.png';

type VideoFromCVState = {
    isCamera1Paused: boolean; // the state of Camera 1, either true or false
    isCamera2Paused: boolean; // the state of Camera 2, either true or false
};

class VideoFromCV extends Component<{}, VideoFromCVState>{
        // constructor to initialize the state of the component VideoFromCV:
        constructor(props: {}) {
            super(props);
            this.state = {
                isCamera1Paused: false,
                isCamera2Paused: false,
            };
        }
    
    // togglePause function to toggle the state of isCamera1Paused:
    toggleCamera1Pause = () => {
        this.setState((prevState) => ({
            isCamera1Paused: !prevState.isCamera1Paused, // toggling the state of isCamera1Paused from true to false and vice versa
        }));
    };

    // togglePause function to toggle the state of isCamera2Paused:
    toggleCamera2Pause = () => {
        this.setState((prevState) => ({
            isCamera2Paused: !prevState.isCamera2Paused, // toggling the state of isCamera2Paused from true to false and vice versa
        }));
    };

    render() {
        // destructure the state variable isPaused:
        const { isCamera1Paused, isCamera2Paused } = this.state;

        return(
        <Card align='start' bg='#020202' color='white' p={4} borderRadius='md' boxShadow='md' w='full' h='310px'> {/* setting the width to 100% and max-width to 100% as well, and so for the entire card */}
            <CardHeader>
              <Heading size='md'>Video feed from the computer vision</Heading>
            </CardHeader>
            <CardBody>
                {/* The video feed from the computer vision will be displayed in the cardbody.*/}
                <Flex alignItems='center' justifyContent='center' h='full'> {/* Center the image */}
                    <Image
                        src={videoPhoto.src} // Access the src property of WasteFlowLogo
                        alt="video image" //todo: will be replaced with the real one when there will be backend
                        w='260'
                        h='160'
                    />
                    <Flex direction="column" justifyContent='center' alignItems='flex-end' ml='150px'>
                        {/* for button1*/}
                        <Button w='full' rightIcon={isCamera1Paused ? <FaCamera /> : <LuCameraOff />}                            
                            colorScheme='white' variant='solid' bg={isCamera1Paused ? '#0461B7' : 'transparent'} border="1px solid #0461B7"
                            onClick={this.toggleCamera1Pause}
                            mb={16} // Add margin bottom to create space between buttons
                        >
                            Camera 1
                        </Button>

                        {/* for button2*/}
                        <Button w='full' rightIcon={isCamera2Paused ? <FaCamera /> : <LuCameraOff />}
                            colorScheme='white' variant='solid' bg={isCamera2Paused ?  '#0461B7' : 'transparent'} border="1px solid #0461B7"
                            onClick={this.toggleCamera2Pause}
                        >
                            Camera 2
                        </Button>
                    </Flex>                   
                </Flex>  
            </CardBody>
          </Card>
        )
    }

}
export default VideoFromCV;