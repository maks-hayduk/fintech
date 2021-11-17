import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import { useState } from 'react';
import CardWrapper from '../../components/CardWrapper';
import RadioButtonField from '../../components/RadioButtonsField';
import { yearItems } from '../Task3/subtasks/const';

export const calc = (s, i, n, year) => {
  const P = (s / (1 + (n / year) * i)).toFixed(2);
  const D = (s - P).toFixed(2);
  return [P, D];
};

const Task7 = () => {
  const [result, setResult] = useState();

  return (
    <CardWrapper title="Математичне дисконтування">
      <Box mb={2}>
        <Typography>
          Банк у першому кварталі випустив депозитний сертифікат з терміном погашення вкінці цього ж
          кварталу. Сертифікат викуповується за 100грн. Оголошена прибутковість – 20% простих
          річних. Знайти ціну продажу сертифікату і величину дисконту, якщо вважати, що часова база
          становить 366.
        </Typography>
      </Box>
      <Formik
        initialValues={{
          s: '100',
          i: '0.2',
          n: '91',
          year: '365'
        }}
        onSubmit={(values) => {
          const res = calc(
            Number(values.s),
            Number(values.i),
            Number(values.n),
            Number(values.year)
          );
          setResult(res);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <RadioButtonField name="year" label="Який рік" items={yearItems} />
            <InputField
              name="s"
              label="Сертифікат викуповується"
              placeholder="Сертифікат викуповується"
            />
            <Box mt={2} mb={2}>
              <InputField
                name="i"
                label="Оголошена прибутковість"
                placeholder="Оголошена прибутковість"
              />
            </Box>
            <Box mt={2} mb={2}>
              <InputField name="n" label="Термін угоди" placeholder="Термін угоди" />
            </Box>
            <Button onClick={handleSubmit}>Submit</Button>
            {result && (
              <>
                <Box mt={2}>
                  <Typography>Ціна продажу сертифікату: {result[0]} грн</Typography>
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
export default Task7;
