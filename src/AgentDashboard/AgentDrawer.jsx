import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
import LinkIcon from '@mui/icons-material/Link';


import AgentApplication from './AgentApplication';
import AgentAffiliate from './AgentAffiliate';
import AgentSetting from './AgentSetting';


const menuItems = [
    { text: "APPLICATION LIST", icon: <ListAltIcon />, key: "application", component: <AgentApplication /> },
    { text: "AFFILIATE LINK", icon: <LinkIcon />, key: "affiliate", component: <AgentAffiliate /> },
    { text: "SETTINGS", icon: <SettingsIcon />, key: "settings", component: <AgentSetting /> },
];


const drawerWidth = 260;

const AgentDrawer = (props) => {
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
    };


    const drawer = (
        <div >
            <Toolbar />
            <Link to="/"> <img src={Blacklogo} alt="" className='w-100 px-3' /></Link>

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
        <Box sx={{ display: 'flex' }} >
            <Box
                sx={{
                    width: "100%", height: "20px",
                    background: "linear-gradient(to left, #006CFF, #FFFF00)",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 1300,
                }}
            >

            </Box>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar className='bg-light' >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >

                    </IconButton>
                    <Typography noWrap component="div" className='py-4'>
                        <div>
                            <p className='text-dark m-0 pt-3 Popins-medium fs-4'> Hello, Naseer</p>
                            <p className='gray Popins-medium fs-5'> Agent - BIZLANTIC TECH LLC</p>
                        </div>


                        {selectedComponent === "application" && (
                            <div className="d-flex gap-2 mt-2">
                                <div>
                                    <span className='text-dark Popins-light'>Select City</span>
                                    <select className="form-select" style={{ minWidth: "240px", }} >
                                        <option value="1">Select City</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                                <div>
                                    <span className='text-dark Popins-light'>SELECT AGENCY TYPE</span>
                                    <select className="form-select" style={{ minWidth: "240px" }}>
                                        <option value="1">Select Request</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                                <div>
                                    <span className='text-dark Popins-light'>SELECT STATUS</span>
                                    <select className="form-select" style={{ minWidth: "240px" }}>
                                        <option value="1">Select Status</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                    </select>
                                </div>
                                <div>
                                    <button className='btn btn-primary mt-4'>Search</button>
                                </div>
                            </div>
                        )}

                    </Typography>
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
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    slotProps={{
                        root: {
                            keepMounted: true,
                        },
                    }}
                >
                    {drawer}
                </Drawer>

                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >

                <Toolbar />
                {menuItems.find(item => item.key === selectedComponent)?.component}
            </Box>
        </Box>
    );
    AdminDrawer.propTypes = {
        window: PropTypes.func,
    };
}

export default AgentDrawer;