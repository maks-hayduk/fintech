import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (i) => (i / (1 + i)).toFixed(4);

const Task5_1_4 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="">
      <Formik
        initialValues={{
          i: 0.01
        }}
        onSubmit={(values) => {
          const res = calculate(Number(values.i));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="i" label="Проста облікова ставка" placeholder="" />
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

export default Task5_1_4;
