import { experimentalStyled, styled } from "@material-ui/core";

export const TitleContent = styled("div")`
  margin: ${({ theme }) => theme.spacing(5) + " " + 0};
  text-align: center;
  margin: 2rem 0;
`;

export const TitleStyle = styled("h2")`
  margin: 0;
  color: ${({ theme }) => theme.palette.primary.main};
  //color: #1c8aa5;
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
  }
`;
export const SubTitleStyle = styled("h3")`
  margin: ${({ theme }) => theme.spacing(1.5) + " " + 0};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: normal;

  ${({ theme }) => theme.breakpoints.down("md")} {
    font-size: ${({ theme }) => theme.typography.body2.fontSize};
  }
`;
