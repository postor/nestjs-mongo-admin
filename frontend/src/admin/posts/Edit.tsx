import {
  Edit,
  SimpleForm
} from 'react-admin';
import FormContent from './FormContent';

function UserEdit() {
  return (
    <Edit mutationMode='pessimistic'>
      <SimpleForm>
        <FormContent />
      </SimpleForm>
    </Edit>
  );
}

export default UserEdit;

//TODO: email