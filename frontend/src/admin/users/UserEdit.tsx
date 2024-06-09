import {
  Edit,
  SimpleForm,
  TextInput,
  required
} from 'react-admin';

function UserEdit() {
  return (
    <Edit mutationMode='pessimistic'>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} fullWidth />
        <TextInput source="email" fullWidth disabled />
      </SimpleForm>
    </Edit>
  );
}

export default UserEdit;

//TODO: email