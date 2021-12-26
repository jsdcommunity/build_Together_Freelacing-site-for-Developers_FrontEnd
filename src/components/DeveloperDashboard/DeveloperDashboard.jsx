import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge, Button, Grid,Menu,MenuItem } from '@mui/material';



import DeveloperChartsSection from '../DeveloperChartSection/DeveloperChartsSection';
import DeveloperProposals from "../DeveloperProposals/DeveloperProposals" ;
import DeveloperOrders from '../DeveloperOrders/DeveloperOrders';
import DeveloperProfile from '../DeveloperProfile/DeveloperProfile';



const drawerWidth = 250;

const drawerListItems = [ 
  {
    listText:"Dashborad",
    listIcon:<DashboardIcon />
  },
  {
    listText:"Orders",
    listIcon:<ShoppingCartIcon />
  },
  {
    listText:"Proposals",
    listIcon:<EmailIcon />
  },
  {
    listText:"Profile",
    listIcon:<ManageAccountsIcon />
  }
]


function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  // drawer list items.... 

  const drawer = (
    <div>
      <ListItem sx={{p:2}}>
            <ListItemIcon>
            <Badge color="success" overlap="circular" badgeContent=" " variant="dot">
      
            <Avatar sx={{border:"#109CF1 2px solid"}} alt="UPBIT User" src="assets/hero-man.png" />
      </Badge>
            </ListItemIcon>
            
            <Typography variant="h6">username</Typography>
       </ListItem>
     
      <Divider />
      <List sx={{pb:"100px"}}>
        {drawerListItems.map((item, index) => (
          <ListItem sx={{my:1}} button key={item}>
            <ListItemIcon sx={{p:1}}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText primary={item.listText} />
          </ListItem>
        ))}
      </List>
      
      <Divider />
    </div>
  );

// drawer list items ends here...



  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' , pb:"100px"}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)`},
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid  container
            direction="row"
            justifyContent="flex-end" 
            alignItems="center"
            spacing={5}
          >
            <Grid item >
            <Button variant="text">
                <Badge badgeContent={5} color="success">
                  <NotificationsNoneIcon fontSize="medium" color="action"/>
                </Badge>
            </Button>
            </Grid>
            <Grid item>
                <Avatar  onClick={handleClick} sx={{border:"#109CF1 2px solid",cursor:"pointer"}}  alt="UPBIT User" src="assets/hero-man.png" />
            </Grid>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
          </Grid>
          
        </Toolbar>
        
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >

      {/* Drawer in mobile view  */}

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        


     {/* Drawer in desktop mode */}

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth ,height:"fit-content" },
           
          }}
          open
        >
          {drawer}
        </Drawer>
        
      </Box>


      <Box
        component="main"
        sx={{ flexGrow: 1, px:2 ,mt:-7, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

          
{/* page routing here...... */}

        <Typography paragraph>
             <DeveloperProfile />
        </Typography> 
      </Box>


    </Box>
  );
}

export default ResponsiveDrawer;
