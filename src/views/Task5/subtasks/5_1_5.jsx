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
    label: 'Складна облікова ставка',
    value: 'oblik'
  }
];

export const calculate_i = (D) => (Number(D) / 100 / (1 - Number(D) / 100)).toFixed(2);

export const calculate_d = (I) => (Number(I) / 100 / (1 + Number(I) / 100)).toFixed(2);

const Task5_1_5 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Еквівалентність складної облікової та відсоткової ставок">
      <Formik
        initialValues={{
          stavka: 'percent',
          percent: 0.0
        }}
        onSubmit={(values) => {
          let res = 0;
          if (values.stavka === 'percent') {
            res = calculate_d(values.percent);
          } else {
            res = calculate_i(values.percent);
          }
          setResult(res);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <RadioButtonField name="stavka" label="Яка ставка" items={stavkaItems} />
            <InputField name="percent" label="Відсотки" placeholder="Відсотків" endAdornment="%" />
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

export default Task5_1_5;
