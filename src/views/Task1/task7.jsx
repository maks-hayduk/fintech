import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import { useState } from 'react';

export const calc = (s, i, n) => {
  const P = (s / (1 + (n / 366) * i)).toFixed(2);
  const D = (s - P).toFixed(2);
  return [P, D];
};

const Task7 = () => {
  const [result, setResult] = useState();

  return (
    <Formik
      initialValues={{
        s: '100',
        i: '0.2',
        n: '91'
      }}
      onSubmit={(values) => {
        const res = calc(Number(values.s), Number(values.i), Number(values.n));
        setResult(res);
      }}
    >
      {({ handleSubmit }) => (
        <Form>
          <InputField
            name="s"
            label="Сертифікат викуповується"
            placeholder="Сертифікат викуповується"
          />
          <Box mt={2} mb={2}>
            <InputField
              name="i"
              label="Оголошена прибутковість"
              placeholder="Оголошена прибутковість"
            />
          </Box>
          <Box mt={2} mb={2}>
            <InputField name="n" label="Термін угоди" placeholder="Термін угоди" />
          </Box>
          <Button onClick={handleSubmit}>Submit</Button>
          {result && (
            <>
              <Box mt={2}>
                <Typography>Ціна продажу сертифікату: {result[0]} грн</Typography>
              </Box>
              <Box mt={2}>
                <Typography>Величина дисконту: {result[1]} грн</Typography>
              </Box>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};
export default Task7;
