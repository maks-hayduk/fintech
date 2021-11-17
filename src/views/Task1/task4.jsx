import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import { useState } from 'react';

export const calc = (p, i, n) => {
  let nm = 1;
  for (let j = 0; j < n; j += 1) {
    nm *= 1 + (30 / 366) * i;
  }

  return p * nm;
};

const Task3 = () => {
  const [result, setResult] = useState();

  return (
    <Formik
      initialValues={{
        p: '10000',
        i: '0.15',
        n: '4'
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
            <InputField
              name="i"
              label="Відсткова ставка за квартал"
              placeholder="Відсткова ставка за квартал"
            />
          </Box>
          <Box mt={2} mb={2}>
            <InputField name="n" label="Кількість місяців" placeholder="Кількість місяців" />
          </Box>
          <Button onClick={handleSubmit}>Submit</Button>
          {result && (
            <>
              <Box mt={2}>
                <Typography>накопичена на рахунку за рік сума: {result} грн</Typography>
              </Box>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};
export default Task3;
