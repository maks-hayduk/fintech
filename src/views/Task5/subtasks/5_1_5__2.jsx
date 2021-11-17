import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (j, m) => (1 - (1 + j / m) ** m).toFixed(4);

const Task5_1_5 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="">
      <Formik
        initialValues={{
          j: 0.01,
          m: 1
        }}
        onSubmit={(values) => {
          const res = calculate(Number(values.j), Number(values.m));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="j" label="Номінальна ставка" placeholder="" />
            <Box mt={2}>
              <InputField name="m" label="Кількість нарахувань на рік" placeholder="" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Складна облікова ставка: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task5_1_5;
