import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (i, t) => ((360 / t) * (1 - (1 + i) ** (-t / 365))).toFixed(4);

const Task5_1_3__4 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="">
      <Formik
        initialValues={{
          i: 0.1713,
          t: 180
        }}
        onSubmit={(values) => {
          const res = calculate(Number(values.i), Number(values.t));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="i" label="Проста облікова ставка" placeholder="" />
            <Box mt={2}>
              <InputField name="t" label="Термін угоди у днях" placeholder="" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Складна облікова ставка: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task5_1_3__4;
