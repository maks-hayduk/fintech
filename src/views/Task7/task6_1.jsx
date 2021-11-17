import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import { useState } from 'react';
import CardWrapper from '../../components/CardWrapper';

export const calc = (d, i, g, n) => {
  const a1 = (1 - 1 / (1 + g) ** n) / g;
  const a2 = (1 - 1 / (1 + i) ** n) / i;

  const q = (1 + i) ** n;
  const w = 1 / q;
  const e = 1 - w;
  const r = e / i;

  const div = 1 - a1 / r;

  return (d * div).toFixed(2);
};

const Task6_1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Пільгові позики та кредити">
      <Box mb={2}>
        <Typography>
          Нехай кредит у сумі 1 000 000грн. видано під 3.8% річних на 10 років. В цей же час ринкова
          відсоткова ставка становить 8% річних. Визначити умовну втрату для кредитора.
        </Typography>
      </Box>

      <Formik
        initialValues={{
          d: '1000000',
          i: '0.038',
          g: '0.08',
          n: '10'
        }}
        onSubmit={(values) => {
          const res = calc(Number(values.d), Number(values.i), Number(values.g), Number(values.n));

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
              <InputField name="i" label="Річні відсотки" placeholder="Річні відсотки" />
            </Box>
            <Box mt={2} mb={2}>
              <InputField
                name="g"
                label="Ринкова відсоткова ставка"
                placeholder="Ринкова відсоткова ставка"
              />
            </Box>
            <Button onClick={handleSubmit}>Submit</Button>
            {result && (
              <>
                <Box mt={2}>
                  <Typography>Умовна втрата для кредитора: {result} грн</Typography>
                </Box>
              </>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};
export default Task6_1;
