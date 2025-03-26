
// import * as React from 'react';
// import { useState } from "react";
// import './admin.css';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Blacklogo from '../assets/Blacklogo.png';
// import SettingsIcon from '@mui/icons-material/Settings';
// import ListAltIcon from '@mui/icons-material/ListAlt';
// //import LinkIcon from '@mui/icons-material/Link';
// import PeopleIcon from '@mui/icons-material/People';
// import PersonIcon from '@mui/icons-material/Person';
// import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
// import InboxIcon from '@mui/icons-material/Inbox';


// // Import all components that will be switched
// import AdminAgentList from './AdminAgentList';
// import AdminUserList from './AdminUserList';
// import SubscribersList from './SubscribersList';
// import AdminSettings from './AdminSettings';
// import AdminApplicationList from './AdminApplicationList';
// import Messages from './Messages';

// const menuItems = [
//   { text: "APPLICATION LIST", icon: <ListAltIcon />, key: "application", component: <AdminApplicationList /> },
//   { text: "AGENT LIST", icon: <PeopleIcon />, key: "agent", component: <AdminAgentList /> },
//   { text: "USER LIST", icon: <PersonIcon />, key: "user", component: <AdminUserList /> },
//   { text: "Messages", icon: <InboxIcon />, key: "message", component: <Messages /> },
//   { text: "SUBSCRIBERS LIST", icon: <SubscriptionsIcon />, key: "subscribe", component: <SubscribersList /> },
//   { text: "SETTINGS", icon: <SettingsIcon />, key: "settings", component: <AdminSettings /> },

// ];


// const drawerWidth = 260;
// function AdminDrawer(props) {
//   const [selectedComponent, setSelectedComponent] = useState("application");
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [isClosing, setIsClosing] = React.useState(false);
//   // const [selectedComponent, setSelectedComponent] = useState(menuItems[0].component); // Default component

//   const handleDrawerClose = () => {
//     setIsClosing(true);
//     setMobileOpen(false);
//   };

//   const handleDrawerTransitionEnd = () => {
//     setIsClosing(false);
//   };

//   const handleDrawerToggle = () => {
//     if (!isClosing) {
//       setMobileOpen(!mobileOpen);
//     }
//   };

//   const handleMenuClick = (key) => {
//     setSelectedComponent(key);
//   };


//   const drawer = (
//     <div >
//       <Toolbar />
//       <img src={Blacklogo} alt="" className='w-100 px-3' />
//       <List className='pt-4'>
//         {menuItems.map(({ text, icon, key }) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton onClick={() => handleMenuClick(key)}>
//               <ListItemIcon>{icon}</ListItemIcon>
//               <ListItemText
//                 primary={<Typography style={{ fontFamily: "Popins-light", fontWeight: 400 }}>{text}</Typography>}
//               />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }} >
//       <Box
//         sx={{
//           width: "100%", height: "20px",
//           background: "linear-gradient(to left, #006CFF, #FFFF00)",
//           position: "fixed",
//           top: 0,
//           left: 0,
//           zIndex: 1300,
//         }}
//       >

//       </Box>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar className='bg-light' >
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >

//           </IconButton>
//           <Typography noWrap component="div" className='py-4'>
//             <div>
//               <p className='text-dark m-0 pt-3 Popins-medium fs-4'> Hello, Asad Habeeb</p>
//               <p className='gray Popins-medium fs-5'> ADMIN - BIZLANTIC TECH LLC</p>
//             </div>


//             {selectedComponent === "application" && (
//               <div className="d-flex gap-2 mt-2">
//                 <div>
//                   <span className='text-dark Popins-light'>Select City</span>
//                   <select className="form-select" style={{ minWidth: "240px", }} >
//                     <option value="1">Select City</option>
//                     <option value="2">Option 2</option>
//                     <option value="3">Option 3</option>
//                   </select>
//                 </div>
//                 <div>
//                   <span className='text-dark Popins-light'>SELECT AGENCY TYPE</span>
//                   <select className="form-select" style={{ minWidth: "240px" }}>
//                     <option value="1">Select Request</option>
//                     <option value="2">Option 2</option>
//                     <option value="3">Option 3</option>
//                   </select>
//                 </div>
//                 <div>
//                   <span className='text-dark Popins-light'>SELECT STATUS</span>
//                   <select className="form-select" style={{ minWidth: "240px" }}>
//                     <option value="1">Select Status</option>
//                     <option value="2">Option 2</option>
//                     <option value="3">Option 3</option>
//                   </select>
//                 </div>
//                 <div>
//                   <button className='btn btn-primary mt-4'>Search</button>
//                 </div>
//               </div>
//             )}

//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onTransitionEnd={handleDrawerTransitionEnd}
//           onClose={handleDrawerClose}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           slotProps={{
//             root: {
//               keepMounted: true,
//             },
//           }}
//         >
//           {drawer}
//         </Drawer>

//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>

//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//       >

//         <Toolbar />
//         {menuItems.find(item => item.key === selectedComponent)?.component}
//       </Box>
//     </Box>
//   );
// }

// AdminDrawer.propTypes = {
//   window: PropTypes.func,
// };

// export default AdminDrawer;
















import * as React from 'react';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './admin.css';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Blacklogo from '../assets/Blacklogo.png';
import SettingsIcon from '@mui/icons-material/Settings';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import InboxIcon from '@mui/icons-material/Inbox';
import CloseIcon from '@mui/icons-material/Close'; // Import close icon
import GridViewIcon from '@mui/icons-material/GridView';

// Import all components that will be switched
import AdminAgentList from './AdminAgentList';
import AdminUserList from './AdminUserList';
import SubscribersList from './SubscribersList';
import AdminSettings from './AdminSettings';
import AdminApplicationList from './AdminApplicationList';
import Messages from './Messages';



























































function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}




































const menuItems = [
  { text: "APPLICATION LIST", icon: <ListAltIcon />, key: "application", component: <AdminApplicationList /> },
  { text: "AGENT LIST", icon: <PeopleIcon />, key: "agent", component: <AdminAgentList /> },
  { text: "USER LIST", icon: <PersonIcon />, key: "user", component: <AdminUserList /> },
  { text: "Messages", icon: <InboxIcon />, key: "message", component: <Messages /> },
  { text: "SUBSCRIBERS LIST", icon: <SubscriptionsIcon />, key: "subscribe", component: <SubscribersList /> },
  { text: "SETTINGS", icon: <SettingsIcon />, key: "settings", component: <AdminSettings /> },
];

const drawerWidth = 400;

function AdminDrawer(props) {



  const [modalShow, setModalShow] = React.useState(false);
  const [selectedComponent, setSelectedComponent] = useState("application");
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleMenuClick = (key) => {
    setSelectedComponent(key);
    if (mobileOpen) handleDrawerClose(); // Close drawer on mobile when item is selected
  };

  const drawer = (
    <div style={{ width: '100%' }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '8px'
      }}>
        <IconButton onClick={handleDrawerClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <img src={Blacklogo} alt="" className='w-100 px-3' />
      <List className='pt-4'>
        {menuItems.map(({ text, icon, key }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleMenuClick(key)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                primary={<Typography style={{ fontFamily: "Popins-light", fontWeight: 400 }}>{text}</Typography>}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        sx={{
          width: "100%", height: "20px",
          background: "linear-gradient(to left, #006CFF, #FFFF00)",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1300,
        }}
      />
      <CssBaseline />
      <AppBar
        position="fixed"
        // sx={{
        //   width: { sm: `calc(100% - ${drawerWidth}px)` },
        //   ml: { sm: `${drawerWidth}px` },
        // }}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          overflow: 'hidden' // Prevent scrollbar from appearing
        }}
      >
        <Toolbar className='bg-light'
          // sx={{ justifyContent: 'space-between' }}
          sx={{
            justifyContent: 'space-between',
            minHeight: '64px !important', // Ensure consistent height
            paddingRight: { xs: '12px', sm: '24px' } // Add right padding
          }}

        >
          <Typography noWrap component="div" className='py-4'>
            <div>
              <p className='text-dark m-0 pt-3 Popins-medium fs-4'> Hello, Asad Habeeb</p>
              <p className='gray Popins-medium fs-5'> ADMIN - BIZLANTIC TECH LLC</p>
            </div>
            {selectedComponent === "application" && (
              <div className="d-flex gap-2 mt-2">

                <div className='d-none d-md-block'>
                  <span className='text-dark Popins-light'>Select City</span>
                  <select className="form-select" style={{ minWidth: "240px", }} >
                    <option value="1">Select City</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                </div>
                <div className='d-none d-md-block'>
                  <span className='text-dark Popins-light'>SELECT AGENCY TYPE</span>
                  <select className="form-select" style={{ minWidth: "240px" }}>
                    <option value="1">Select Request</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                </div>
                <div className='d-none d-md-block'>
                  <span className='text-dark Popins-light'>SELECT STATUS</span>
                  <select className="form-select" style={{ minWidth: "240px" }}>
                    <option value="1">Select Status</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                </div>
                <div className='d-none d-md-block'>
                  <button className='btn btn-primary mt-4'>Search</button>
                </div>

                {/* here will remain the modal of the search buttone */}
                {/* here will remain the modal of the search buttone */}
                <Button variant="primary" onClick={() => setModalShow(true)} className='d-md-none w-100'>
                  Filter
                </Button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                {/* here will remain the modal of the search buttone */}
                {/* here will remain the modal of the search buttone */}
                {/* here will remain the modal of the search buttone */}
                {/* here will remain the modal of the search buttone */}
              </div>

            )}
          </Typography>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            // sx={{

            //   display: { lg: 'none' },
            //   color: 'black',
            //   '& .MuiSvgIcon-root': {
            //     fontSize: '6rem'
            //   }
            // }}
            sx={{
              display: { lg: 'none' },
              color: 'black',
              padding: '12px',
              marginLeft: 'auto', // Push to far right
              '& .MuiSvgIcon-root': {
                fontSize: {
                  xs: '2.5rem',
                  sm: '6rem'
                }
              }
            }}

          >
            <GridViewIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '100%', // Full width on mobile
              right: 0,
              left: 'auto'
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` }
        }}
      >
        <Toolbar />
        {menuItems.find(item => item.key === selectedComponent)?.component}
      </Box>
    </Box>
  );
}

AdminDrawer.propTypes = {
  window: PropTypes.func,
};

export default AdminDrawer;