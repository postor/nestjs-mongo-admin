import {
  Admin,
  Resource,
  defaultDarkTheme,
  defaultLightTheme
} from 'react-admin';

import dataProvider from './dataProvider';
import AdminDashboard from './layout/Dashboard';
import { MyLayout } from './layout/MyLayout';
import userResourceProps from './users';
import postsResourceProps from './posts';

function AdminApp() {
  return (
    <Admin
      dataProvider={dataProvider}
      lightTheme={defaultLightTheme}
      darkTheme={defaultDarkTheme}
      basename={'/admin'}
      layout={MyLayout}
      dashboard={AdminDashboard}
    >
      <Resource {...userResourceProps} />
      <Resource {...postsResourceProps} />
    </Admin>
  );
}

export default AdminApp;
