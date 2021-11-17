import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (d, n) => (d / (1 - n * d)).toFixed(4);

const Task5_1_1__1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Еквівалентність простої ставки відсотків та простої облікової ставки">
      <Formik
        initialValues={{
          d: 0.22,
          n: 1
        }}
        onSubmit={(values) => {
          const res = calculate(Number(values.d), Number(values.n));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="d" label="Проста облікова ставка" placeholder="" />
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

export default Task5_1_1__1;
