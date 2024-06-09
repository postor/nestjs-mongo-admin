import { AppBar } from 'react-admin';
import Typography from '@mui/material/Typography';


export const MyAppBar = (props: any) => (
  <AppBar
    position='relative'
    // sx={{
    //   // "& .RaAppBar-title": {
    //   //   flex: 1,
    //   //   textOverflow: "ellipsis",
    //   //   whiteSpace: "nowrap",
    //   //   overflow: "hidden",
    //   // },
    //   // "& .MuiToolbar-root": {
    //   //   display: 'flex',
    //   //   justifyContent: 'space-between',
    //   //   position: 'relative'
    //   // },
    //   // "& h6": {
    //   //   flex: 1,
    //   //   textAlign: 'center'
    //   // },
    //   // "& .material-icons": {
    //   //   width: 'auto',
    //   // },

    // }}
    {...props}
  >
    <Typography
      variant="h6"
      color="inherit"
      id="react-admin-title"
    />
  </AppBar>
);