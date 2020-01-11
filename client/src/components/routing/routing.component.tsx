import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { history } from '../../helpers/history.helper';
import CounterComponent from '../../store/reducer-sample/counter.component';
import { RoutingPaths } from '../../helpers/routing.paths';


function RoutingComponent() {
    return (
        <Router history={history}>
            <Route path={RoutingPaths.base} exact={true} render={() => <Redirect to={RoutingPaths.counter} />} />
            <Route path={RoutingPaths.counter} component={CounterComponent} />
        </Router>
    )
}

export default RoutingComponent;
