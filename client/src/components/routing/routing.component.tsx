import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { history } from '../../helpers/history.helper';
import CounterComponent from '../../store/reducer-sample/counter.component';
import { RoutingPaths } from '../../helpers/routing.paths';
import AddQuestionComponent from '../question/add-question/add-question.component';
import AdminViewComponent from '../admin-view/admin-view.component';
import TestComponent from '../test/tests.component';
import CollegeComponent from '../college/college.component';


function RoutingComponent() {
    return (
        <Router history = {history}>
            <Route path = {RoutingPaths.base} exact={true} render={() => <Redirect to={RoutingPaths.admin_view} />} />
            <Route path = {RoutingPaths.counter} component={CounterComponent} />
            <Route path = {RoutingPaths.admin_view} component = {AdminViewComponent}/>
            <Route path = {RoutingPaths.createTest} component={TestComponent} />
            <Route path = {RoutingPaths.add_question} component = {AddQuestionComponent}/>
            <Route path={RoutingPaths.college} component={CollegeComponent} />
        </Router>
    )
}

export default RoutingComponent;
