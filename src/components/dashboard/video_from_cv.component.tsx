import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Heading, Flex, Button} from '@chakra-ui/react'
import { LuCameraOff } from "react-icons/lu";
import { FaCamera } from "react-icons/fa";
import axios from 'axios';
import './video_from_cv.styles.css'; // Import css file

type VideoFromCVState = {
    isCamera1Paused: boolean; // the state of Camera 1, either true or false
    isCamera2Paused: boolean; // the state of Camera 2, either true or false
    videoSource: string; // the source URL of the video feed
};

class VideoFromCV extends Component<{}, VideoFromCVState>{
    videoRef: React.RefObject<HTMLVideoElement>;

    // constructor to initialize the state of the component VideoFromCV:
    constructor(props: {}) {
        super(props);
        this.state = {
            isCamera1Paused: false,
            isCamera2Paused: false,
            videoSource: '', // initial video source is empty
        };
        this.videoRef = React.createRef();
    }

    // componentDidUpdate function to hide the default video controls (i.e. the buttons for play/pause, volume, etc.):
    componentDidUpdate() {
        if (this.videoRef.current) {
            const video = this.videoRef.current;
            const controls = video.shadowRoot?.querySelectorAll('.custom-video-controls');
            if (controls) {
                controls.forEach(control => {
                    (control as HTMLElement).style.display = 'none';
                });
            }
        }
    }

    // startCamera1 function to send a POST request to the server to start Camera 1:
    startCamera1 = async () => {
        try {
            console.log('Starting Camera 1');
            const response = await axios.post('http://localhost:3000/api/start-camera1'); //todo: wait for Benoit to implement the backend
            console.log('Camera 1 started successfully', response);

            this.setState({ videoSource: 'http://localhost:3000/api/stream-camera1' }); // the URL for Camera 1 stream //todo: wait for Benoit to implement the backend

        } catch (error) {
            console.error('Error starting Camera 1:', error);
        }
    };

    // stopCamera1 function to send a POST request to the server to stop Camera 1:
    stopCamera1 = async () => {
        try {
            console.log('Stopping Camera 1');
            const response = await axios.post('http://localhost:3000/api/stop-camera1'); //todo: wait for Benoit to implement the backend
            console.log('Camera 1 stopped successfully', response);

            this.setState({ videoSource: '' }); // Clear the video source when stopping

        } catch (error) {
            console.error('Error stopping Camera 1:', error);
        }
    };

    // startCamera2 function to send a POST request to the server to start Camera 2:
    startCamera2 = async () => {
        try {
            console.log('Starting Camera 2');
            const response = await axios.post('http://localhost:3000/api/start-camera2'); //todo: wait for Benoit to implement the backend
            console.log('Camera 2 started successfully', response);

            this.setState({ videoSource: 'http://localhost:3000/api/stream-camera2' }); // the URL for Camera 2 stream //todo: wait for Benoit to implement the backend

        } catch (error) {
            console.error('Error starting Camera 2:', error);
        }
    };

    // stopCamera2 function to send a POST request to the server to stop Camera 2:
    stopCamera2 = async () => {
        try {
            console.log('Stopping Camera 2');
            const response = await axios.post('http://localhost:3000/api/stop-camera2'); //todo: wait for Benoit to implement the backend
            console.log('Camera 2 stopped successfully', response);

            this.setState({ videoSource: '' }); // Clear the video source when stopping

        } catch (error) {
            console.error('Error stopping Camera 2:', error);
        }
    };

    // toggleCamera1Pause function to toggle the state of isCamera1Paused, to start or stop Camera 1:
    toggleCamera1Pause = async () => {
        try {
            if (this.state.isCamera1Paused) {
                await this.stopCamera1();
            } else {
                await this.startCamera1();
                if (!this.state.isCamera2Paused) {
                    await this.stopCamera2();
                }
            }
            this.setState((prevState) => ({
                isCamera1Paused: !prevState.isCamera1Paused,
            }));
            console.log('Camera 1 state toggled:', !this.state.isCamera1Paused); // confirm state changes
        } catch (error) {
            console.error('Error toggling Camera 1:', error);
        }
    };

    // toggleCamera2Pause function to toggle the state of isCamera2Paused, to start or stop Camera 2:
    toggleCamera2Pause = async () => {
        try {
            if (this.state.isCamera2Paused) {
                await this.stopCamera2();
            } else {
                await this.startCamera2();
                if (!this.state.isCamera1Paused) {
                    await this.stopCamera1();
                }
            }
            this.setState((prevState) => ({
                isCamera2Paused: !prevState.isCamera2Paused,
            }));
            console.log('Camera 2 state toggled:', !this.state.isCamera2Paused); // confirm state changes
        } catch (error) {
            console.error('Error toggling Camera 2:', error);
        }
    };

    render() {
        // destructure the state variables isCamera1Paused, isCamera2Paused, and videoSource:
        const { isCamera1Paused, isCamera2Paused, videoSource } = this.state;

        return(
        <Card align='start' bg='#020202' color='white' p={4} borderRadius='md' boxShadow='md' w='full' h='310px'> {/* setting the width to 100% and max-width to 100% as well, and so for the entire card */}
            <CardHeader>
              <Heading size='md'>Video feed from the computer vision</Heading>
            </CardHeader>
            <CardBody>
                {/* The video feed from the computer vision will be displayed in the cardbody.*/}
                <Flex alignItems='center' justifyContent='center' h='full'> {/* Center the image */}
                    <video
                            ref={this.videoRef} // reference to the video element
                            src={videoSource}
                            width="260"
                            height="160"
                            controls // for the play/pause button
                            autoPlay // to start playing the video automatically
                            className="custom-video-controls"
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
                            // onClick={() => this.toggleCamera2Pause()}
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