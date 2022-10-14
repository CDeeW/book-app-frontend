import Controls from '../Controls';
import { Form, useForm } from './useForm';
import { saveBookshelf } from '../../services/bookshelfService';

const initialFValues = {
  name: '',
};

const AddBookshelfForm = () => {
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialFValues);

  const validate = () => {
    const temp = {};
    temp.name = values.name.length > 0 ? '' : 'Enter a valid BookShelf Name';

    setErrors({ ...temp });

    return Object.values(temp).every((x) => x == '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      console.log('valid bookshelf');
      console.log(JSON.stringify(values));
      const response = await saveBookshelf(values);
      console.log({ response });
    } else {
      console.log(' failed');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Controls.TextInput
        variant='outlined'
        name='name'
        label='Name'
        type='name'
        // TODO is value set to values.name? or is values.name set to value? e.g. we type in and this changes the value
        value={values.name}
        onChange={handleInputChange}
        error={errors.name}
      />
      <Controls.Button
        text='Add Bookshelf'
        type='submit'
        onClick={handleSubmit}
      />
    </Form>
  );
};

export default AddBookshelfForm;
