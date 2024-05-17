import {
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
//   useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import { templates } from "../../data";
import TemplateCard from "../../components/TemplateCard";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 1.5;
  padding: 8px 12px;
  margin: 6px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)`
  width: 100%;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${blue[500]};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.4)" : "rgba(0,0,0, 0.2)"
  };
  `
);


const Templates = () => {
//   const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Stack gap={1} p={4}>
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography variant="h2">Select a template</Typography>
        <IconButton
          title="Close"
          size="large"
          component={Link}
          to={`/content/email-templates`}
        >
          <CloseIcon />
        </IconButton>
      </Stack>
      <Divider />
      <Tabs defaultValue={1}>
        <TabsList>
          <Tab value={1}>Templates</Tab>
          <Tab value={2}>Saved templates</Tab>
          <Tab value={3}>Recent emails</Tab>
          <Tab value={4}>Code your own</Tab>
        </TabsList>
        <TabPanel value={1}>
          <Grid container spacing={2} sx={{ width: "80%", margin: "auto" }}>
            {templates.map((template, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <TemplateCard
                  name={template.name}
                  image={template.image}
                  html={""}
                  id={template.id}
                />
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={2}>
          <Grid container spacing={2} sx={{ width: "80%", margin: "auto" }}>
            {templates.map(
              (template, index) =>
                template.saved && (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <TemplateCard
                      name={template.name}
                      image={template.image}
                      html={""}
                      id={template.id}
                    />
                  </Grid>
                )
            )}
          </Grid>
        </TabPanel>

        <TabPanel value={3}>Recent emails</TabPanel>
        <TabPanel value={4}>Code your own</TabPanel>
      </Tabs>
    </Stack>
  );
};

export default Templates;
