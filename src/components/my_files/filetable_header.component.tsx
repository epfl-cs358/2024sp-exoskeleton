import { Component } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

class FileTableHeader extends Component {
    render() {
        return (
            <Flex bg="#313131" p={4} borderTopRadius="md"> {/* todo: check backgroundColor*/}
                <Box flex="1">
                    <Text fontWeight="bold">File name</Text>
                </Box>
                <Box flex="1">
                    <Text fontWeight="bold">Last used</Text>
                </Box>
                <Box flex="1">
                    <Text fontWeight="bold">Length</Text>
                </Box>
                <Box flex="1">
                    <Text fontWeight="bold">Play</Text>
                </Box>
                <Box flex="1">
                    <Text fontWeight="bold">Select</Text>
                </Box>
                <Box flex="1">
                    <Text fontWeight="bold">Delete</Text>
                </Box>
            </Flex>
        );
    }
}

export default FileTableHeader;
