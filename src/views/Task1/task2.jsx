import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import { useState } from 'react';
import { yearItems } from '../Task3/subtasks/const';
import RadioButtonField from '../../components/RadioButtonsField';
import { type_pers } from './const';
import CardWrapper from '../../components/CardWrapper';

export const calc = (t, p, i, year, k) => {
  return p * (1 + (t / k) * i);
};

const Task2 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Методи нарахування простих відсотків">
      <Formik
        initialValues={{
          t: '258',
          year: '365',
          p: '100000',
          i: '0.25',
          k: '1'
        }}
        onSubmit={(values) => {
          const year = Number(values.year);
          let k = Number(values.k);
          if (k == 1) {
            if (year == 366) {
              k = 366;
            }
            k = 365;
          } else {
            k = 360;
          }

          const res = calc(Number(values.t), Number(values.p), Number(values.i), year, k);
          setResult(res);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <RadioButtonField name="k" label="Метод відсоткових розрахунків" items={type_pers} />
            <Box mt={2} mb={2}>
              <RadioButtonField name="year" label="Який рік" items={yearItems} />
            </Box>
            <InputField name="t" label="Кількість днів" placeholder="Кількість днів" />
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
                  <Typography>Нарощена сума: {result} грн</Typography>
                </Box>
              </>
            )}
          </Form>
        )}
      </Formik>
    </CardWrapper>
  );
};
export default Task2;
