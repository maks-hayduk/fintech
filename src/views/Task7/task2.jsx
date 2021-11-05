import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import { useState } from 'react';

export const calc_s = (i, n) => ((1 + i) ** n - 1) / i;

export const ps = (d, g) => d * g;

export const R = (d, i, n) => d / calc_s(i, n);

export const wytrty = (d, g, i, n) => ps(d, g) + R(d, i, n);

const Task2 = () => {
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
        let arr_res = [];
        let d_copy = Number(values.d);
        for (let i = 4; i >= 1; i--) {
          let temp = R(d_copy, Number(values.i), i);
          arr_res.push(temp);
          d_copy -= temp;
        }

        let dict = {
          pers: ps(Number(values.d), Number(values.g)),
          vnsk: R(Number(values.d), Number(values.i), Number(values.n) - 1),
          vtr: wytrty(Number(values.d), Number(values.g), Number(values.i), Number(values.n) - 1),
          nkp: arr_res.reverse()
        };

        setResult(dict);
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

export default Task2;
