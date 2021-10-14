import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'src/const';
import Task1 from './Task1';
import Task2 from './Task2';

const Routes = () => (
  <Switch>
    <Route exact path={routes.task1} component={Task1} />
    <Route exact path={routes.task2} component={Task2} />
    <Redirect to={routes.task1} />
  </Switch>
);

export default Routes;
