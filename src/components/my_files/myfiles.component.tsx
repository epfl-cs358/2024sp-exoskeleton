import { Component } from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react';
import TopBar from '../common/topbar.component';
import FileUploader from './file_uploader.component';
import FileSearch from './searchbar.component';
import SortFiles from './file_sorting.component';
import FileTable from './filetable.component';

class MyFiles extends Component {
    render() {
        return (
            <Box h="100vh">
                <TopBar />
                <Flex direction="column" p={4} h="calc(100% - 64px)">
                    <Flex mb={4}>
                        <FileUploader />
                        <Box ml={4}>
                            <FileSearch />
                        </Box>
                        <Box ml={4}>
                            <SortFiles />
                        </Box>
                    </Flex>
                    <Box bg='#020202' color='white' p={4} borderRadius='md' boxShadow='md' w='full' h='full'>
                        <FileTable />
                    </Box>
                </Flex>
            </Box>
        );
    }
}

export default MyFiles;
