// the HOC that fetches the files from the server and passes them to the wrapped component
import React from 'react';
import { useFetchFiles } from './useFetchFiles';

const withFetchFiles = <P extends object>(Component: React.ComponentType<P>) => {
    return (props: P) => {
        const fileList = useFetchFiles();
        return <Component {...props} fileList={fileList} />;
    };
};

export default withFetchFiles;
