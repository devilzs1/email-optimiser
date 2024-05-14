import Automation from "../assets/Automation.jpg";
import DesignEmail from "../assets/DesignEmail.jpg"
// import DashboardIcon from "@mui/icons-material/Dashboard";
import CampaignIcon from '@mui/icons-material/Campaign';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import InsightsIcon from "@mui/icons-material/Insights";
import PeopleIcon from "@mui/icons-material/People";
import FileCopyIcon from '@mui/icons-material/FileCopy';

const sidebar = [
//   {
//     id: 0,
//     icon: <DashboardIcon/>,
//     title: "Dashboard",
//     subItems: [],
//   },
  {
    id: 1,
    icon: <CampaignIcon/>,
    title: "Campaigns",
    subItems: ["All Campaigns"],
  },
  {
    id: 2,
    icon: <AutoModeIcon/>,
    title: "Automation",
    subItems: ["Overview", "All journeys", "Pre-built journeys"],
  },
  {
    id: 3,
    icon: <InsightsIcon/>,
    title: "Analytics",
    subItems: ["Marketing dashboard", "Reports", "Custom reports"],
  },
  {
    id: 4,
    icon: <PeopleIcon/>,
    title: "Audience",
    subItems: ["Audience dashboard", "All contacts", "Tags", "Segments"],
  },
  {
    id: 5,
    icon: <FileCopyIcon/>,
    title: "Content",
    subItems: ["Creative assistant", "My files", "Email templates"],
  },
];

const campaignHomeCard = [
    {
        id: 0,
        title: "Regular Email",
        text: "use our email builder to launch a campaign in minutes.",
        buttonText: "Design Email",
        image: DesignEmail,
    },
    {
        id: 1,
        title: "Automation",
        text: "Set up email automations that personalize your marketing and save you time.",
        buttonText: "Create Automation",
        image: Automation,
    },
]


const templates = [
  {
    id: 0,
    image: DesignEmail,
    name: "Start from scratch",
    saved: false,
  },
  {
    id: 1,
    image: DesignEmail,
    name: "Bold",
    saved: true,
  },
  {
    id: 2,
    image: DesignEmail,
    name: "Minimal",
    saved: false,
  },
  {
    id: 3,
    image: DesignEmail,
    name: "Simple Text",
    saved: false,
  },
  {
    id: 4,
    image: DesignEmail,
    name: "Gallery",
    saved: true,
  },
]
export {sidebar, campaignHomeCard, templates}