//put all the components related to the piano here

//the class component:
import { Component } from 'react';
import { Flex, Box } from '@chakra-ui/react';

import Keyboard from './keyboard.component';

class Piano extends Component {
    render() {
        return (
            <Box h="100vh"> {/* Set height to 100% of the viewport height */}
                <Keyboard />
            </Box>
        );
    }
  }
  
export default Piano;