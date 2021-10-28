import React from "react";
import { HeaderAppBar, HeaderLogo, HeaderTitle } from "./header.style";
import { Toolbar } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <HeaderAppBar position={"sticky"}>
      <Toolbar>
        <HeaderLogo src={"/img/logos/corujawithbg.png"} />
        <HeaderTitle>Instructor Management</HeaderTitle>
      </Toolbar>
    </HeaderAppBar>
  );
};

export default Header;
