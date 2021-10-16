import { Card, makeStyles, Box, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    borderRadius: spacing(1.5)
  },
  title: {
    marginBottom: spacing(1),
    padding: spacing(3, 3, 0)
  },
  content: {
    marginTop: spacing(2),
    padding: spacing(0, 3, 3)
  }
}));

const CardWrapper = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        {title}
      </Typography>
      <Divider />
      <Box className={classes.content}>{children}</Box>
    </Card>
  );
};

export default CardWrapper;
