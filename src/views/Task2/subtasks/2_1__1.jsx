import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate2_1S = (p, i, n) => (p * (1 + i) ** n).toFixed(2);

const Task2_1__1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="2.1. Нарощення за складними відсотковими ставками">
      <Formik
        initialValues={{
          p: 1,
          n: 1,
          i: 0.01
        }}
        onSubmit={(values) => {
          const res = calculate2_1S(Number(values.p), Number(values.i), Number(values.n));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="p" label="Початкова величина боргу" placeholder="" />
            <Box mt={2}>
              <InputField name="n" label="Кількість років" placeholder="" />
            </Box>
            <Box mt={2}>
              <InputField
                name="i"
                label="Річна ставка у вигляді десяткового дробу"
                placeholder=""
              />
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

export default Task2_1__1;
