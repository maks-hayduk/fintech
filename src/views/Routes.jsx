import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'src/const';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import Task5 from './Task5';

const Routes = () => (
  <Switch>
    <Route exact path={routes.task1} component={Task1} />
    <Route exact path={routes.task2} component={Task2} />
    <Route exact path={routes.task3} component={Task3} />
    <Route exact path={routes.task4} component={Task4} />
    <Route exact path={routes.task5} component={Task5} />
    <Redirect to={routes.task1} />
  </Switch>
);

export default Routes;
