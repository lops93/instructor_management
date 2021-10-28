import { experimentalStyled as styled } from "@material-ui/core";
import { AppBar } from "@material-ui/core";

export const HeaderAppBar = styled(AppBar)`
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.05);

  ${({ theme }) => theme.breakpoints.up("md")} {
    .MuiToolbar-root {
      height: 80px;
    }
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    .MuiToolbar-root {
      display: flex;
      justify-content: center;
    }
  }
`;

export const HeaderLogo = styled("img")`
  height: 25px;
  margin: ${({ theme }) => theme.spacing(1.5)};

  ${({ theme }) => theme.breakpoints.up("md")} {
    height: 70px;
  }
`;

export const HeaderTitle = styled("h2")`
  color: ${({ theme }) => theme.palette.background.paper};
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
`;
