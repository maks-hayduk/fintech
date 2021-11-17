import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate_s = (p, j, m, n) => {
  return (p * (1 + j / m) ** (n * m)).toFixed(2);
};

const Task2_1_1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="2.1.1 Номінальна ставка відсотка">
      <Formik
        initialValues={{
          p: 100000,
          j: 0.22,
          m: 4,
          n: 2.58
        }}
        onSubmit={(values) => {
          const res = calculate_s(
            Number(values.p),
            Number(values.j),
            Number(values.m),
            Number(values.n)
          );
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="p" label="Початкова величина боргу" placeholder="" />
            <Box mt={2}>
              <InputField
                name="j"
                label="Річна ставка у вигляді десяткового дробу"
                placeholder=""
              />
            </Box>
            <Box mt={2}>
              <InputField name="m" label="кількість нарахувань у році" placeholder="" />
            </Box>
            <Box mt={2}>
              <InputField name="n" label="тривалість угоди в роках" placeholder="" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>S: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task2_1_1;
