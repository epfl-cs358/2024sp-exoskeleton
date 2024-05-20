//put all the components of the dashboard here

//the class component:
// coz my component starts as a class extending Component instead of as a function:  `class ClassName extends Component {...}` Class components have a `render()` function.
import { Component } from 'react';
import { Flex, Box } from '@chakra-ui/react';

import StartRecording from './start_recording.component';
import VideoFromCV from './video_from_cv.component';
import ServoMotorInstruction from './servo_motor_instruc.component';
import RemainingTime from './remainingtime.component';

class Dashboard extends Component {
    render() {
      return (
        <Box>
        <Flex mb="16px"> {/*margin-bottom of 16px between the two rows*/}
            <StartRecording />
            <Box mr="16px"></Box>
            <VideoFromCV />
        </Flex>
        <Flex>
            <ServoMotorInstruction />
            <Box mr="16px"></Box>
            <RemainingTime />
        </Flex>
    </Box>

      );
    }
  }
  
export default Dashboard;