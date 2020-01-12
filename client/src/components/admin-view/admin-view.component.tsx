import React from 'react';
import CardComponent from '../card/card.component';
import { history } from '../../helpers/history.helper';
import { RoutingPaths } from '../../helpers/routing.paths';

function onCreateTest(){
  history.push(RoutingPaths.test);
}

function viewResults() {
  console.log('Viewing results');
}

const AdminViewComponent: React.FC = () => {
  return(
    <div>
      <CardComponent name = 'Create Test' action = {() => onCreateTest()} />
      <CardComponent name = 'View Results' action = { () => viewResults()} />
    </div>
  );
}

export default AdminViewComponent;
