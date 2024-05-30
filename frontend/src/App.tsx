import {
  Admin,
  Resource,
  defaultDarkTheme,
  defaultLightTheme
} from 'react-admin';

import dataProvider from './dataProvider';
import UserCreate from './users/UserCreate';
import UserEdit from './users/UserEdit';
import UserList from './users/UserList';

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      lightTheme={defaultLightTheme}
      darkTheme={defaultDarkTheme}
    >
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
    </Admin>
  );
}

export default App;
