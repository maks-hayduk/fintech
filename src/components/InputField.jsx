import { useField } from 'formik';
import { TextField, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  error: {
    marginTop: spacing(0.5),
    color: palette.error.main
  }
}));

const InputField = ({ name, label, placeholder, InputProps, ...props }) => {
  const classes = useStyles();
  const [field, meta] = useField(name);

  return (
    <Box>
      <TextField
        label={label}
        placeholder={placeholder}
        variant="outlined"
        type="number"
        InputProps={{
          ...field,
          ...props
        }}
      />
      {meta.touched && meta.error ? <Box className={classes.error}>{meta.error}</Box> : null}
    </Box>
  );
};

export default InputField;
