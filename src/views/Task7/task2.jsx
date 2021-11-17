import { Button, Box, Typography } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';
import { useState } from 'react';
import Table from '../../components/Table';
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

export const R = (d, i, n) => d / calc_s(i, n);

export const wytrty = (d, g, i, n) => ps(d, g) + R(d, i, n);

const Task2 = () => {
  const [result, setResult] = useState();
  const [rows, setRows] = useState();

  return (
    <CardWrapper title="Постійні внески у фонд(мова йтиме про ренту постнумерандо)">
      <Box mb={2}>
        <Typography>
          Продовжимо попередній приклад, взявши до уваги, що термінові виплати включають проценти, а
          інші умови зберігаються. Нехай внески у фонд надходять тільки останні чотири роки.
        </Typography>
      </Box>

      <Formik
        initialValues={{
          n: '5',
          d: '100000',
          i: '0.22',
          g: '0.2'
        }}
        onSubmit={(values) => {
          let arr_res = [];
          let d_copy = Number(values.d);
          for (let i = 4; i >= 1; i--) {
            let temp = R(d_copy, Number(values.i), i);
            arr_res.push(temp);
            d_copy -= temp;
          }
          arr_res.push(0);

          const wytrty_val = wytrty(
            Number(values.d),
            Number(values.g),
            Number(values.i),
            Number(values.n) - 1
          );
          const vnsk_val = R(Number(values.d), Number(values.i), Number(values.n) - 1);

          const wytrty_arr = [ps(Number(values.d), Number(values.g))];
          const vnsk_arr = [0];
          for (let i = 0; i < Number(values.n) - 1; i++) {
            wytrty_arr.push(wytrty_val);
            vnsk_arr.push(vnsk_val);
          }

          let dict = {
            pers: ps(Number(values.d), Number(values.g)),
            vnsk: vnsk_arr,
            vtr: wytrty_arr,
            nkp: arr_res.reverse()
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
            {result && (
              <>
                <Box mt={2}>
                  <Typography>Коефіцієнт нарощення постійної ренти: {result[0]} грн</Typography>
                </Box>
              </>
            )}
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

export default Task2;
