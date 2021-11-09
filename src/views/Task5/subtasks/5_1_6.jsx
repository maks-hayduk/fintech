import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import RadioButtonField from 'src/components/RadioButtonsField';
import CardWrapper from 'src/components/CardWrapper';

const stavkaItems = [
  {
    label: 'Складна номінальна ставка',
    value: 'nominal'
  },
  {
    label: 'Складна облікова ставка',
    value: 'oblik'
  }
];

export const calculate_j = (D, M) => (((1 - D) ** (1 / M).toFixed(2) - 1) * M).toFixed(2);

export const calculate_d = (J, M) => (1 - (1 + (J / M).toFixed(2) ** M)).toFixed(2);

const Task5_1_6 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Еквівалентність складної облікової та номінальної ставок">
      <Formik
        initialValues={{
          stavka: 'nominal',
          percent: 0.0,
          m: 1.0
        }}
        onSubmit={(values) => {
          let res = 0;
          if (values.stavka === 'nominal') {
            res = calculate_d((Number(values.percent) / 100).toFixed(2), Number(values.m));
          } else {
            res = calculate_j((Number(values.percent) / 100).toFixed(2), Number(values.m));
          }
          setResult(res);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <RadioButtonField name="stavka" label="Яка ставка" items={stavkaItems} />
            <InputField name="percent" label="Відсотки" placeholder="Відсотків" endAdornment="%" />
            <Box mt={2} mb={2}>
              <InputField
                name="m"
                label="Періоди нарахувань"
                placeholder="Кількість"
                endAdornment="шт на рік"
              />
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

export default Task5_1_6;
