import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (d, n) => {
  return ((1 - n * d) ** (-1 / n) - 1).toFixed(4);
};

const Task5_1_3__1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Еквівалентність простої облікової і складної ставки відсотка">
      <Formik
        initialValues={{
          d: 0.3,
          n: 2
        }}
        onSubmit={(values) => {
          const res = calculate(Number(values.d), Number(values.n));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="d" label="Складна облікова ставка" placeholder="" />
            <Box mt={2}>
              <InputField name="n" label="Термін угоди" placeholder="" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Проста облікова ставка: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task5_1_3__1;
