import { Component } from 'react';
import { Box, Flex, Text, Tab, TabList, Tabs } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

class TopBar extends Component {
    render() {
        return (
            <Box bg='#1D1D1D' color='white' p={4} borderRadius='md' boxShadow='md' w='full'>
                <Tabs variant='unstyled'>
                    <TabList>
                        <Tab _selected={{ color: 'white', borderBottom: '2px solid white' }}>
                            <Link to='/'>
                            <Text fontSize='xl'>Dashboard</Text>
                            </Link>
                        </Tab>

                        <Tab _selected={{ color: 'white', borderBottom: '2px solid white' }}>
                            <Link to="/myfiles">
                                <Text fontSize='xl'>My files</Text>
                            </Link>
                        </Tab>
                    </TabList>
                </Tabs>
            </Box>
        );
    }
}
export default TopBar;
