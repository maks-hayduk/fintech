import { Button, Box, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import CardWrapper from 'src/components/CardWrapper';

export const calculate = (d) => (d / (1 - d)).toFixed(4);

const Task5_1_4__1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Еквівалентність складної облікової та відсоткової ставок">
      <Formik
        initialValues={{
          d: 0.3
        }}
        onSubmit={(values) => {
          const res = calculate(Number(values.d));
          setResult([res]);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="d" label="Складна облікова ставка" placeholder="" />
            <Button onClick={handleSubmit}>Calculate</Button>
            {result && (
              <Box mt={2}>
                <Typography>Проста облікова ставка: {result}</Typography>
              </Box>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};

export default Task5_1_4__1;
