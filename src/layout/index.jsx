import { Box, makeStyles } from '@material-ui/core';
import Menu from './Menu';

const useStyles = makeStyles(() => ({
  content: {
    width: 'calc(100% - 200px)',
    position: 'absolute',
    right: 0
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <Box sx={{ display: 'flex' }}>
      <Menu />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        className={classes.content}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
