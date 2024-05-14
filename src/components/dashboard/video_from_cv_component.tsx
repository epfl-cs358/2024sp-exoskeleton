import { Component } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Box, Image} from '@chakra-ui/react'
// Import logo
import videoPhoto from './logo.png';

class VideoFromCV extends Component{
    render() {

        const logoContainerStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center', // Center the png
            height: '24px', // the height of the header
            width: "300px"
        };
        return(

            <Card align='center'>
            <CardHeader>
              <Heading size='md'>Video feed from the computer vision</Heading>
            </CardHeader>
            <CardBody>
                <Box style={logoContainerStyle}>
                    <Image
                        src={videoPhoto.src} // Access the src property of WasteFlowLogo
                        alt="video image" //todo: will be replaced with the real one when there will be backend
                        width="35px"
                        height="24.706px"
                        ml="4"
                        mr="4"// margin-right only when sidebar is open //margin-right of 4 (4 * 4px = 16px) between the image and the text
                    />
                </Box>  
            </CardBody>
          </Card>
        )
    }

}
export default VideoFromCV;