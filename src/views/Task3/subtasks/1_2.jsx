import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import RadioButtonField from 'src/components/RadioButtonsField';
import CardWrapper from 'src/components/CardWrapper';
import { yearItems, precentageItems } from './const';

export const calculate_t = (S, P, i, K) =>
  (((Number(S) / Number(P) - 1) / (Number(i) / 100)) * Number(K)).toFixed(2);

export const calculate_t_2 = (S, P, i) =>
  (((1 - Number(P) / Number(S)) / (Number(i) / 100)) * 360).toFixed(2);

const Task3_1_2 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Визначити тривалість позики у днях">
      <Formik
        initialValues={{
          year: '366',
          percentage: 'simple',
          s: 15000,
          p: 10000,
          i: 25
        }}
        onSubmit={(values) => {
          if (values.percentage === 'simple') {
            setResult(calculate_t(values.s, values.p, values.i, values.year));
          } else {
            setResult(calculate_t_2(values.s, values.p, values.i));
          }
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <RadioButtonField name="year" label="Який рік" items={yearItems} />
            <Box mt={2} mb={2}>
              <RadioButtonField name="percentage" label="Які відсотки" items={precentageItems} />
            </Box>
            <Box mt={2} mb={2}>
              <InputField
                name="p"
                label="Початкова сума боргу"
                placeholder="Початкова сума боргу"
                endAdornment="$"
                style={{
                  width: 240
                }}
              />
            </Box>
            <Box mt={2} mb={2}>
              <InputField
                name="s"
                label="Передбачення погасити"
                placeholder="Передбачення погасити"
                endAdornment="$"
                style={{
                  width: 240
                }}
              />
            </Box>
            <Box mt={2} mb={2}>
              <InputField name="i" label="Відсотків" placeholder="Відсотків" endAdornment="%" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Тривалість позики у днях: {result} днів</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task3_1_2;
