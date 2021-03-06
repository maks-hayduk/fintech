import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import { useState } from 'react';
import CardWrapper from '../../components/CardWrapper';

export const calc = (n, p, i) => {
  const I = n * p * i;
  const S = p + I;
  return [I, S];
};

const Task1 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Нарощення за простими відсотковими ставками">
      <Box mb={2}>
        <Typography>
          Банк надав клієнту позику P грн. на N років за ставкою i % простих річних. Визначити
          проценти та нарощену на кінець терміну суму.
        </Typography>
      </Box>
      <Formik
        initialValues={{
          n: '5',
          p: '100000',
          i: '0.25'
        }}
        onSubmit={(values) => {
          const res = calc(Number(values.n), Number(values.p), Number(values.i));
          setResult(res);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="n" label="Кількість років" placeholder="Кількість років" />
            <Box mt={2} mb={2}>
              <InputField name="p" label="Розмір позики" placeholder="Розмір позики" />
            </Box>
            <Box mt={2} mb={2}>
              <InputField name="i" label="Відсоткова ставка" placeholder="Відсоткова ставка" />
            </Box>
            <Button onClick={handleSubmit}>Submit</Button>
            {result && (
              <>
                <Box mt={2}>
                  <Typography>Сума процентів: {result[0]} грн</Typography>
                </Box>
                <Box mt={2}>
                  <Typography>Нарощена на кінець теми сума: {result[1]} грн</Typography>
                </Box>
              </>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};
export default Task1;
