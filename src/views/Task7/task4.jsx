import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import { useState } from 'react';
import Table from '../../components/Table';

export const d = (D, n) => (D / n).toFixed(2);

export const dg = (D, g) => D * g;

export const persents = (D, g, n) => (D - d(D, n)) * g;

const tableConfig = [
  {
    title: 'Рік',
    value: 'index'
  },
  {
    title: 'Залишок боргу на початок року',
    value: 'zal'
  },
  {
    title: 'Витрати за позикою',
    value: 'vtr'
  },
  {
    title: 'Виплати боргу',
    value: 'vypl'
  },
  {
    title: 'Проценти',
    value: 'pers'
  }
];

const Task4 = () => {
  const [result, setResult] = useState();
  const [rows, setRows] = useState();

  return (
    <Formik
      initialValues={{
        n: '5',
        d: '1000000',
        g: '0.1'
      }}
      onSubmit={(values) => {
        const vyp_borg = Number(d(Number(values.d), Number(values.n)));

        const zal_arr = [];
        let d_temp = Number(values.d);
        for (let i = 0; i < Number(values.n); i++) {
          zal_arr.push(d_temp);
          d_temp -= vyp_borg;
        }

        const pers = [];
        for (let i = 0; i < Number(values.n); i++) {
          pers.push((Number(values.d) - i * vyp_borg) * Number(values.g));
        }

        const vytr_arr = [];
        for (let i = 0; i < Number(values.n); i++) {
          vytr_arr.push(pers[i] + vyp_borg);
        }

        const dict = {
          zal: zal_arr,
          vtr: vytr_arr,
          vypl: vyp_borg,
          pers: pers
        };

        setResult(dict);

        const tableData = [];

        for (let i = 0; i < values.n; i += 1) {
          tableData.push({
            zal: zal_arr[i],
            vtr: vytr_arr[i],
            vypl: vyp_borg,
            pers: pers[i]
          });
        }

        setRows(tableData);
      }}
    >
      {({ handleSubmit }) => (
        <Form>
          <InputField name="n" label="Кількість років" placeholder="Кількість років" />
          <Box mt={2} mb={2}>
            <InputField name="d" label="Розмір позики" placeholder="Розмір позики" />
          </Box>
          <Box mt={2} mb={2}>
            <InputField
              name="g"
              label="Відсотки нарахування у фонд"
              placeholder="Відсотки нарахування у фонд"
            />
          </Box>
          <Button onClick={handleSubmit}>Submit</Button>
          {rows && (
            <Box mt={2} mb={2}>
              <Table rows={rows} tableConfig={tableConfig} />
            </Box>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default Task4;
