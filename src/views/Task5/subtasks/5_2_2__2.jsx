import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (i, S0, Sk, tk) => {
  let sum = 0;
  for (let x = 0; x < Sk.length; x++) {
    sum += Sk[x] / (1 + i) ** tk[x];
  }
  return (Math.log(S0 / sum) / Math.log(1 + i)).toFixed(4);
};

const Task5_2_2__2 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="">
      <Formik
        initialValues={{
          i: 0.01,
          S0: 10000,
          Sk: '1;1;1',
          tk: '10;20;30;',
          k: 365
        }}
        onSubmit={(values) => {
          let tkvals = [];
          let Skvals = [];
          if (values.tk !== '') {
            values.tk
              .split(';')
              .map(Number)
              .forEach((elem) => {
                tkvals.push(elem / values.k);
              });
          }
          if (values.Sk !== '') {
            Skvals = values.Sk.split(';').map(Number);
          }
          let res = calculate(Number(values.i), Number(values.S0), Skvals, tkvals);
          setResult(res);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="i" label="Складна відсоткова ставка" placeholder="" />
            <Box mt={2} mb={2}>
              <InputField name="S0" label="Платіж на який заміняють" placeholder="Платежі" />
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

export default Task5_2_2__2;
