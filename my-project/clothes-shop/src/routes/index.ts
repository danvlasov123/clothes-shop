import React from "react";
import { MainPage, HelpPage } from "../views/pages";
interface IRouteDataItem {
  path?: string;
  name?: string;
  isProtected?: boolean;
  Component: React.FC;
}

export const routes: IRouteDataItem[] = [
  {
    path: "/",
    name: "Main",
    isProtected: false,
    Component: MainPage,
  },
  {
    path: "/help",
    name: "Main",
    isProtected: false,
    Component: HelpPage,
  },
];
