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
            isChecked: this.loadCheckboxState(props.fileName), // set the default value of the checkbox to the value from the local storage
        };
    }

    // loadCheckboxState function to load the isChecked state from the local storage, in order to persist the state when relaunching the app or refreshing the page
    loadCheckboxState(fileName: string): boolean {
        const savedState = localStorage.getItem(`checkbox-${fileName}`);
        return savedState === 'true';
    }

    // saveCheckboxState function to save the isChecked state in the local storage, in order to persist the state when relaunching the app or refreshing the page
    saveCheckboxState(fileName: string, isChecked: boolean) {
        localStorage.setItem(`checkbox-${fileName}`, isChecked.toString());
    }

    // toggleCheckbox function to toggle the isChecked state and save the state in the local storage, in order to persist the state when relaunching the app or refreshing the page
    toggleCheckbox = () => {
        this.setState((prevState) => {
            const newCheckedState = !prevState.isChecked;
            this.saveCheckboxState(this.props.fileName, newCheckedState);
            return { isChecked: newCheckedState };
        });
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
