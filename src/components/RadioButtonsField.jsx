import * as React from 'react';
import { useField } from 'formik';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';

const FormControlItem = ({ label, value }) => (
  <FormControlLabel value={value} control={<Radio color="primary" />} label={label} />
);

const RadioButtonField = ({ name, label, items }) => {
  // eslint-disable-next-line
  const [field, _, helpers] = useField(name);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        row
        name={name}
        value={field.value}
        onChange={(e) => helpers.setValue(e.target.value)}
      >
        {items.map((el) => (
          <FormControlItem label={el.label} value={el.value} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonField;
