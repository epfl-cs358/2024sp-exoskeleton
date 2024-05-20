import { Component } from 'react';
import { Flex, Box, Checkbox, IconButton, Text } from '@chakra-ui/react';
import { FaPlay, FaTrash } from 'react-icons/fa';

// define the prop tupes of the const
type FileTableRowProps = {
    fileName: string;
    lastUsed: string;
    length: string;
};

class FileTableRow extends Component<FileTableRowProps> {
    render() {
        const { fileName, lastUsed, length }: FileTableRowProps = this.props;

        return (
            <Flex bg="#1D1D1D" p={4} borderBottom="1px solid #313131">
                <Box flex="1">
                    <Text>{fileName}</Text>
                </Box>
                <Box flex="1">
                    <Text>{lastUsed}</Text>
                </Box>
                <Box flex="1">
                    <Text>{length}</Text>
                </Box>
                <Box flex="1">
                    <IconButton icon={<FaPlay />} aria-label="Play" />
                </Box>
                <Box flex="1">
                    <Checkbox isChecked />
                </Box>
                <Box flex="1">
                    <IconButton icon={<FaTrash />} aria-label="Delete" />
                </Box>
            </Flex>
        );
    }
}

export default FileTableRow;
