import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate_P = (S, m) => (Number(S) * Number(m)).toFixed(4);

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
            <InputField
              name="s"
              label="Боргове зобовязання"
              placeholder="Боргове зобовязання"
              endAdornment="$"
            />
            <Box mt={2} mb={2}>
              <InputField name="m" label="Множник" placeholder="Множник" />
            </Box>
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>
                  Вартість отриманої за борг суми з зміною сили росту: {result}
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
