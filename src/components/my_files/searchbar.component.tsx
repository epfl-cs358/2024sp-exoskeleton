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
            />
        );
    }
}

export default FileSearch;
