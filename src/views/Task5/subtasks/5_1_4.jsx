import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import RadioButtonField from 'src/components/RadioButtonsField';
import CardWrapper from 'src/components/CardWrapper';

const stavkaItems = [
  {
    label: 'Складна відсоткова ставка',
    value: 'percent'
  },
  {
    label: 'Проста облікова ставка',
    value: 'oblik'
  }
];

export const calculate_i = (D, N) => ((1 - N * D) ** (-1 / N).toFixed(2) - 1).toFixed(2);

export const calculate_d = (I, N) => ((1 - (1 + I) ** -N) / N).toFixed(2);

const Task5_1_4 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Еквівалентність простої облікової і складної ставки відсотка">
      <Formik
        initialValues={{
          stavka: 'percent',
          percent: 0.0,
          n: 1.0
        }}
        onSubmit={(values) => {
          let res = 0;
          if (values.stavka === 'percent') {
            res = calculate_d(Number(values.percent) / 100, Number(values.n));
          } else {
            res = calculate_i(Number(values.percent) / 100, Number(values.n));
          }
          setResult(res);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <RadioButtonField name="stavka" label="Яка ставка" items={stavkaItems} />
            <InputField name="percent" label="Відсотки" placeholder="Відсотків" endAdornment="%" />
            <Box mt={2} mb={2}>
              <InputField name="n" label="Термін угоди" placeholder="Термін" endAdornment="роки" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Еквівалент: {result * 100}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task5_1_4;
