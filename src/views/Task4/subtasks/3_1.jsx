import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate_S = (P, m) => Number(P) * Number(m);

const Task4_3_1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Розрахунок суми боргу з зміною сили росту">
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
            <InputField name="p" label="P" placeholder="Enter P" endAdornment="$" />
            <Box mt={2} mb={2}>
              <InputField name="m" label="Multiplier" placeholder="Enter multiplier" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>
                  Розрахунок суми боргу з зміною сили росту: {result.toFixed(2)}
                </Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task4_3_1;
