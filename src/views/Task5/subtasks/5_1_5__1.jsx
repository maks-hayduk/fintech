import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (d, m) => (((1 - d) ** (1 / m) - 1) * m).toFixed(4);

const Task5_1_5__1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Еквівалентність складної облікової та номінальної ставок">
      <Formik
        initialValues={{
          d: 0.3,
          m: 4
        }}
        onSubmit={(values) => {
          const res = calculate(Number(values.d), Number(values.m));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="d" label="Складна облікова ставка" placeholder="" />
            <Box mt={2}>
              <InputField name="m" label="Кількість нарахувань на рік" placeholder="" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Номінальна ставка: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task5_1_5__1;
