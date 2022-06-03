import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BatchesDashboard from "./views/BatchesDashboard";
import ReferencesDashBoard from "./views/ReferencesDashboard";
import OperatorsDashboard from "./views/OperatorsDashboard";
import Errors from "./views/Errors";
/*import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import ComponentsOverview from "./views/ComponentsOverview";*/

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/lotes" />
  },
  {
    path: "/referencias",
    layout: DefaultLayout,
    component: ReferencesDashBoard
  },
  {
    path: "/lotes",
    layout: DefaultLayout,
    component: BatchesDashboard
  },
  {
    path: "/operadores",
    layout: DefaultLayout,
    component: OperatorsDashboard
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  /*{
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },*/
];
