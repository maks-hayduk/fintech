import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (p, f, m, n) => (p / (1 - f / m) ** (m * n)).toFixed(4);

const Task2_2_2__6 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="">
      <Formik
        initialValues={{
          p: 1,
          f: 0.01,
          m: 1,
          n: 1
        }}
        onSubmit={(values) => {
          const res = calculate(
            Number(values.p),
            Number(values.f),
            Number(values.m),
            Number(values.n)
          );
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="p" label="Сума боргу" placeholder="" />
            <Box mt={2}>
              <InputField name="f" label="Складна облікова ставка" placeholder="" />
            </Box>
            <Box mt={2}>
              <InputField name="m" label="Кількість нарахувань у році" placeholder="" />
            </Box>
            <Box mt={2}>
              <InputField name="n" label="Кількість років" placeholder="" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Нарощений борг: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task2_2_2__6;
