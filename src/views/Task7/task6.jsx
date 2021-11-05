import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import { useState } from 'react';

export const calc = (n, d, m, g) => {
  let t = d * (g / m) * (1 + g / m) ** (m * n);
  let f = (1 + g / m) ** (m * n) - 1;
  const Y = t / f;

  t = 1 + (g / m) ** (m * n);
  f = 1 + (g / m) ** (m * n) - 1;
  const S = (d * ((1 + g / m) ** (m * n) - (1 + g / m) ** 23)) / ((1 + g / m) ** (m * n) - 1);
  return [Y, S];
};

const Task6 = () => {
  const [result, setResult] = useState();

  return (
    <Formik
      initialValues={{
        n: '4',
        d: '200000',
        m: '12',
        g: '0.1'
      }}
      onSubmit={(values) => {
        const res = calc(Number(values.n), Number(values.d), Number(values.m), Number(values.g));

        setResult(res);
      }}
    >
      {({ handleSubmit }) => (
        <Form>
          <InputField name="n" label="Кількість років" placeholder="Кількість років" />
          <Box mt={2} mb={2}>
            <InputField name="d" label="Розмір позики" placeholder="Розмір позики" />
          </Box>
          <Box mt={2} mb={2}>
            <InputField
              name="m"
              label="кількість періодів нарахування відсотків у році"
              placeholder="кількість періодів нарахування відсотків у році"
            />
          </Box>
          <Box mt={2} mb={2}>
            <InputField
              name="g"
              label="Відсотки нарахування у фонд"
              placeholder="Відсотки нарахування у фонд"
            />
          </Box>
          <Button onClick={handleSubmit}>Submit</Button>
          {result && (
            <>
              <Box mt={2}>
                <Typography>Коефіцієнт нарощення постійної ренти: {result[0]} грн</Typography>
              </Box>
              <Box mt={2}>
                <Typography>Величину термінової виплати: {result[1]} грн</Typography>
              </Box>
              <Box mt={2}>
                <Typography>
                  Якщо контрактом передбачено капіталізацію відсотків, то термінова виплата:{' '}
                  {result[2]} грн
                </Typography>
              </Box>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};
export default Task6;
