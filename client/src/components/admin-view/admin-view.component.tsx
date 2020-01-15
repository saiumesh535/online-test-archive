import React, { FC, Fragment } from 'react';
import CardComponent from '../card/card.component';
import { history } from '../../helpers/history.helper';
import { RoutingPaths } from '../../helpers/routing.paths';
import CollegeComponent from '../college/college.component';

function onCreateTest(){
  history.push(RoutingPaths.createTest);
}

function onEditTest(){
  console.log('in edit tests');
}

function viewResults() {
  console.log('Viewing results');
}

function onCollegeComponent() {
  history.push(RoutingPaths.college);
}

const AdminViewComponent: FC = () => {
  return(
    <Fragment>
      <CardComponent name = 'Create Test' action = {onCreateTest} />
      <CardComponent name = 'Create College' action = {onCollegeComponent} />
      <CardComponent name = 'Edit Tests' action = {onEditTest} />
      <CardComponent name = 'View Results' action = {viewResults} />
    </Fragment>
  );
}

export default AdminViewComponent;
