import { Component } from 'react';
import { Card, CardHeader, CardBody, Heading, Image, Flex} from '@chakra-ui/react'
// Import logo
import videoPhoto from './video.png';

class VideoFromCV extends Component{
    render() {
        return(
        <Card align='start' bg='#020202' color='white' p={4} borderRadius='md' boxShadow='md' w='full' h='full'> {/* setting the width to 100% and max-width to 100% as well, and so for the entire card */}
            <CardHeader>
              <Heading size='md'>Video feed from the computer vision</Heading>
            </CardHeader>
            <CardBody>
                {/* The video feed from the computer vision will be displayed in the cardbody.*/}
                <Flex alignItems='center' justifyContent='center' h='full'> {/* Center the image */} {/*todo: the height of the image is 300px, should be flex. coz the dashboard should be fit for the screen in 100%*/}
                    <Image
                        src={videoPhoto.src} // Access the src property of WasteFlowLogo
                        alt="video image" //todo: will be replaced with the real one when there will be backend
                        w='auto'
                        h='auto'
                    />
                </Flex>  
            </CardBody>
          </Card>
        )
    }

}
export default VideoFromCV;