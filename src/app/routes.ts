import { createBrowserRouter } from "react-router";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { ClientProfile } from "./pages/ClientProfile";
import { MarketVolatility } from "./pages/MarketVolatility";
import { BehavioralAssessment } from "./pages/BehavioralAssessment";
import { CoachingRecommendations } from "./pages/CoachingRecommendations";
import { ReportingDashboard } from "./pages/ReportingDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/client/:id",
    Component: ClientProfile,
  },
  {
    path: "/market-volatility/:id",
    Component: MarketVolatility,
  },
  {
    path: "/assessment/:id",
    Component: BehavioralAssessment,
  },
  {
    path: "/coaching/:id",
    Component: CoachingRecommendations,
  },
  {
    path: "/reporting",
    Component: ReportingDashboard,
  },
]);
