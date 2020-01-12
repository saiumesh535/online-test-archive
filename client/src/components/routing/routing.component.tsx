import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import { history } from '../../helpers/history.helper';
import CounterComponent from '../../store/reducer-sample/counter.component';
import { RoutingPaths } from '../../helpers/routing.paths';
import AddQuestionComponent from '../add-question/add-question.component';
import AdminViewComponent from '../admin-view/admin-view.component';
import CreateTestComponent from '../test/create-test/create-test.component';


function RoutingComponent() {
    return (
        <Router history = {history}>
            <Route path = {RoutingPaths.base} exact={true} render={() => <Redirect to={RoutingPaths.admin_view} />} />
            <Route path = {RoutingPaths.counter} component={CounterComponent} />
            <Route path = {RoutingPaths.admin_view} component = {AdminViewComponent}/>
            <Route path = {RoutingPaths.create_test} component = {CreateTestComponent}/>
            <Route path = {RoutingPaths.add_question} component = {AddQuestionComponent}/>
        </Router>
    )
}

export default RoutingComponent;
