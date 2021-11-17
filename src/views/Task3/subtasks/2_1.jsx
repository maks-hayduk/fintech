import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import RadioButtonField from 'src/components/RadioButtonsField';
import CardWrapper from 'src/components/CardWrapper';
import { precentageItems } from './const';

export const calculate_n = (S, P, i, m) =>
  (Math.log(Number(S) / Number(P)) / (m * Math.log(1 + Number(i) / 100 / Number(m)))).toFixed(2);

export const calculate_n_2 = (S, P, i, m) =>
  (Math.log(Number(P) / Number(S)) / (m * Math.log(1 - Number(i) / 100 / Number(m)))).toFixed(2);

const Task3_2_1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Визначити за який час сума зросте з значення Х до значення Y">
      <Formik
        initialValues={{
          percentage: 'simple',
          s: 30000,
          p: 10000,
          i: 15,
          m: 1
        }}
        onSubmit={(values) => {
          if (values.percentage === 'simple') {
            setResult(calculate_n(values.s, values.p, values.i, values.m));
          } else {
            setResult(calculate_n_2(values.s, values.p, values.i, values.m));
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
              <InputField
                name="i"
                label="Ставка у відсотках"
                placeholder="Ставка у відсотках"
                endAdornment="%"
              />
            </Box>
            <Box mt={2} mb={2}>
              <InputField name="m" label="Років" placeholder="Років" endAdornment="years" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Сума зросте за: {result} року</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task3_2_1;
