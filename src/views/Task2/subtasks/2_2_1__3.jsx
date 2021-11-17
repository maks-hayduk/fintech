import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (n, m, j) => (1 / (1 + j / m) ** (m * n)).toFixed(4);

const Task2_2_1__3 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Дисконтний множник">
      <Formik
        initialValues={{
          n: 4,
          m: 4,
          j: 0.3
        }}
        onSubmit={(values) => {
          const res = calculate(Number(values.n), Number(values.m), Number(values.j));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="n" label="Кількість років" placeholder="" />
            <Box mt={2}>
              <InputField name="m" label="кількість нарахувань у році" placeholder="" />
            </Box>
            <Box mt={2}>
              <InputField name="j" label="номінальна відсоткова ставка" placeholder="" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Дисконтний множник: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task2_2_1__3;
