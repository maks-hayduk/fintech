import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (d, t) => ((365 * d) / (360 - t * d)).toFixed(4);

const Task5_1_1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="">
      <Formik
        initialValues={{
          d: 0.01,
          t: 1
        }}
        onSubmit={(values) => {
          const res = calculate(Number(values.d), Number(values.t));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="d" label="Проста облікова ставка" placeholder="" />
            <Box mt={2}>
              <InputField name="t" label="Термін угоди у днях" placeholder="" />
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

export default Task5_1_1;
