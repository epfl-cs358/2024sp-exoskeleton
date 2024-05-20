//put all the components of the dashboard here

//the class component:
// coz my component starts as a class extending Component instead of as a function:  `class ClassName extends Component {...}` Class components have a `render()` function.
import { Component } from 'react';
import { Flex, Box } from '@chakra-ui/react';

import TopBar from '../common/topbar.component';
import StartRecording from './start_recording.component';
import VideoFromCV from './video_from_cv.component';
import ServoMotorInstruction from './servo_motor_instruc.component';
import RemainingTime from './remainingtime.component';

class Dashboard extends Component {
    render() {
        return (
            <Box h="100vh"> {/* Set height to 100% of the viewport height */}
                <TopBar />

                <Flex direction="column" h="calc(100% - 64px)" p={4}> {/* Adjust height to exclude top bar */}
                    {/*the first row of the dashboard*/}
                    <Flex flex="1" mb="16px"> {/* Add a margin of 16px between the two rows */}
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
                            <ServoMotorInstruction />
                        </Flex>
                        <Flex flex="1">
                            <RemainingTime />
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        );
    }
  }
  
export default Dashboard;