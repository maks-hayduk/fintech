import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (d, m) => (m * (1 - (1 - d) ** (1 / m))).toFixed(4);

const Task2_2_2__4 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="">
      <Formik
        initialValues={{
          d: 0.1855,
          m: 4
        }}
        onSubmit={(values) => {
          const res = calculate(Number(values.d), Number(values.m));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="d" label="Ефективна облікова ставка" placeholder="" />
            <Box mt={2}>
              <InputField name="m" label="Кількість нарахувань у році" placeholder="" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Номінальна річна облікова ставка: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task2_2_2__4;
