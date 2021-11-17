import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (ic, n) => (((1 + ic) ** n - 1) / n).toFixed(4);

const Task5_1_2 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Еквівалентність простої і складної відсоткових ставок">
      <Formik
        initialValues={{
          ic: 0.01,
          n: 1
        }}
        onSubmit={(values) => {
          const res = calculate(Number(values.ic), Number(values.n));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="ic" label="Складна відсоткова ставка" placeholder="" />
            <Box mt={2}>
              <InputField name="n" label="Термін угоди" placeholder="" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Проста відсоткова ставка: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task5_1_2;
