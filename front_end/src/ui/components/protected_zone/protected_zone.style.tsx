//arquivo de estilo
import { experimentalStyled as styled } from "@material-ui/core/styles";

export const Content = styled("div")`
  color: ${({ theme }) => theme.palette.text.secondary};
  background-color: ${({ theme }) => theme.palette.background.default};
  text-align: right;
  padding: ${({ theme }) => theme.spacing(2)};
  font-size: 1rem;
`;
