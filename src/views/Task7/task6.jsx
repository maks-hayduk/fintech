import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import { useState } from 'react';
import CardWrapper from '../../components/CardWrapper';

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
    <CardWrapper title="Пільгові позики та кредити">
      <Box mb={2}>
        <Typography>
          За даними попереднього прикладу погашення і виплата відсотків відбувається щомісячно.
          Знайти термінову виплату і величину несплаченого основного боргу на початок 3-го року
          погашення.
        </Typography>
      </Box>
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
                label="Кількість періодів нарахування відсотків у році "
                placeholder="Кількість періодів нарахування відсотків у році "
              />
            </Box>
            <Box mt={2} mb={2}>
              <InputField name="g" label="Відсотки" placeholder="Відсотки" />
            </Box>
            <Button onClick={handleSubmit}>Submit</Button>
            {result && (
              <>
                <Box mt={2}>
                  <Typography>Термінова сплата: {result[0].toFixed(2)} грн</Typography>
                </Box>
                <Box mt={2}>
                  <Typography>
                    Величина несплаченого основного боргу: {result[1].toFixed(2)} грн
                  </Typography>
                </Box>
              </>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};
export default Task6;
