import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate_P = (S, n, i) =>
  (Number(S) * Math.E ** (-1 * (Number(i) / 100) * Number(n))).toFixed(4);

const Task4_1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Обрахувати вартість отриманої за борг суми">
      <Formik
        initialValues={{
          s: '',
          n: '',
          i: ''
        }}
        onSubmit={(values) => {
          setResult(calculate_P(values.s, values.n, values.i));
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="s" label="S" placeholder="Enter S" endAdornment="$" />
            <Box mt={2} mb={2}>
              <InputField name="n" label="n" placeholder="Enter N" endAdornment="years" />
            </Box>
            <Box mt={2} mb={2}>
              <InputField name="i" label="i" placeholder="Enter I" endAdornment="%" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Cума грошей (капітал), що даються в борг: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task4_1;
