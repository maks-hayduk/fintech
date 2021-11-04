import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import { useState } from 'react';

export const calc = (p, i, n) => {
  const S = p * (1 + n * i);
  const R = (S / (n * 12)).toFixed(2);
  return [S, R];
};

const Task6 = () => {
  const [result, setResult] = useState();

  return (
    <Formik
      initialValues={{
        p: '100000',
        i: '0.15',
        n: '3'
      }}
      onSubmit={(values) => {
        const res = calc(Number(values.p), Number(values.i), Number(values.n));
        setResult(res);
      }}
    >
      {({ handleSubmit }) => (
        <Form>
          <InputField name="p" label="Розмір позики" placeholder="Розмір позики" />
          <Box mt={2} mb={2}>
            <InputField name="i" label="Відсткова ставка" placeholder="Відсткова ставка" />
          </Box>
          <Box mt={2} mb={2}>
            <InputField name="n" label="Кількість років" placeholder="Кількість років" />
          </Box>
          <Button onClick={handleSubmit}>Submit</Button>
          {result && (
            <>
              <Box mt={2}>
                <Typography>
                  Величина боргу разом з нарахованими відсотками: {result[0]} грн
                </Typography>
              </Box>
              <Box mt={2}>
                <Typography>Щомісячна виплата за користування кредитом: {result[1]} грн</Typography>
              </Box>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};
export default Task6;
