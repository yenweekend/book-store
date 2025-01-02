import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./index.css";
import { Button, Menu } from "antd";
import icons from "../../utils/icons";
import { NavLink, Link } from "react-router-dom";
const items = [
  {
    key: "1",
    icon: <icons.author></icons.author>,
    label: <Link to={"/admin/manage-author"}>Quản lí tác giả</Link>,
  },
  {
    key: "2",
    icon: <icons.book></icons.book>,
    label: <Link to={"/admin/manage-book"}>Quản lí sách</Link>,
  },
  {
    key: "3",
    icon: <icons.category></icons.category>,
    label: <Link to={"/admin/manage-categories"}>Quản lí categories</Link>,
  },
];
const Master = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <div className="admin-container">
        <div
          style={{
            height: "100vh",
          }}
          className="admin-menu"
        >
          <div
            style={{
              width: 256,
              height: "100vh",
            }}
          >
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="dark"
              inlineCollapsed={collapsed}
              items={items}
            />
          </div>
        </div>
        <div className="content">
          <div className="admin-header"></div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Master;
