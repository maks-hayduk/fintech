import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate_S = (P, n, i) =>
  (Number(P) * Math.E ** ((Number(i) / 100) * Number(n))).toFixed(4);

const Task4_1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Визначити нарощену суму за n років">
      <Formik
        initialValues={{
          p: 1000000,
          n: 5,
          i: 10
        }}
        onSubmit={(values) => {
          setResult(calculate_S(values.p, values.n, values.i));
        }}
      >
        {({ handleSubmit, values }) => (
          <Form>
            <InputField
              name="p"
              label="Початкова сума"
              placeholder="Початкова сума"
              endAdornment="$"
            />
            <Box mt={2} mb={2}>
              <InputField name="n" label="Років" placeholder="Років" endAdornment="years" />
            </Box>
            <Box mt={2} mb={2}>
              <InputField name="i" label="Сила росту" placeholder="Сила росту" endAdornment="%" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>
                  Нарощена сума на момент закінчення угоди через {values.n} років: {result}
                </Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task4_1;
