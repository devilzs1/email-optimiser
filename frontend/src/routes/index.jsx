import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// config
import { DEFAULT_PATH } from "../config";

// layouts
import DashboardLayout from "../layouts/dashboard";
import LoadingScreen from "../components/LoadingScreen";
import CampaignLayout from "../layouts/campaign";
import EmailLayout from "../layouts/email";



const Loadable = (Component) => {
  const LoadableComponent = (props) => {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    );
  };

  // Specify the display name for the component
  LoadableComponent.displayName = `Loadable(${
    Component.displayName || Component.name || "Component"
  })`;

  return LoadableComponent;
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "content/email-templates", element: <Templates /> },
        { path: "campaigns/all-campaigns", element: <AllCampaigns /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: "/campaigns",
      element: <CampaignLayout />,
      children: [
        { path: "home", element: <CampaignHome /> },
        { path: "create-campaign", element: <CreateCampaign /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: "/email",
      element: <EmailLayout />,
      children: [
        { path: "templates", element: <EmailTemplates /> },
        { path: "templates-editor", element: <TemplateEditor /> },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);
const Templates = Loadable(
  lazy(() => import("../pages/dashboard/Templates"))
);
const EmailTemplates = Loadable(
  lazy(() => import("../pages/email/EmailTemplates"))
);
const TemplateEditor = Loadable(
  lazy(() => import("../pages/email/Editor"))
);
const CampaignHome = Loadable(
  lazy(() => import("../pages/campaign/Home"))
);
const CreateCampaign = Loadable(
  lazy(() => import("../pages/campaign/CreateCampaign"))
);
const AllCampaigns = Loadable(
  lazy(() => import("../pages/dashboard/AllCampaigns"))
);
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
