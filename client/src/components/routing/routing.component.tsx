import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { history } from '../../helpers/history.helper';
import CounterComponent from '../../store/reducer-sample/counter.component';
import { RoutingPaths } from '../../helpers/routing.paths';
import TestComponent from '../test/tests.component';
import CollegeComponent from '../college/college.component';


function RoutingComponent() {
    return (
        <Router history={history}>
            <Route path={RoutingPaths.base} exact={true} render={() => <Redirect to={RoutingPaths.college} />} />
            <Route path={RoutingPaths.counter} component={CounterComponent} />
            <Route path={RoutingPaths.test} component={TestComponent} />
            <Route path={RoutingPaths.college} component={CollegeComponent} />
        </Router>
    )
}

export default RoutingComponent;
