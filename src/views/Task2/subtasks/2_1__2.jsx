import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate2_1Scd = (p, i, c, d) => (p * (1 + i) ** c * (1 + (d / 365) * i)).toFixed(2);

const Task2_1__2 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper>
      <Formik
        initialValues={{
          p: 300000,
          i: 0.25,
          c: 2,
          d: 155
        }}
        onSubmit={(values) => {
          const res = calculate2_1Scd(
            Number(values.p),
            Number(values.i),
            Number(values.c),
            Number(values.d)
          );
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="p" label="Початкова величина боргу" placeholder="" />
            <Box mt={2}>
              <InputField
                name="i"
                label="Річна ставка у вигляді десяткового дробу"
                placeholder=""
              />
            </Box>
            <Box mt={2}>
              <InputField name="c" label="Ціла частина років нарахування" placeholder="" />
            </Box>
            <Box mt={2}>
              <InputField name="d" label="дні" placeholder="" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>S: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task2_1__2;
