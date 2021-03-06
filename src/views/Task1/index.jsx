import { Box } from '@material-ui/core';
import Task1 from './task1';
import Task3 from './task3';
import Task4 from './task4';
import Task6 from './task6';
import Task7 from './task7';
import Task8 from './task8';
import Task9 from './task9';
import Task2 from './task2';

const Chapter1 = () => (
  <Box>
    <Task1 />

    <Box mt={3}>
      <Task2 />
    </Box>
    <Box mt={3}>
      <Task3 />
    </Box>
    <Box mt={3}>
      <Task6 />
    </Box>
    <Box mt={3}>
      <Task7 />
    </Box>
    <Box mt={3}>
      <Task8 />
    </Box>
    <Box mt={3}>
      <Task9 />
    </Box>
  </Box>
);

export default Chapter1;
