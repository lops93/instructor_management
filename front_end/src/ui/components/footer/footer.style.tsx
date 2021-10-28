import { experimentalStyled as styled, Typography } from "@material-ui/core/";
import { Container } from "@material-ui/core";

export const FooterContent = styled("footer")`
  background-color: ${({ theme }) => theme.palette.primary.light};
  color: ${({ theme }) =>
    theme.palette.getContrastText(theme.palette.primary.light)};
  border-top: 3px dotted ${({ theme }) => theme.palette.primary.main};
  padding: ${({ theme }) => theme.spacing(4)} 0;
  margin-top: auto;
  position: initial;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;

  ${({ theme }) => theme.breakpoints.down("md")} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const FooterTitle = styled((props) => (
  <Typography component={"h2"} variant={"body2"} {...props} />
))`
  font-weight: bold;
`;

export const Apps = styled("ul")`
  display: flex;
  list-style-type: none;
  padding: 0;
  //gap: ${({ theme }) => theme.spacing()};

  img {
    width: 90%;
  }
`;
