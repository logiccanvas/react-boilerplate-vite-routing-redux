import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import { pageNav } from "@/data/navigation";

import "./style.scss";

const Layout = () => {
  return (
    <div className="admin-layout">
      <header className="admin-page-header">
        <h1 className="header-title">Applictaion Header</h1>
      </header>

      <div className="admin-page">
        <nav className="site-nav">
          <ul className="menu">
            {pageNav.map(({ to, name }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="contents-area">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
