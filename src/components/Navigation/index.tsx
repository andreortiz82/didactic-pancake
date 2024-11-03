import { Flex, Menu } from "antd";
import { Link, NavLink, useLocation } from "react-router-dom";

import { GithubLogo, Heart } from "@phosphor-icons/react";

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { label: <NavLink to="/">Page 1</NavLink>, key: "/" },
    { label: <NavLink to="/page-2">Page 2</NavLink>, key: "/page-2" },
  ];

  return (
    <nav className="bg-white px-5 drop-shadow ">
      <Flex gap={16} justify="space-between" align="center">
        <Link to={"/"}>
          <Heart size={24} color="red" weight="duotone" />
        </Link>
        <Menu
          mode="horizontal"
          items={navItems}
          selectedKeys={[location.pathname]}
        />
        <Link to="https://github.com/andreortiz82/fantastic-carnival">
          <GithubLogo size={24} weight="duotone" />
        </Link>
      </Flex>
    </nav>
  );
};
