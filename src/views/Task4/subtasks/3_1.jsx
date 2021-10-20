import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate_S = (P, m) => (Number(P) * Number(m)).toFixed(4);

const Task4_3_1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Визначити нарощену суму за n років з зміною сили росту">
      <Formik
        initialValues={{
          p: '',
          m: ''
        }}
        onSubmit={(values) => {
          setResult(calculate_S(values.p, values.m));
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField
              name="p"
              label="Початкова сума"
              placeholder="Початкова сума"
              endAdornment="$"
            />
            <Box mt={2} mb={2}>
              <InputField name="m" label="Множник" placeholder="Множник" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Розрахунок суми боргу з зміною сили росту: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task4_3_1;
