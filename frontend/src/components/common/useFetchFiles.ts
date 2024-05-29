// a custom hook to fetch the list of files from the server
import { useState, useEffect } from 'react';
import axios from 'axios';
/*
useState: Used to declare state variables in functional components.
useEffect: Used to handle side effects in functional components, such as fetching data from an API when the component mounts.
*/

export const useFetchFiles = () => {
    const [fileList, setFileList] = useState<{ fileName: string, lastUsed: string, length: string }[]>([]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                console.log('Fetching files...');
                const response = await axios.get('/api/files'); // Adjust the URL as needed
                setFileList(response.data);
            } catch (error) {
                console.error('Error fetching file list:', error);
            }
        };

        fetchFiles();
    }, []);

    return fileList;
};
