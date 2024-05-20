import { Component } from 'react';
import { Flex, Box, Checkbox, IconButton, Text } from '@chakra-ui/react';
import { FaPlay, FaTrash } from 'react-icons/fa';

// define the prop tupes of the const
type FileTableRowProps = {
    fileName: string;
    lastUsed: string;
    length: string;
};

type FileTableRowState = {
    isChecked: boolean;
};

class FileTableRow extends Component<FileTableRowProps, FileTableRowState> {
    constructor(props: FileTableRowProps) {
        super(props);
        this.state = {
            isChecked: false, // Default to isNotChecked
        };
    }

    toggleCheckbox = () => {
        this.setState((prevState) => ({
            isChecked: !prevState.isChecked,
        }));
    };
    
    render() {
        const { fileName, lastUsed, length }: FileTableRowProps = this.props;
        const { isChecked } = this.state;

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
                    <Checkbox 
                        isChecked={isChecked}
                        onChange={this.toggleCheckbox}
                        iconColor={isChecked ? "white" : "transparent"} //if the icon isChecked, the color is white, otherwise transparent
                        _checked={{ // _checked is used to apply styles when the checkbox is checked
                            bg: "blue.500",
                            borderColor: "blue.500",
                        }}
                        _focus={{ // _focus is used to apply styles when the checkbox is focused
                            boxShadow: "none",
                        }}
                    >
                </Checkbox>
                </Box>
                <Box flex="1">
                    <IconButton icon={<FaTrash />} aria-label="Delete" />
                </Box>
            </Flex>
        );
    }
}

export default FileTableRow;
