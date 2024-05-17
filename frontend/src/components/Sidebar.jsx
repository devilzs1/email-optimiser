import {
  Collapse,
  Divider,
  Stack,
  Typography,
  List,
  ListItemText,
  ListItemButton,
  IconButton,
  Drawer,
  Box,
  useMediaQuery,
  Button,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import CreateIcon from "@mui/icons-material/Create";
import { sidebar } from "../data";
import {Link} from "react-router-dom";

const drawerWidth = 250;

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState({});

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (index) => {
    setOpen({ ...open, [index]: !open[index] });
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  // Check if the screen size is medium or larger
  const isMediumScreen = useMediaQuery("(min-width:600px)");

  const drawer = (
    <>
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <IconButton
          title="Close"
          size="large"
          // sx={{ display: { xs: "block" } }}
          onClick={handleDrawerToggle}
        >
          {mobileOpen ? <CloseIcon /> : null}
        </IconButton>
      </Box>

      <Button
        variant="outlined"
        sx={{
          margin: "0 1rem",
          borderRadius: "20px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
        component={Link}
        to={`campaigns/home`}
      >
        <Stack
          direction="row"
          gap={1}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CreateIcon />
          <Typography variant="h6" sx={{ textTransform: "capitalize" }}>
            Create
          </Typography>
        </Stack>
      </Button>

      <Box my={1} />
      <Divider />

      <List sx={{ paddingLeft: "1rem" }}>
        {sidebar.map((section, index) => (
          <div key={index}>
            <ListItemButton onClick={() => handleClick(index)}>
              {section.icon}
              <Box mx={1} />
              <ListItemText
                primary={<Typography variant="h6">{section.title}</Typography>}
              />
              {section.subItems.length > 0 && (
                <>{open[index] ? <ExpandLessIcon /> : <ExpandMoreIcon />}</>
              )}
            </ListItemButton>
            <Collapse in={open[index]} timeout="auto" unmountOnExit>
              <List component="div" sx={{ paddingLeft: "1rem" }}>
                {section.subItems.map((subItem, subIndex) => (
                  <ListItemButton
                    key={subIndex}
                    component={Link}
                    to={`/${section.title
                      .replace(/\s+/g, "-")
                      .toLowerCase()}/${subItem
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                  >
                    <ListItemText
                      primary={<Typography>{subItem}</Typography>}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </>
  );

  return (
      <Stack
        sx={{
          textAlign: "center",
          width: isMediumScreen ? drawerWidth : "auto",
        }}
        p={1}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Stack>
  );
};

export default Sidebar;
