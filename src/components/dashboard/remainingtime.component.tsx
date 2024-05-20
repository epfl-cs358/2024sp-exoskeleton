import { Component } from 'react';
import { Box, Text, Progress, Button, Flex } from '@chakra-ui/react';
import { FaPause } from "react-icons/fa";

class RemainingTime extends Component {
    render() {
        return (
            <Box bg='#1D1D1D' color='white' p={4} borderRadius='md' boxShadow='md' w='full' maxW='full'>
                {/* for the text*/}
                <Flex justifyContent='space-between' alignItems='center' mb={4}>
                    <Text>Remaining Time: --:--</Text>
                </Flex>
                {/* for the progress bar*/}
                <Progress size="xs" isIndeterminate colorScheme='gray' />

                {/* for the button*/}
                <Flex justifyContent='flex-end' mt='300px'>
                    <Button colorScheme='white' variant='solid' bg='#0461B7' rightIcon={<FaPause />}>
                        Pause
                    </Button>
                </Flex>
            </Box>
        );
    }
}
export default RemainingTime;