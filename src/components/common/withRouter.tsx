//this is a higher order component (HOC) that will pass the location prop to the wrapped component, to hook into the location prop of the react-router-dom library

import { ComponentType } from 'react';
import { useLocation, Location } from 'react-router-dom';

interface WithRouterProps {
    location: Location;
}

const withRouter = <P extends object>(Component: ComponentType<P & WithRouterProps>) => {
    const Wrapper = (props: P) => {
        const location = useLocation();
        return <Component {...props as P} location={location} />;
    };

    return Wrapper;
};

export default withRouter;
