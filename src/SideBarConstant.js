import React from "react";
import {
  FiSearch,
  FiInbox,
  FiFileText,
  FiLayers,
  FiSettings,
  FiGithub,
  FiTruck,
  FiPieChart,
  FiLoader,
  FiShoppingBag
} from "react-icons/fi";
export const sideBarData = [
  {
    title: "Search",
    icon: <FiSearch />
  },
  {
    title: "Inbox",
    icon: <FiInbox />
  },
  {
    title: "Create Doc",
    icon: <FiFileText />
  },
  {
    title: "All Doc",
    icon: <FiLayers />
  },
  {
    title: "Settings",
    icon: <FiSettings />
  }
];

export const starredList = [
  {
    title: "Roadmap Tech",
    icon: <FiTruck />
  },
  {
    title: "FeedBack 2.0",
    icon: <FiPieChart />
  },
  {
    title: "Paint Points",
    icon: <FiShoppingBag />
  },
  {
    title: "New UI",
    icon: <FiLoader />
  },
  {
    title: "Github Feedback",
    icon: <FiGithub />
  }
];
