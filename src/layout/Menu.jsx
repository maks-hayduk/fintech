import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { routes } from 'src/const';

const drawerWidth = 200;

const navigation = [
  {
    title: 'First task',
    linkTo: routes.task1
  },
  {
    title: 'Second task',
    linkTo: routes.task2
  }
];

const Menu = () => (
  <Drawer
    variant="permanent"
    anchor="left"
    PaperProps={{
      style: { width: drawerWidth }
    }}
  >
    <List>
      {navigation.map(nav => (
        <ListItem button component={Link} to={nav.linkTo} key={nav.linkTo}>
          <ListItemText primary={nav.title} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default Menu;
