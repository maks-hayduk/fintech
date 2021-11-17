import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (i, n) => {
  return ((1 - (1 + i) ** -n) / n).toFixed(4);
};

const Task5_1_3__2 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="">
      <Formik
        initialValues={{
          i: 0.5811,
          n: 2
        }}
        onSubmit={(values) => {
          const res = calculate(Number(values.i), Number(values.n));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="i" label="Проста облікова ставка" placeholder="" />
            <Box mt={2}>
              <InputField name="n" label="Термін угоди" placeholder="" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Проста відсоткова ставка: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task5_1_3__2;
