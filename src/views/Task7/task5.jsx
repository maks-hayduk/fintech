import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import { useState } from 'react';
import Table from '../../components/Table';
import CardWrapper from '../../components/CardWrapper';

export const Y = (d, n, g) => {
  const a = (1 - 1 / (1 + g) ** 4) / g;
  return (d / a).toFixed(2);
};

export const R = (Y, g, n) => (Y / (1 + g) ** n).toFixed(2);

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
    title: 'Термінові Виплати',
    value: 'trm_vyp'
  },
  {
    title: 'Проценти',
    value: 'pers'
  },
  {
    title: 'Погашення основного боргу',
    value: 'pog_borg'
  }
];

const Task5 = () => {
  const [result, setResult] = useState();
  const [rows, setRows] = useState();

  return (
    <CardWrapper title="Погашення всього боргу однаковими терміновими виплатами">
      <Box mb={2}>
        <Typography>
          Заборгованість у 200 000 грн. потрібно виплатити за чотири роки рівними терміновими
          виплатами. Скласти план погашення заборгованості за умови, що за позику виплачується 10%
          річних, а виплати відбуваються постнумерандо.
        </Typography>
      </Box>

      <Formik
        initialValues={{
          n: '4',
          d: '200000',
          g: '0.1'
        }}
        onSubmit={(values) => {
          const term_vypl = Number(Y(Number(values.d), Number(values.n), Number(values.g)));

          const pog_borg_arr = [];
          for (let i = Number(values.n); i > 0; i--) {
            pog_borg_arr.push(R(term_vypl, Number(values.g), i));
          }

          let d_temp = Number(values.d);
          const pers_arr = [];
          const zal_arr = [Number(values.d)];
          for (let i = 0; i < Number(values.n); i++) {
            zal_arr.push(d_temp - pog_borg_arr[i]);
            pers_arr.push(d_temp * Number(values.g));
            d_temp -= pog_borg_arr[i];
          }

          const dict = {
            zal: zal_arr,
            trm_vyp: term_vypl,
            pers: pers_arr,
            pog_borg: pog_borg_arr
          };

          setResult(dict);

          const tableData = [];

          for (let i = 0; i < values.n; i += 1) {
            tableData.push({
              zal: zal_arr[i].toFixed(2),
              trm_vyp: term_vypl,
              pers: pers_arr[i],
              pog_borg: pog_borg_arr[i]
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
    </CardWrapper>
  );
};

export default Task5;
