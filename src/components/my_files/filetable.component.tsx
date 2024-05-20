//this file is implemented in flexbox-based

import { Component } from 'react';
import { VStack } from '@chakra-ui/react';
import FileTableHeader from './filetable_header.component';
import FileTableRow from './filetable_row.component';


type FileTableProps = {
    fileList: Array<{ fileName: string; lastUsed: string; length: string }>;
};

class FileTable extends Component<FileTableProps> {
    render() {
        const { fileList } = this.props;

        return (
            <VStack spacing={0} align="stretch">
                <FileTableHeader />
                {fileList.map((file, index) => (
                    <FileTableRow 
                    key={index}

                    fileName={file.fileName}
                    lastUsed={file.lastUsed}
                    length={file.length}
                    />
                ))}
            </VStack>
        );
    }
}

export default FileTable;
