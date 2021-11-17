import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import RadioButtonField from 'src/components/RadioButtonsField';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';
import { precentageItems } from './const';

export const calculate_n = (S, P, n) =>
  (((Number(S) / Number(P)) ** (1 / Number(n)) - 1) * 100).toFixed(2);

export const calculate_n_2 = (S, P, n) =>
  ((1 - (Number(P) / Number(S)) ** (1 / Number(n))) * 100).toFixed(2);

const Task3_2_2 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Визначити відсоткові ставки">
      <Formik
        initialValues={{
          percentage: 'simple',
          s: 1500,
          p: 1000,
          n: 3
        }}
        onSubmit={(values) => {
          if (values.percentage === 'simple') {
            setResult(calculate_n(values.s, values.p, values.n));
          } else {
            setResult(calculate_n_2(values.s, values.p, values.n));
          }
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <RadioButtonField name="percentage" label="Які відсотки" items={precentageItems} />
            <Box mt={2} mb={2}>
              <InputField
                name="p"
                label="Початкова сума"
                placeholder="Початкова сума"
                endAdornment="$"
              />
            </Box>
            <Box mt={2} mb={2}>
              <InputField
                name="s"
                label="Кінцева сума"
                placeholder="Кінцева сума"
                endAdornment="$"
              />
            </Box>
            <Box mt={2} mb={2}>
              <InputField name="n" label="Років" placeholder="Років" endAdornment="years" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Результат: {result} %</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task3_2_2;
