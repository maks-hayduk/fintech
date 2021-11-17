import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (f, m) => (1 - (1 - f / m) ** m).toFixed(4);

const Task2_2_2__3 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="">
      <Formik
        initialValues={{
          f: 0.2,
          m: 4
        }}
        onSubmit={(values) => {
          const res = calculate(Number(values.f), Number(values.m));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="f" label="Номінальна річна облікова ставка" placeholder="" />
            <Box mt={2}>
              <InputField name="m" label="Кількість нарахувань у році" placeholder="" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Ефективна облікова ставка: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task2_2_2__3;
