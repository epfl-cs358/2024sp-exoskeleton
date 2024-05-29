import { Component } from 'react';
import { Button } from '@chakra-ui/react';
import { FaUpload } from 'react-icons/fa';

class FileUploader extends Component {
    render() {
        return (
            <Button leftIcon={<FaUpload />} 
                textColor='black' variant='solid' bg='white' _hover={{ backgroundColor: '#0461B7'}} border="1px solid #0461B7"
                w='50%' h='45px' flexShrink='0'> {/*(before adapting to my screen:) use w and h='full' to make the button full height*/}
            Upload a file
            </Button>
        );
    }
}

export default FileUploader;
