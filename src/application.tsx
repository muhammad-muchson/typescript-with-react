import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';

import routes from './config/routes';
import HomePage from './pages/home';
import AboutPage from './pages/about';

const Application: React.FunctionComponent<{}> = props => {


    return (
        <div>
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route 
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        );
                    })}
                    {/* <Route exact path="/" name="Home Page" component={HomePage}/>
                    <Route path="/about" name="About Page" component={AboutPage}/> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Application;