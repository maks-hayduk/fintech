import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate_j = (i, m) => (m * ((1 + i) ** (1 / m) - 1)).toFixed(4);

const Task2_1_2__2 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper>
      <Formik
        initialValues={{
          j: 0.01,
          m: 1
        }}
        onSubmit={(values) => {
          const res = calculate_j(Number(values.i), Number(values.m));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="j" label="Ефективна ставка" placeholder="" />
            <Box mt={2}>
              <InputField name="m" label="кількість нарахувань на рік" placeholder="" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>I: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task2_1_2__2;
