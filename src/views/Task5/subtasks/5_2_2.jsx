import { useState } from 'react';
import { Formik } from 'formik';
import CardWrapper from 'src/components/CardWrapper';

export const calculate_i = (S, P, t, bissextile) =>
  (((Number(S) / Number(P) - 1) / Number(t)) * Number(bissextile) * 100).toFixed(2);

export const calculate_d = (S, P, t) =>
  (((1 - Number(P) / Number(S)) / Number(t)) * 360 * 100).toFixed(2);

const Task5_2_2 = () => {
  const [setResult] = useState();

  return (
    <CardWrapper title="Визначення терміну консолідованого платежу">
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

export default Task5_2_2;
