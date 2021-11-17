import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import { useState } from 'react';
import CardWrapper from '../../components/CardWrapper';

export const calc = (s, d, t, k) => {
  const P = s * (1 - (t / k) * d);
  const D = (s - P).toFixed(2);
  return [P, D];
};

const Task9 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Банківський облік">
      <Box mb={2}>
        <Typography>
          Вексель номінальною вартістю 2 500 грн. облікований у банку за 30днів до його терміну
          погашення за обліковою ставкою 20%. Знайти суму отриману векселетримачем та величину
          дисконту.
        </Typography>
      </Box>
      <Formik
        initialValues={{
          s: '2500',
          d: '0.2',
          t: '30',
          k: '360'
        }}
        onSubmit={(values) => {
          const res = calc(Number(values.s), Number(values.d), Number(values.t), Number(values.k));
          setResult(res);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField
              name="s"
              label="Вексель номінальною вартістю"
              placeholder="Вексель номінальною вартістю"
            />
            <Box mt={2} mb={2}>
              <InputField name="d" label="Облікова ставка" placeholder="Облікова ставка" />
            </Box>
            <Box mt={2} mb={2}>
              <InputField name="t" label="Термін угоди" placeholder="Термін угоди" />
            </Box>
            <Button onClick={handleSubmit}>Submit</Button>
            {result && (
              <>
                <Box mt={2}>
                  <Typography>Сума отриманих грошей: {result[0].toFixed(2)} грн</Typography>
                </Box>
                <Box mt={2}>
                  <Typography>Величина дисконту: {result[1]} грн</Typography>
                </Box>
              </>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};
export default Task9;
