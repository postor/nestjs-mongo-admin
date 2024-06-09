import {
  Create,
  SimpleForm
} from 'react-admin';
import FormContent from './FormContent';

function UserCreate() {
  return (
    <Create>
      <SimpleForm>
        <FormContent />
      </SimpleForm>
    </Create>
  );
}

export default UserCreate;

//TODO: email