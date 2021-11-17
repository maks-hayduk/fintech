import { useState } from 'react';
import { Box, Tabs, Tab } from '@material-ui/core';
import TabPanel from 'src/components/TabPanel';
import Task5_1_1__1 from './subtasks/5_1_1__1';
import Task5_1_1__2 from './subtasks/5_1_1__2';
import Task5_1_1__3 from './subtasks/5_1_1__3';
import Task5_1_1__4 from './subtasks/5_1_1__4';
import Task5_1_2__1 from './subtasks/5_1_2__1';
import Task5_1_2__2 from './subtasks/5_1_2__2';
import Task5_1_3__1 from './subtasks/5_1_3__1';
import Task5_1_3__2 from './subtasks/5_1_3__2';
import Task5_1_3__3 from './subtasks/5_1_3__3';
import Task5_1_3__4 from './subtasks/5_1_3__4';
import Task5_1_4__1 from './subtasks/5_1_4__1';
import Task5_1_4__2 from './subtasks/5_1_4__2';
import Task5_1_5__1 from './subtasks/5_1_5__1';
import Task5_1_5__2 from './subtasks/5_1_5__2';
import Task5_2_1__1 from './subtasks/5_2_1__1';
import Task5_2_1__2 from './subtasks/5_2_1__2';
import Task5_2_2__1 from './subtasks/5_2_2__1';
import Task5_2_2__2 from './subtasks/5_2_2__2';

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
        <Task5_1_1__1 />
        <Box mt={3}>
          <Task5_1_1__2 />
        </Box>
        <Box mt={3}>
          <Task5_1_1__3 />
        </Box>
        <Box mt={3}>
          <Task5_1_1__4 />
        </Box>
        <Box mt={3}>
          <Task5_1_2__1 />
        </Box>
        <Box mt={3}>
          <Task5_1_2__2 />
        </Box>
        <Box mt={3}>
          <Task5_1_3__1 />
        </Box>
        <Box mt={3}>
          <Task5_1_3__2 />
        </Box>
        <Box mt={3}>
          <Task5_1_3__3 />
        </Box>
        <Box mt={3}>
          <Task5_1_3__4 />
        </Box>
        <Box mt={3}>
          <Task5_1_4__1 />
        </Box>
        <Box mt={3}>
          <Task5_1_4__2 />
        </Box>
        <Box mt={3}>
          <Task5_1_5__1 />
        </Box>
        <Box mt={3}>
          <Task5_1_5__2 />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Task5_2_1__1 />
        <Box mt={3}>
          <Task5_2_1__2 />
        </Box>
        <Box mt={3}>
          <Task5_2_2__1 />
        </Box>
        <Box mt={3}>
          <Task5_2_2__2 />
        </Box>
      </TabPanel>
    </Box>
  );
};

export default Task5;
