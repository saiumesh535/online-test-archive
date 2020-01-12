import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { history } from '../../helpers/history.helper';
import CounterComponent from '../../store/reducer-sample/counter.component';
import { RoutingPaths } from '../../helpers/routing.paths';
import TestComponent from '../test/test.component';


function RoutingComponent() {
    return (
        <Router history={history}>
            <Route path={RoutingPaths.base} exact={true} render={() => <Redirect to={RoutingPaths.test} />} />
            <Route path={RoutingPaths.counter} component={CounterComponent} />
            <Route path={RoutingPaths.test} component={TestComponent} />
        </Router>
    )
}

export default RoutingComponent;
