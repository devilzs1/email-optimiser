import {
  Chip,
  Collapse,
  Divider,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  IconButton,
  Drawer,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { campaignHomeCard } from "../../data/index.jsx";
import CampaignCard from "../../components/Campaign/Card.jsx";
import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = 300;

const CampaignHome = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  // Check if the screen size is medium or larger
  const isMediumScreen = useMediaQuery("(min-width:600px)");

  const drawer = (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton title="Exit" size="large" component={Link} to={`/app`}>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton
          title="Close"
          size="large"
          // sx={{ display: { xs: "block" } }}
          onClick={handleDrawerToggle}
        >
          {mobileOpen ? <CloseIcon /> : null}
        </IconButton>
      </Box>
      <List sx={{ paddingLeft: "1rem" }}>
        <ListItem onClick={handleClick}>
          <ListItemText primary={<Typography variant="h5">Email</Typography>} />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" sx={{ paddingLeft: "1rem" }}>
            <ListItemButton>
              <ListItemText primary={<Typography>Regular Email</Typography>} />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary={<Typography>Plain Text</Typography>} />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary={<Typography>Template</Typography>} />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton>
          <ListItemText
            primary={<Typography variant="h5">Automation</Typography>}
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemText
            primary={<Typography variant="h5">Creative Assistant</Typography>}
          />
        </ListItemButton>
      </List>
    </>
  );

  return (
    <Stack direction="row">
      {/* left part */}
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

      {/* Right part */}
      <Stack
        // direction="column"
        alignItems="center"
        gap={3}
        mx={"auto"}
        sx={{
          width: "100%",
          backgroundColor: "#f6f6f4",
          textAlign: "center",
        }}
      >
        <Box mt={4} />
        <Typography variant="h2" maxWidth={625}>
          Create something that&apos;s noticeable
        </Typography>
        <Divider sx={{ width: "80%" }}>
          <Chip
            label="Based on best practices"
            sx={{ backgroundColor: "#528aae", color: "#fff" }}
          />
        </Divider>
        <Typography variant="h5">Try building one of these</Typography>
        <Stack
          gap={4}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {campaignHomeCard.map((card, index) => (
            <CampaignCard
              key={index}
              id={card.id}
              title={card.title}
              text={card.text}
              buttonText={card.buttonText}
              image={card.image}
            />
          ))}
        </Stack>
        <Box mt={1} />
      </Stack>
    </Stack>
  );
};

export default CampaignHome;
