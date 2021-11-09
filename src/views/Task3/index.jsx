import { useState } from 'react';
import { Box, Tabs, Tab } from '@material-ui/core';
import TabPanel from 'src/components/TabPanel';
import Task3_1_1 from './subtasks/1_1';
import Task3_1_2 from './subtasks/1_2';
import Task3_2_1 from './subtasks/2_1';
import Task3_2_2 from './subtasks/2_2';

const Task3 = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab label="Фінансові угоди з простими ставками" value={0} />
          <Tab label="Фінансові угоди з складними ставками" value={1} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Task3_1_1 />
        <Box mt={3}>
          <Task3_1_2 />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Task3_2_1 />
        <Box mt={3}>
          <Task3_2_2 />
        </Box>
      </TabPanel>
    </Box>
  );
};

export default Task3;
