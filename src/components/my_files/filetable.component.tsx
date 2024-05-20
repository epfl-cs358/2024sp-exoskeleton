//this file is implemented in flexbox-based

import { Component } from 'react';
import { VStack } from '@chakra-ui/react';
import FileTableHeader from './filetable_header.component';
import FileTableRow from './filetable_row.component';

class FileTable extends Component {
    render() {
        const filesFakeData = [ //todo: will be replaced with real data, waiting for the backend.
            { fileName: 'FileName1.mid', lastUsed: '5 minutes ago', length: '3:56' },
            { fileName: 'FileName2.mid', lastUsed: '20 minutes ago', length: '2:36' },
            { fileName: 'FileName3.mid', lastUsed: '5 hours ago', length: '5:12' },
            { fileName: 'FileName4.mid', lastUsed: '2 days ago', length: '1:46' },
        ];

        return (
            <VStack spacing={0} align="stretch">
                <FileTableHeader />
                {filesFakeData.map((file, index) => (
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
