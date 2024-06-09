import {
  Datagrid,
  DeleteWithConfirmButton,
  EditButton,
  List,
  TextField
} from 'react-admin';

function UserList() {
  return (
    <List >
      <Datagrid >
        <TextField source="name" />
        <TextField source="email" />
        <EditButton />
        <DeleteWithConfirmButton />
      </Datagrid>
    </List>
  );
}

export default UserList;
