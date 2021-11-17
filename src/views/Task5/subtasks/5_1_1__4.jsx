import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (i, t) => ((360 * i) / (365 + t * i)).toFixed(4);

const Task5_1_1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="">
      <Formik
        initialValues={{
          i: 0.01,
          t: 1
        }}
        onSubmit={(values) => {
          const res = calculate(Number(values.i), Number(values.t));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="i" label="Проста відсоткова ставка" placeholder="" />
            <Box mt={2}>
              <InputField name="t" label="Термін угоди у днях" placeholder="" />
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

export default Task5_1_1;
