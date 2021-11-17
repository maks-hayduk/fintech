import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate_i = (j, m) => {
  return ((1 + j / m) ** m - 1).toFixed(4);
};

const Task2_1_2__1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="2.1.2 Ефективна відсоткова ставка">
      <Formik
        initialValues={{
          j: 0.2,
          m: 12
        }}
        onSubmit={(values) => {
          const res = calculate_i(Number(values.j), Number(values.m));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="j" label="Річна ставка" placeholder="" />
            <Box mt={2}>
              <InputField name="m" label="кількість нарахувань на рік" placeholder="" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Ефективна ставка: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task2_1_2__1;
