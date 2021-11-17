import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (s, d, n) => (s * (1 - d) ** n).toFixed(4);

const Task2_2_2__1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Облік за складною обліковою ставкою">
      <Formik
        initialValues={{
          s: 1,
          d: 0.01,
          n: 1
        }}
        onSubmit={(values) => {
          const res = calculate(Number(values.s), Number(values.d), Number(values.n));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="s" label="Майбутня сума боргу" placeholder="" />
            <Box mt={2}>
              <InputField name="d" label="Складна облікова ставка" placeholder="" />
            </Box>
            <Box mt={2}>
              <InputField name="n" label="Кількість років" placeholder="" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Борг: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task2_2_2__1;
