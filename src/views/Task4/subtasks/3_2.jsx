import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate_P = (S, m) => Number(S) * Number(m);

const Task4_3_2 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Обрахувати вартість отриманої за борг суми з зміною сили росту">
      <Formik
        initialValues={{
          s: '',
          m: ''
        }}
        onSubmit={(values) => {
          setResult(calculate_P(values.s, values.m));
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="s" label="S" placeholder="Enter S" endAdornment="$" />
            <Box mt={2} mb={2}>
              <InputField name="m" label="Multiplier" placeholder="Enter multiplier" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>
                  Вартість отриманої за борг суми з зміною сили росту: {result.toFixed(2)}
                </Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task4_3_2;
