import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate_multiplier = (sigma_p, a_p, n_p) => {
  const sigma = Number(sigma_p) / 100;
  const a = Number(a_p) / 100;
  const n = Number(n_p);

  return (Math.E ** (sigma * n + (a * n ** 2) / 2)).toFixed(4);
};

const Task4_3 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Розрахунок множника нарощення для лінійної залежності">
      <Formik
        initialValues={{
          sigma: '',
          a: '',
          n: ''
        }}
        onSubmit={(values) => {
          setResult(calculate_multiplier(values.sigma, values.a, values.n));
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="sigma" label="Сила росту" placeholder="Сила росту" endAdornment="%" />
            <Box mt={2} mb={2}>
              <InputField
                name="a"
                label="Відсоткова ставка"
                placeholder="Відсоткова ставка"
                endAdornment="%"
              />
            </Box>
            <Box mt={2} mb={2}>
              <InputField name="n" label="Років" placeholder="Років" endAdornment="years" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Множник нарощення лінійної залежності: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task4_3;
