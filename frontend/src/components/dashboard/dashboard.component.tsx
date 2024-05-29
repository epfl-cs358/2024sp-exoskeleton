//put all the components of the dashboard here

//the class component:
import { Component } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import axios from 'axios';

import TopBar from '../common/topbar.component';
import StartRecording from './start_recording.component';
import VideoFromCV from './video_from_cv.component';
import ServoMotorInstruction from './servo_motor_instruc.component';
import Play from './piano/Play/Play';

type DashboardState = {
    fileList: { fileName: string, lastUsed: string, length: string }[]; // fileList fetched from the server in Dashboard, then pass it down to the ServoMotorInstruction component as a prop.
};
class Dashboard extends Component<{}, DashboardState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            fileList: [],
        };
    }

    // Fetch the list of files from the server:
    async componentDidMount() {
        try {
            console.log('Fetching file list in Dashboard component...');
            const response = await axios.get('http://localhost:3000/api/files');
            console.log('File list fetched - response.data:', response.data);
            this.setState({ fileList: response.data });
            console.log('File list fetched: - fileList state', this.state.fileList);
        } catch (error) {
            console.error('Error fetching file list:', error);
        }
    }

    render() {
        return (
            <Box h="100vh"> {/* Set height to 100% of the viewport height */}
                <TopBar />

                <Flex direction="column" h="calc(100% - 64px)" p={4}> {/* Adjust height to exclude top bar */}
                    {/*the first row of the dashboard*/}
                    <Flex flex="1" mb="16px"> {/* Enable the Flexbox and Add a margin of 16px between the two rows */}
                        <Flex flex="1" mr="16px"> {/* wrap each Component in a Flex container to make them flexibly adjust to the available space */}
                            <StartRecording />
                        </Flex>
                        {/* <Box w="16px" /> Add a margin of 16px between the two columns */}
                        <Flex flex="1">
                            <VideoFromCV />
                        </Flex>
                    </Flex>
                        
                    {/*the second row of the dashboard*/}
                    <Flex flex="1">
                        <Flex flex="1" mr="16px">
                            <ServoMotorInstruction fileList={this.state.fileList} />

                        </Flex>
                        <Flex flex="1">
                            <Play />
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        );
    }
  }
  
export default Dashboard;