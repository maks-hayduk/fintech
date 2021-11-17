import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  useTheme
} from '@material-ui/core';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { routes } from 'src/const';
import DrawerHeader from './DrawerHeader';
import { drawerWidth } from './const';

const navigation = [
  {
    title: 'First task',
    linkTo: routes.task1
  },
  {
    title: 'Second task',
    linkTo: routes.task2
  },
  {
    title: 'Third task',
    linkTo: routes.task3
  },
  {
    title: 'Fourth task',
    linkTo: routes.task4
  },
  {
    title: 'Fifth task',
    linkTo: routes.task5
  }
];

const Menu = ({ open, handleDrawerClose }) => {
  const theme = useTheme();

  const onItemClick = () => {
    handleDrawerClose();
  };

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0
      }}
      variant="persistent"
      anchor="left"
      PaperProps={{
        style: {
          width: drawerWidth,
          boxSizing: 'border-box'
        }
      }}
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {navigation.map((nav) => (
          <ListItem button component={Link} to={nav.linkTo} key={nav.linkTo} onClick={onItemClick}>
            <ListItemText primary={nav.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
