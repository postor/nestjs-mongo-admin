import {
  Datagrid,
  DeleteWithConfirmButton,
  EditButton,
  List,
  ReferenceField,
  TextField
} from 'react-admin';

function UserList() {
  return (
    <List >
      <Datagrid >
        <TextField source="title" />
        <ReferenceField
          source="user"
          reference="users"
          link="show" // Optional: links to user's Show view
        >
          <>
            <TextField source="name" />{' | '}<TextField source="email" />
          </>
        </ReferenceField>
        <EditButton />
        <DeleteWithConfirmButton />
      </Datagrid>
    </List>
  );
}

export default UserList;
