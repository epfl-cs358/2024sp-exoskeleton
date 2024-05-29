import { Component } from 'react';
import { Input } from '@chakra-ui/react';

type FileSearchProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

class FileSearch extends Component<FileSearchProps> {
    render() {
        return (
            // todo: how about the search icon?
            <Input 
                placeholder="Search for a file ..." 
                onChange={this.props.onChange} 
                borderColor='#0461B7'  // This sets the border color to blue when not focused
                _hover={{ borderColor: '#0461B7' }} // This sets the border color to blue when hovered
                focusBorderColor='#0461BF' // This sets the border color to blue when focused

            />
        );
    }
}

export default FileSearch;
