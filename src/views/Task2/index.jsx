import { useState } from 'react';
import { Box, Tabs, Tab } from '@material-ui/core';
import TabPanel from 'src/components/TabPanel';
import Task2_1_1 from './subtasks/2_1_1';
import Task2_1_2 from './subtasks/2_1_2';
import Task2_2_1 from './subtasks/2_2_1';
import Task2_2_2 from './subtasks/2_2_2';

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
        <Task2_1_1 />
        <Box mt={3}>
          <Task2_1_2 />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Task2_2_1 />
        <Box mt={3}>
          <Task2_2_2 />
        </Box>
      </TabPanel>
    </Box>
  );
};

export default Task5;
