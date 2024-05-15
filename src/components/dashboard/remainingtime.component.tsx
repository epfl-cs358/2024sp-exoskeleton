import { Component } from 'react';
import { Box, Text, Progress, Button, Flex } from '@chakra-ui/react';
import { FaPause } from "react-icons/fa";

class RemainingTime extends Component {
    render() {
        return (
            <Box bg='#1D1D1D' color='white' p={4} borderRadius='md' boxShadow='md' w='100%' maxW='650px'>
                <Flex justify='space-between' align='center' mb={4}>
                    <Text>Time remaining : --:--</Text>
                    <Progress size="xs" isIndeterminate w='80%' colorScheme='gray' />
                </Flex>
                <Flex justify='flex-end' mt={4}> {/* todo: check whether the margin-top is 4 or more*/}
                    <Button colorScheme='white' variant='solid' bg='#0461B7' rightIcon={<FaPause />}>
                        Pause
                    </Button>
                </Flex>
            </Box>
        );
    }
}
export default RemainingTime;