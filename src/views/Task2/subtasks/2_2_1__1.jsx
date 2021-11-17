import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (s, i, n) => (s / (1 + i) ** n).toFixed(4);

const Task2_2_1__1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="2.2.1 Математичне дисконтування за складною відсотковою ставкою">
      <Formik
        initialValues={{
          s: 1,
          i: 0.01,
          n: 1
        }}
        onSubmit={(values) => {
          const res = calculate(Number(values.s), Number(values.i), Number(values.n));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="s" label="Нарощена сума" placeholder="" />
            <Box mt={2}>
              <InputField name="i" label="Річна ставка" placeholder="" />
            </Box>
            <Box mt={2}>
              <InputField name="n" label="Кількість років" placeholder="" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Початкова величина боргу: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task2_2_1__1;
