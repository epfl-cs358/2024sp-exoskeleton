import { Component } from 'react';
import { Box, Text, Tab, TabList, Tabs } from '@chakra-ui/react';
import { Link, Location } from 'react-router-dom';

import withRouter from './withRouter'; // import the withRouter function

interface TopBarProps {
    location: Location;
}

class TopBar extends Component<TopBarProps> {
    render() {
        const { location } = this.props;
        const selectedTab = location.pathname === '/myfiles' ? 1 : 0; // set the selected tab based on the current location path name

        return (
            <Box bg='#1D1D1D' color='white' p={4} borderRadius='md' boxShadow='md' w='full'>
                <Tabs index={selectedTab} variant='unstyled'>
                    <TabList>
                        <Tab _selected={{ color: 'white', borderBottom: '2px solid white' }}>
                            <Link to="/">
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
export default withRouter(TopBar);
