import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import RadioButtonField from 'src/components/RadioButtonsField';
import CardWrapper from 'src/components/CardWrapper';
import { yearItems } from './const';

export const calculate_i = (S, P, t, bissextile) =>
  (((Number(S) / Number(P) - 1) / Number(t)) * Number(bissextile) * 100).toFixed(2);

export const calculate_d = (S, P, t) =>
  (((1 - Number(P) / Number(S)) / Number(t)) * 360 * 100).toFixed(2);

const Task3_1_1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Визначити прибутковість операції для кредитора у простій відсотковій і обліковій ставці">
      <Formik
        initialValues={{
          year: '366',
          s: 120000,
          p: 100000,
          t: 150
        }}
        onSubmit={(values) => {
          const i = calculate_i(values.s, values.p, values.t, values.year);
          const d = calculate_d(values.s, values.p, values.t);

          setResult([i, d]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <RadioButtonField name="year" label="Який рік" items={yearItems} />
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
              <InputField name="t" label="Днів" placeholder="Днів" endAdornment="days" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <>
                <Box mt={2}>
                  <Typography>Проста відсоткова ставка: {result[0]} %</Typography>
                </Box>
                <Box mt={2}>
                  <Typography>Складна облікова ставка: {result[1]} %</Typography>
                </Box>
              </>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task3_1_1;
