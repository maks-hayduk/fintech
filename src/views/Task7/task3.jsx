import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import InputField from 'src/components/InputField';
import Table from 'src/components/Table';
import { R } from './task2';
import CardWrapper from '../../components/CardWrapper';

const tableConfig = [
  {
    title: 'Рік',
    value: 'index'
  },
  {
    title: 'Проценти',
    value: 'pers'
  },
  {
    title: 'Внески',
    value: 'vnsk'
  },
  {
    title: 'Витрати за позикою',
    value: 'vtr'
  },
  {
    title: 'Накопичення на кінець року',
    value: 'nkp'
  }
];

export const calc_s = (i, n) => ((1 + i) ** n - 1) / i;

export const ps = (d, g) => d * g;

export const Rt = (d, i, n, a) => {
  const Rt = (1 / calc_s(i, n)) * (d - (a * ((1 + i) ** n - (1 + n * i))) / i ** 2);
  return Rt;
};

export const wytrty = (d, g, i, n) => ps(d, g) + R(d, i, n);

const Task3 = () => {
  const [result, setResult] = useState();
  const [rows, setRows] = useState();

  return (
    <CardWrapper title="Змінні внески у фонд">
      <Box mb={2}>
        <Typography>
          Нехай борг на момент його погашення становить 1 000 000 грн. Впродовж п’яти років
          формується фонд, внески в який надходять у вигляді ренти постнумерандо. Кожного разу
          внески зростають на 50 000 грн. і на них нараховують відсотки за ставкою 10% річних.
          Показати динаміку витрат за умови, що кредитору сплачується 9.5%.
        </Typography>
      </Box>

      <Formik
        initialValues={{
          n: '5',
          d: '1000000',
          a: '50000',
          i: '0.1',
          g: '0.095'
        }}
        onSubmit={(values) => {
          var rt = Rt(Number(values.d), Number(values.i), Number(values.n), Number(values.a));

          const pers = ps(Number(values.d), Number(values.g));

          let vnsk_arr = [rt];
          let vnsk = Rt(Number(values.d), Number(values.i), Number(values.n), Number(values.a));
          for (let i = 1; i < Number(values.n); i++) {
            vnsk += Number(values.a);
            vnsk_arr.push(vnsk);
          }

          let vtr_arr = [];
          for (let i = 0; i < Number(values.n); i++) {
            vtr_arr.push(pers + vnsk_arr[i]);
          }

          let arr_res = [];
          let d_copy = Number(values.d);
          let idx = 0;
          for (let i = Number(values.n); i >= 1; i--) {
            let temp = Rt(d_copy, Number(values.i), i, Number(values.a));
            if (i == Number(values.n)) arr_res.push(temp);
            else arr_res.push(temp + arr_res[idx - 1]);
            d_copy -= temp;
            idx += 1;
          }

          let dict = {
            pers: ps(Number(values.d), Number(values.g)),
            vnsk: vnsk_arr,
            vtr: vtr_arr,
            nkp: arr_res
          };

          const tableData = [];

          for (let i = 0; i < values.n; i += 1) {
            tableData.push({
              pers: dict.pers,
              vnsk: dict.vnsk[i].toFixed(2),
              vtr: dict.vtr[i].toFixed(2),
              nkp: dict.nkp[i].toFixed(2)
            });
          }

          setRows(tableData);
          setResult(dict);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <InputField name="n" label="Кількість років" placeholder="Кількість років" />
            <Box mt={2} mb={2}>
              <InputField name="d" label="Розмір позики" placeholder="Розмір позики" />
            </Box>
            <Box mt={2} mb={2}>
              <InputField name="a" label="Розмір позики" placeholder="Розмір позики" />
            </Box>
            <Box mt={2} mb={2}>
              <InputField name="i" label="Відсоткова ставка" placeholder="Відсоткова ставка" />
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

export default Task3;
