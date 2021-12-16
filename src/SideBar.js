import React, { useState } from "react";
import { FiSlack, FiChevronsDown, FiChevronsUp } from "react-icons/fi";
import { IoCaretBackCircleSharp, IoCaretForwardCircle } from "react-icons/io5";
import { sideBarData, starredList } from "./SideBarConstant";
import "./sidebar.scss";

const SideBar = () => {
  // state hook for the functionality

  const [showStarred, setShowStarred] = useState(false);
  const [Toggle, setToggle] = useState(false);

  return (
    <div className={`side-bar${!Toggle ? "" : "-toggled"}`}>
      <div className={`company-details${!Toggle ? "" : "-toggled"}`}>
        <span className="company-logo">
          <FiSlack />
          {!Toggle && <span>E founders</span>}
        </span>
        <span className="image">
          <img
            className="avatar"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            alt="Name"
          />
        </span>
        <span className="slider" onClick={() => setToggle(!Toggle)}>
          {!Toggle ? <IoCaretBackCircleSharp /> : <IoCaretForwardCircle />}
        </span>
      </div>
      <nav className="sidebar-nav">
        <ul className="sidebar-menu-items">
          {sideBarData.map((item, index) => {
            return (
              <li key={index} className="sidebar-text">
                <div className="sidebar-text-name">
                  {item.icon}
                  {!Toggle && <span>{item.title}</span>}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
      {!Toggle ? (
        <>
          <div
            className="sidebar-starred"
            onClick={() => setShowStarred(!showStarred)}
          >
            {showStarred ? <FiChevronsUp /> : <FiChevronsDown />}
            <span>Starred</span>
          </div>
          <>
            {showStarred && (
              <nav className="starred-nav">
                <ul className="starred-menu-items">
                  {starredList.map((item, index) => {
                    return (
                      <li key={index} className="starred-text">
                        <div className="starred-text-name">
                          {item.icon}
                          {!Toggle && <span>{item.title}</span>}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            )}
          </>
        </>
      ) : (
        <div
          className="sidebar-starred-toggle"
          onClick={() => {
            setToggle(!Toggle);
            setShowStarred(true);
          }}
        >
          <FiChevronsDown />
        </div>
      )}
    </div>
  );
};

export default SideBar;
