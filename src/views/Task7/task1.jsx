import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import { useState } from 'react';

export const calc_s = (i, n) => ((1 + i) ** n - 1) / i;

export const calc = (d, g, i, n) => {
  const s_coef = calc_s(i, n);

  const Y = d * g + d / s_coef;

  return [s_coef, Y];
};

export const calc_cap = (d, g, i, n) => {
  const s_coef = calc_s(i, n);

  const Y = ((d * (1 + g) ** n) / s_coef).toFixed(2);

  return [Y];
};

const Task1 = () => {
  const [result, setResult] = useState();

  return (
    <Formik
      initialValues={{
        n: '5',
        d: '100000',
        i: '0.22',
        g: '0.2'
      }}
      onSubmit={(values) => {
        const res = calc(Number(values.d), Number(values.g), Number(values.i), Number(values.n));
        const res_cap = calc_cap(
          Number(values.d),
          Number(values.g),
          Number(values.i),
          Number(values.n)
        );
        let s = res.concat(res_cap);
        setResult(res.concat(res_cap));
      }}
    >
      {({ handleSubmit }) => (
        <Form>
          <InputField name="n" label="Кількість років" placeholder="Кількість років" />
          <Box mt={2} mb={2}>
            <InputField name="d" label="Розмір позики" placeholder="Розмір позики" />
          </Box>
          <Box mt={2} mb={2}>
            <InputField name="i" label="Відсоткова ставка" placeholder="Відсоткова ставка" />
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
export default Task1;
