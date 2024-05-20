//This component is the main component for the MyFiles page that contain all the components for the MyFiles page.

import { Component } from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react';

import TopBar from '../common/topbar.component';

import FileUploader from './file_uploader.component';
import FileSearch from './searchbar.component';
import SortFiles from './file_sorting.component';
import FileTable from './filetable.component';

type MyFilesState = { // Define the state type for MyFiles component, to search for a file letter by letter
    searchInput: string;
    files: Array<{ fileName: string; lastUsed: string; length: string }>;
};

class MyFiles extends Component<{}, MyFilesState> {

    // constructor to initialize the state of the component with the searchInput and files array
    constructor(props: {}) {
        super(props);
        this.state = {
            searchInput: '',
            files: [
                { fileName: 'FileName1.mid', lastUsed: '5 minutes ago', length: '3:56' },
                { fileName: 'FileName2.mid', lastUsed: '20 minutes ago', length: '2:36' },
                { fileName: 'FileName3.mid', lastUsed: '5 hours ago', length: '5:12' },
                { fileName: 'FileName4.mid', lastUsed: '2 days ago', length: '1:46' },
            ],
        };
    }

    // handleSearchInputChange function to update the searchInput state with the value of the input field
    handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchInput: e.target.value });
    };

    // getFilteredFiles function to filter the files based on the searchInput state
    getFilteredFiles = () => {
        const { searchInput, files } = this.state;
        return files.filter(file => file.fileName.toLowerCase().includes(searchInput.toLowerCase()));
    };


    render() {
        const filteredFiles = this.getFilteredFiles();

        return (
            <Box h="100vh"> {/* Set height to 100% of the viewport height */}
                <TopBar />
                
                <Flex direction="column" h="calc(100% - 64px)" p={4}> {/* Adjust height to exclude top bar */}
                    <Flex mb={4}>
                        <FileUploader />
                        <Box ml={4}>
                            <FileSearch onChange={this.handleSearchInputChange} />
                        </Box>
                        <Box ml={4}>
                            <SortFiles />
                        </Box>
                    </Flex>
                    <Box bg='#020202' color='white' p={4} borderRadius='md' boxShadow='md' w='full' h='full'>
                        <FileTable fileList={filteredFiles} />
                    </Box>
                </Flex>
            </Box>
        );
    }
}

export default MyFiles;
