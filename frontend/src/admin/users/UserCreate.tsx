import {
  Create,
  SimpleForm,
  TextInput,
  email,
  required
} from 'react-admin';

function UserCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} fullWidth />
        <TextInput source="email" validate={[required(), email()]} fullWidth />
      </SimpleForm>
    </Create>
  );
}

export default UserCreate;

//TODO: email