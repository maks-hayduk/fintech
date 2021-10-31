import { useState } from 'react';
import { Box, Tabs, Tab } from '@material-ui/core';
import TabPanel from 'src/components/TabPanel';
import Task5_1_1 from './subtasks/5_1_1';
import Task5_1_2 from './subtasks/5_1_2';
import Task5_1_3 from './subtasks/5_1_3';
import Task5_1_4 from './subtasks/5_1_4';
import Task5_1_5 from './subtasks/5_1_5';
import Task5_1_6 from './subtasks/5_1_6';
import Task5_2_1 from './subtasks/5_2_1';
import Task5_2_2 from './subtasks/5_2_2';

const Task5 = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary">
          <Tab label="Еквівалентність відсоткових ставок" value={0} />
          <Tab
            label="Фінансова еквівалентність зобов’язань та конверсія платежів. Консолідація виплат"
            value={1}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Task5_1_1 />
        <Box mt={3}>
          <Task5_1_2 />
        </Box>
        <Box mt={3}>
          <Task5_1_3 />
        </Box>
        <Box mt={3}>
          <Task5_1_4 />
        </Box>
        <Box mt={3}>
          <Task5_1_5 />
        </Box>
        <Box mt={3}>
          <Task5_1_6 />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Task5_2_1 />
        <Box mt={3}>
          <Task5_2_2 />
        </Box>
      </TabPanel>
    </Box>
  );
};

export default Task5;
