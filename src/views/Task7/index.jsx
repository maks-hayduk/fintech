import { Box } from '@material-ui/core';
import Task1 from './task1';
import Task2 from './task2';
import Task3 from './task3';
import Task6 from './task6';
import Task4 from './task4';
import Task5 from './task5';
import Task6_1 from './task6_1';

const Chapter7 = () => (
  <Box>
    <Task1 />

    <Box mt={3}>
      <Task2 />
    </Box>
    <Box mt={3}>
      <Task3 />
    </Box>
    <Box mt={3}>
      <Task4 />
    </Box>
    <Box mt={3}>
      <Task5 />
    </Box>
    <Box mt={3}>
      <Task6_1 />
    </Box>
    <Box mt={3}>
      <Task6 />
    </Box>
  </Box>
);

export default Chapter7;
