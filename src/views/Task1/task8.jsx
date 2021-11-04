import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import { useState } from 'react';

export const calc = (s, d, n) => {
  const P = (s * (1 - n * d)).toFixed(2);
  const D = (s - P).toFixed(2);
  return [P, D];
};

const Task8 = () => {
  const [result, setResult] = useState();

  return (
    <Formik
      initialValues={{
        s: '100000',
        d: '0.15',
        n: '1'
      }}
      onSubmit={(values) => {
        const res = calc(Number(values.s), Number(values.d), Number(values.n));
        setResult(res);
      }}
    >
      {({ handleSubmit }) => (
        <Form>
          <InputField name="s" label="Сума кредиту" placeholder="Сума кредиту" />
          <Box mt={2} mb={2}>
            <InputField name="d" label="Облікова ставка" placeholder="Облікова ставка" />
          </Box>
          <Box mt={2} mb={2}>
            <InputField name="n" label="Термін угоди" placeholder="Термін угоди" />
          </Box>
          <Button onClick={handleSubmit}>Submit</Button>
          {result && (
            <>
              <Box mt={2}>
                <Typography>Сума отриманих грошей: {result[0]} грн</Typography>
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
export default Task8;
