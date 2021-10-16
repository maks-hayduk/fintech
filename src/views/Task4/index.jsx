import { useState } from 'react';
import { Box, Tabs, Tab } from '@material-ui/core';
import TabPanel from 'src/components/TabPanel';
import Task4_1 from './subtasks/1';
import Task4_2 from './subtasks/2';
import Task4_3 from './subtasks/3';
import Task4_4 from './subtasks/4';
import Task4_3_1 from './subtasks/3_1';
import Task4_3_2 from './subtasks/3_2';

const Task4 = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab label="Постійна сила росту" value={0} />
          <Tab label="Змінна сила росту" value={1} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Task4_1 />
        <Box mt={3}>
          <Task4_2 />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Task4_3 />
        <Box mt={3}>
          <Task4_4 />
        </Box>
        <Box mt={3}>
          <Task4_3_1 />
        </Box>
        <Box mt={3}>
          <Task4_3_2 />
        </Box>
      </TabPanel>
    </Box>
  );
};

export default Task4;
