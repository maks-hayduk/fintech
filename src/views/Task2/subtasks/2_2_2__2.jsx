import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (s, n, m, f) => (s * (1 - f / m) ** (m * n)).toFixed(4);

const Task2_2_2__2 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="">
      <Formik
        initialValues={{
          s: 100000,
          n: 3.5,
          m: 4,
          f: 0.2
        }}
        onSubmit={(values) => {
          const res = calculate(
            Number(values.s),
            Number(values.n),
            Number(values.m),
            Number(values.f)
          );
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="s" label="Майбутня сума боргу" placeholder="" />
            <Box mt={2}>
              <InputField name="n" label="Кількість років" placeholder="" />
            </Box>
            <Box mt={2}>
              <InputField name="m" label="Кількість нарахувань у році" placeholder="" />
            </Box>
            <Box mt={2}>
              <InputField name="f" label="Номінальна річна облікова ставка" placeholder="" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Борг: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task2_2_2__2;
