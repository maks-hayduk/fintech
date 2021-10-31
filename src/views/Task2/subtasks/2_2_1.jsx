import { useState } from 'react';
import { Formik } from 'formik';
import CardWrapper from 'src/components/CardWrapper';

export const calculate_i = (S, P, t, bissextile) =>
  (((Number(S) / Number(P) - 1) / Number(t)) * Number(bissextile) * 100).toFixed(2);

export const calculate_d = (S, P, t) =>
  (((1 - Number(P) / Number(S)) / Number(t)) * 360 * 100).toFixed(2);

const Task2_2_1 = () => {
  const [setResult] = useState();

  return (
    <CardWrapper title="Математичне дисконтування за складною відсотковою ставкою">
      <Formik
        initialValues={{
          year: '366',
          s: '',
          p: '',
          t: ''
        }}
        onSubmit={(values) => {
          const i = calculate_i(values.s, values.p, values.t, values.year);
          const d = calculate_d(values.s, values.p, values.t);

          setResult([i, d]);
        }}
      />
    </CardWrapper>
  );
};

export default Task2_2_1;
