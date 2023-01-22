import { Admin, defaultTheme, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { createTheme } from '@mui/material/styles';
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { PostCreate, PostEdit, PostList } from './posts';
import { Dashboard } from './Dashboard';
import { authProvider } from './authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// react-adminとMUIのテーマを結合
const muiDefaultTheme = createTheme();
export const theme = { ...defaultTheme, ...muiDefaultTheme };

const App = () => {
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}>
      <Resource name="users" list={UserList} icon={UserIcon} recordRepresentation="name" />
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    </Admin>
  );
};

export default App;
