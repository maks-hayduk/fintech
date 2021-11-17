import { useState } from 'react';
import { Box, Tabs, Tab } from '@material-ui/core';
import TabPanel from 'src/components/TabPanel';
import Task2_1__1 from './subtasks/2_1__1';
import Task2_1__2 from './subtasks/2_1__2';
import Task2_1_1 from './subtasks/2_1_1';
import Task2_1_2__1 from './subtasks/2_1_2__1';
import Task2_1_2__2 from './subtasks/2_1_2__2';
import Task2_2_1__1 from './subtasks/2_2_1__1';
import Task2_2_1__2 from './subtasks/2_2_1__2';
import Task2_2_1__3 from './subtasks/2_2_1__3';
import Task2_2_2__1 from './subtasks/2_2_2__1';
import Task2_2_2__2 from './subtasks/2_2_2__2';
import Task2_2_2__3 from './subtasks/2_2_2__3';
import Task2_2_2__4 from './subtasks/2_2_2__4';
import Task2_2_2__5 from './subtasks/2_2_2__5';
import Task2_2_2__6 from './subtasks/2_2_2__6';

const Task5 = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab label="Нарощення за складними відсотковими ставками" value={0} />
          <Tab
            label="Математичне дисконтування та облік за складними ставками відсотка"
            value={1}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Task2_1__1 />
        <Box mt={3}>
          <Task2_1__2 />
        </Box>
        <Box mt={3}>
          <Task2_1_1 />
        </Box>
        <Box mt={3} labe>
          <Task2_1_2__1 />
        </Box>
        <Box mt={3}>
          <Task2_1_2__2 />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Task2_2_1__1 />
        <Box mt={3}>
          <Task2_2_1__2 />
        </Box>
        <Box mt={3}>
          <Task2_2_1__3 />
        </Box>
        <Box mt={3}>
          <Task2_2_2__1 />
        </Box>
        <Box mt={3}>
          <Task2_2_2__2 />
        </Box>
        <Box mt={3}>
          <Task2_2_2__3 />
        </Box>
        <Box mt={3}>
          <Task2_2_2__4 />
        </Box>
        <Box mt={3}>
          <Task2_2_2__5 />
        </Box>
        <Box mt={3}>
          <Task2_2_2__6 />
        </Box>
      </TabPanel>
    </Box>
  );
};

export default Task5;
