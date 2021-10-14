import { Button, Box } from '@material-ui/core';
import { Form, Formik } from 'formik';
import InputField from 'src/components/InputField';

const Task1 = () => (
  <Formik
    initialValues={{
      name: '',
      surname: ''
    }}
    onSubmit={(values) => {
      alert(`Hello ${values.name} ${values.surname}`)
    }}
  >
    {({ handleSubmit }) => (
      <Form>
        <InputField
          name="name"
          label="Name"
          placeholder="Enter name"
        />
        <Box mt={2} mb={2}>
          <InputField
            name="surname"
            label="Surname"
            placeholder="Enter surname"
          />
        </Box>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    )}
  </Formik>
);

export default Task1;
