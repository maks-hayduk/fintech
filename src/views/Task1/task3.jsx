import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import { useState } from 'react';
import CardWrapper from '../../components/CardWrapper';

export const calc = (p, i_1, i_2, i_3, i_4) => {
  const mn = 1 + 0.25 * i_1 + 0.25 * i_2 + 0.25 * i_3 + 0.25 * i_4;
  const S = p * mn;
  return [mn, S];
};

const Task3 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper>
      <Box mb={2}>
        <Typography>
          Фінансовою угодою передбачено такі умови нарахування простих відсотків на депозит: перший
          квартал – 15% річних, кожний наступний квартал ставка зростає на 5%. Визначити множник
          нарощення та нарощену за один рік суму, якщо початковий вклад становив 10 000 грн
        </Typography>
      </Box>
      <Formik
        initialValues={{
          p: '10000',
          i_1: '0.15',
          i_2: '0.20',
          i_3: '0.25',
          i_4: '0.3'
        }}
        onSubmit={(values) => {
          const res = calc(
            Number(values.p),
            Number(values.i_1),
            Number(values.i_2),
            Number(values.i_3),
            Number(values.i_4)
          );
          setResult(res);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="p" label="Розмір позики" placeholder="Розмір позики" />
            <Box mt={2} mb={2}>
              <InputField
                name="i_1"
                label="Відсткова ставка за перший квартал"
                placeholder="Відсткова ставка за перший квартал"
              />
            </Box>
            <Box mt={2} mb={2}>
              <InputField
                name="i_2"
                label="Відсткова ставка за другий квартал"
                placeholder="Відсткова ставка за другий квартал"
              />
            </Box>
            <Box mt={2} mb={2}>
              <InputField
                name="i_3"
                label="Відсткова ставка за третій квартал"
                placeholder="Відсткова ставка за третій квартал"
              />
            </Box>
            <Box mt={2} mb={2}>
              <InputField
                name="i_4"
                label="Відсткова ставка за четвертий квартал"
                placeholder="Відсткова ставка за четвертий квартал"
              />
            </Box>
            <Button onClick={handleSubmit}>Submit</Button>
            {result && (
              <>
                <Box mt={2}>
                  <Typography>Множник нарощення: {result[0]} грн</Typography>
                </Box>
                <Box mt={2}>
                  <Typography>Накопичена на рахунку за рік сума: {result[1]} грн</Typography>
                </Box>
              </>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};
export default Task3;
