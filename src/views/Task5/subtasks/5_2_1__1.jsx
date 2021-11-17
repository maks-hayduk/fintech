import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (i, Sj, tj, Sk, tk) => {
  let sum = 0;
  for (let x = 0; x < Sj.length; x++) {
    sum += Sj[x] * (1 + tj[x] * i);
  }
  for (let x = 0; x < Sk.length; x++) {
    sum += Sk[x] / (1 + tk[x] * i);
  }
  return sum.toFixed(2);
};

const Task5_2_1__1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="5.6 Визначення розміру консолідованого платежу">
      <Formik
        initialValues={{
          i: 0.365,
          Sj: '10000;20000',
          tj: '135;166',
          Sk: '22800',
          tk: '227',
          date: 213,
          k: 365
        }}
        onSubmit={(values) => {
          let tjvals = [];
          let tkvals = [];
          let Sjvals = [];
          let Skvals = [];
          if (values.tj !== '') {
            values.tj
              .split(';')
              .map(Number)
              .forEach((elem) => {
                tjvals.push((values.date - elem) / values.k);
              });
          }
          if (values.tk !== '') {
            values.tk
              .split(';')
              .map(Number)
              .forEach((elem) => {
                tkvals.push((elem - values.date) / values.k);
              });
          }
          if (values.Sj !== '') {
            Sjvals = values.Sj.split(';').map(Number);
          }
          if (values.Sk !== '') {
            Skvals = values.Sk.split(';').map(Number);
          }
          let res = calculate(Number(values.i), Sjvals, tjvals, Skvals, tkvals);
          setResult(res);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="i" label="Проста відсоткова ставка" placeholder="" />
            <Box mt={2} mb={2}>
              <InputField name="Sj" label="Платежі" placeholder="Платежі" />
            </Box>
            <Box mt={2} mb={2}>
              <InputField
                name="tj"
                label="Дата платежів до дня консолідації в днях"
                placeholder="День року"
              />
            </Box>
            <Box mt={2} mb={2}>
              <InputField name="Sk" label="Платежі" placeholder="Платежі" />
            </Box>
            <Box mt={2} mb={2}>
              <InputField
                name="tk"
                label="Дати платежів після дня консолідації в днях"
                placeholder="День року"
              />
            </Box>
            <Box mt={2} mb={2}>
              <InputField name="date" label="День консолідації" placeholder="День року" />
            </Box>
            <Box mt={2} mb={2}>
              <InputField name="k" label="Кількість днів у році" placeholder="Днів" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Розмір консолідованого платежу: {result} </Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task5_2_1__1;
