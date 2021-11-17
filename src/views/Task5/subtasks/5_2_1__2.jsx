import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (i, Sj, tj, Sk, tk) => {
  let sum = 0;
  for (let x = 0; x < Sj.length; x++) {
    sum += Sj[x] * (1 + i) ** tj[x];
  }
  for (let x = 0; x < Sk.length; x++) {
    sum += Sk[x] / (1 + i) ** -tk[x];
  }
  return sum.toFixed(4);
};

const Task5_2_1__2 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="">
      <Formik
        initialValues={{
          i: 0.01,
          Sj: '1;1;1',
          tj: '10;20;30;',
          Sk: '1;1;1',
          tk: '10;20;30;',
          date: 20,
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

export default Task5_2_1__2;